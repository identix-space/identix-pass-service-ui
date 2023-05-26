import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {useWhoamiLazyQuery, useCheckAccountExistsLazyQuery, useGetVcTypesLazyQuery} from '../../generated/graphql';
import {redirect} from '../../utils/misc';
import {ReactElement} from 'react';
import {useMyAccountInfoStore} from '../../store/store';

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
    const [getVcTypes] = useGetVcTypesLazyQuery();

    const {setMyDid, setDataFromUAE, setVcTypes} = useMyAccountInfoStore();

    // eslint-disable-next-line sonarjs/cognitive-complexity
    useEffect(() => {
        (async () => {
            if (pathIsProtected) {
                try {
                    const userDid = await whoami();
                    if (userDid.data?.whoami) {
                        setMyDid(userDid.data?.whoami.did);
                        console.log('1', userDid.data?.whoami);
                        if (userDid.data?.whoami.connections) {
                            console.log('2', userDid.data?.whoami);
                            setDataFromUAE(userDid.data?.whoami.connections[0]?.otherData);
                        }
                        const isAccountExist = await checkAccountExist({
                            variables: {
                                did: userDid.data?.whoami.did
                            }
                        });
                        if (!isAccountExist.data?.checkAccountExists) {
                            console.log('3', isAccountExist.data?.checkAccountExists);
                            console.log('4', localStorage.getItem(authTokenConstant));
                            localStorage.removeItem(authTokenConstant);
                            //redirect('/');
                        } else {
                            const vcTypes = await getVcTypes();
                            if (vcTypes.data?.getVcTypes) {
                                setVcTypes(vcTypes.data?.getVcTypes);
                            }
                        }
                    } else {
                        localStorage.removeItem(authTokenConstant);
                        //redirect('/');
                    }
                } catch (e) {
                    console.log('err', e);
                    localStorage.removeItem(authTokenConstant);
                    //redirect('/');
                }
            } else if (pathIsPublic && localStorage.getItem(authTokenConstant)) {
                redirect('/profile');
            }
        })();
    }, []);

    return props.children;
};
