import React, {ReactNode, useEffect, useState} from 'react';
import {LogIn} from '../components/templates/Login';
import Header from '../components/layout/Header';
import styled from 'styled-components';
import {Loader} from '../components/elements';
import {
    extractTokenFromUrl,
    generateAfterWeb2OutServisesUserLogin,
    redirect,
    setAuthorizationToken
} from '../utils/misc';
import {useRouter} from 'next/router';

export default function IndexPage(): ReactNode {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const urlAfterLogin = generateAfterWeb2OutServisesUserLogin(router.asPath);
        let token;
        try {
            token = extractTokenFromUrl(urlAfterLogin);
        } catch (e) {
            console.log(e);
        }
        if (token) {
            setAuthorizationToken(token);
            redirect('/profile');
        } else if (typeof localStorage !== 'undefined') {
            const tokenFromStorage = localStorage.getItem('authorization-token');

            if (!tokenFromStorage) {
                setLoading(false);
            } else {
                redirect('/profile');
            }
        }
    }, [router]);

    return (
        <Main>
            <Header/>
            {loading ? <Loader/> : <LogIn/>}
        </Main>
    );
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 52px;
  width: 100vw;
  min-height: 100vh;
  background: url('/assets/bg.webp') center/cover no-repeat;

  @media(min-width: 1400px) {
    padding-top: 56px;
  }
`;
