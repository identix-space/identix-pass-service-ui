import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {useWhoamiLazyQuery, useCheckAccountExistsLazyQuery} from '../../generated/graphql';
import {redirect} from '../../utils/misc';
import {ReactElement} from 'react';
import {useMyDidStore} from '../../store/store';

interface IAuthProvider {
    protectedRoutes: string[];
    publicRoutes: string[];
    children: ReactElement;
}


export const AuthProvider = (props: IAuthProvider) => {

    const authTokenConstant = 'authorization-token';

    const router = useRouter();

    const pathIsProtected = props.protectedRoutes.includes(router.pathname.split('/')[1]);
    const pathIsPublic = props.publicRoutes.includes(router.pathname);

    const [whoami] = useWhoamiLazyQuery();
    const [checkAccountExist] = useCheckAccountExistsLazyQuery();

    const {setMyDid, setMyName} = useMyDidStore();

    // eslint-disable-next-line sonarjs/cognitive-complexity
    useEffect(() => {
        (async () => {
            if (pathIsProtected) {
                try {
                    const userDid = await whoami();
                    if (userDid.data?.whoami) {
                        setMyDid(userDid.data?.whoami.did);
                        if (userDid.data?.whoami.connections) {
                            setMyName(userDid.data?.whoami.connections[0]?.otherData.fullnameEN);
                        }
                        const isAccountExist = await checkAccountExist({
                            variables: {
                                did: userDid.data?.whoami.did
                            }
                        });
                        if (!isAccountExist.data?.checkAccountExists) {
                            localStorage.removeItem(authTokenConstant);
                            redirect('/');
                        }
                    } else {
                        localStorage.removeItem(authTokenConstant);
                        redirect('/');
                    }
                } catch (e) {
                    localStorage.removeItem(authTokenConstant);
                    redirect('/');
                }
            } else if (pathIsPublic && localStorage.getItem(authTokenConstant)) {
                redirect('/profile');
            }
        })();
    }, []);

    return props.children;
};
