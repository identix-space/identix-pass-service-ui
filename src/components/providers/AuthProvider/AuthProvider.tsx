import React, {ReactElement, createContext, useContext, useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import {
    useCheckAccountExistsLazyQuery,
    useGetVcTypesLazyQuery, useLogoutLazyQuery,
    useWhoamiLazyQuery
} from '../../../generated/graphql';
import {useMyAccountInfoStore} from '../../../store/store';
import {privateRoutes} from '../../../constants';
import {redirect} from '../../../utils/misc';

interface IAuthContext {
    isAuthenticated?: boolean;
    login: () => void;
    logoutFunc: () => void;
    isLoading?: boolean;
}

interface IAuthProvider {
    children: ReactElement;
}

const AuthContext = createContext<IAuthContext | null>(null);

function AuthProvider({children}: IAuthProvider) {
    const router = useRouter();
    const authTokenConstant = 'authorization-token';
    const pathIsProtected = privateRoutes.includes(router.pathname.split('/')[1]);

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const {setMyDid, setDataFromUAE, setVcTypes} = useMyAccountInfoStore();

    const [whoami] = useWhoamiLazyQuery();
    const [logout] = useLogoutLazyQuery();
    const [checkAccountExist] = useCheckAccountExistsLazyQuery();
    const [getVcTypes] = useGetVcTypesLazyQuery();

    useEffect(() => {
        login();
    }, []);

    const login = async () => {
        if (pathIsProtected) {
            try {
                const userDid = await whoami();
                if (userDid.data?.whoami) {
                    setMyDid(userDid.data?.whoami.did);
                    if (userDid.data?.whoami.connections) {
                        setDataFromUAE(userDid.data?.whoami.connections[0]?.otherData);
                    }
                    const isAccountExist = await checkAccountExist({
                        variables: {
                            did: userDid.data?.whoami.did
                        }
                    });
                    if (!isAccountExist.data?.checkAccountExists) {
                        localStorage.removeItem(authTokenConstant);
                        redirect('/');
                    } else {
                        const vcTypes = await getVcTypes();
                        if (vcTypes.data?.getVcTypes) {
                            setVcTypes(vcTypes.data?.getVcTypes);
                        }
                    }
                } else {
                    localStorage.removeItem(authTokenConstant);
                    redirect('/');
                }
            } catch (e) {
                localStorage.removeItem(authTokenConstant);
                redirect('/');
            } finally {
                setIsLoading(false);
                setIsAuthenticated(true);
            }
        }
    };

    const logoutFunc = async () => {
        try {
            const logoutData = await logout();
            if (logoutData.data?.logout) {
                setIsAuthenticated(false);
                localStorage.clear();
                redirect('/');
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                login,
                logoutFunc,
                isLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext) as IAuthContext;

export {AuthProvider, useAuth};

