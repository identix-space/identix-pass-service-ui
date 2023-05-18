import create from 'zustand';

interface DataFromUAEInterface {
    uuid: string;
    email: string;
    gender: string;
    mobile: string;
    userType: string;
    fullnameEN: string;
    lastnameEN: string;
    firstnameEN: string;
}

interface VcTypesInterface {
    vcTypeDid: string;
    vcTypeTag: string;
}

interface MyAccountInfoInterface {
    myDid: string;
    setMyDid: (myDid: string) => void;
    dataFromUAE: DataFromUAEInterface;
    setDataFromUAE: (myName: DataFromUAEInterface) => void;
    vcTypes: VcTypesInterface[];
    setVcTypes: (vcTypes: VcTypesInterface[]) => void;
}

export const useMyAccountInfoStore = create<MyAccountInfoInterface>((set) => ({
    myDid: '',
    setMyDid: (myDid) =>
        set((state) => ({
            ...state,
            myDid
        })),
    dataFromUAE: {
        uuid: '',
        email: '',
        gender: '',
        mobile: '',
        userType: '',
        fullnameEN: '',
        lastnameEN: '',
        firstnameEN: ''
    },
    setDataFromUAE: (dataFromUAE) =>
        set((state) => ({
            ...state,
            dataFromUAE
        })),
    vcTypes: [],
    setVcTypes: (vcTypes) =>
        set((state) => ({
            ...state,
            vcTypes
        }))
}));

interface StateIdVC {
    holderDid: string;
    vcTypeDid: string;
    vcTypeTitle: string;
    vcParams: string;
    setHolderDid: (holderDid: string) => void;
    setVcTypeDid: (vcTypeDid: string) => void;
    setVcTypeTitle: (vcTypeTitle: string) => void;
    setVcParams: (vcParams: string) => void;
}

export const useStateIdVCStore = create<StateIdVC>((set) => ({
    holderDid: '',
    setHolderDid: (holderDid) =>
        set((state) => ({
            ...state,
            holderDid
        })),
    vcTypeDid: '',
    vcTypeTitle: '',
    setVcTypeDid: (vcTypeDid) =>
        set((state) => ({
            ...state,
            vcTypeDid
        })),
    setVcTypeTitle: (vcTypeTitle) =>
        set((state) => ({
            ...state,
            vcTypeTitle
        })),
    vcParams: '',
    setVcParams: (vcParams) =>
        set((state) => ({
            ...state,
            vcParams
        }))
}));

