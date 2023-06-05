import React from 'react';
import {useAuth} from '../AuthProvider/AuthProvider';
import {useRouter} from 'next/router';
import {ReactElement, useEffect} from 'react';
import {Loader} from '../../elements';
import {redirect} from '../../../utils/misc';

interface IPrivateRoute {
    privateRoutes: string[];
    children: ReactElement;
}

export function PrivateRoute({privateRoutes, children}: IPrivateRoute) {
    const router = useRouter();
    const {isAuthenticated, isLoading} = useAuth();

    const pathIsProtected = privateRoutes.includes(router.pathname.split('/')[1]);

    useEffect(() => {
        if (!isLoading && !isAuthenticated && pathIsProtected) {
            redirect('/');
        }
    }, [isLoading, isAuthenticated, pathIsProtected]);

    if ((isLoading || !isAuthenticated) && pathIsProtected) {
        return <Loader />;
    }

    return children;
}
