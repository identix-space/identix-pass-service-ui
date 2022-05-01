import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {useWhoamiLazyQuery, useCheckAccountExistsLazyQuery} from '../../generated/graphql';
import {redirect} from '../../utils/misc';
import {ReactElement} from 'react';

interface IAuthProvider {
    protectedRoutes: string[];
    children: ReactElement;
}


export const AuthProvider = (props: IAuthProvider) => {
    const router = useRouter();

    const pathIsProtected = props.protectedRoutes.includes(router.pathname);

    const [whoami] = useWhoamiLazyQuery();
    const [checkAccountExist] = useCheckAccountExistsLazyQuery();

    useEffect(() => {
        (async () => {
            if (pathIsProtected) {
                try {
                    const userDid = await whoami();
                    console.log(userDid.data?.whoami);
                    if (userDid.data?.whoami) {
                        const isAccountExist = await checkAccountExist({
                            variables: {
                                did: userDid.data?.whoami
                            }
                        });
                        if (!isAccountExist.data?.checkAccountExists) {
                            redirect('/');
                        }
                    } else {
                        redirect('/');
                    }
                } catch (e) {
                    redirect('/');
                }
            }
        })();
    }, [pathIsProtected]);

    return props.children;
};
