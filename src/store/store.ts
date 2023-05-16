import create from 'zustand';

interface MyDid {
    myDid: string;
    setMyDid: (myDid: string) => void;
    myName: string;
    setMyName: (myName: string) => void;
}

export const useMyDidStore = create<MyDid>((set) => ({
    myDid: '',
    setMyDid: (myDid) =>
        set((state) => ({
            ...state,
            myDid
        })),
    myName: '',
    setMyName: (myName) =>
        set((state) => ({
            ...state,
            myName
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

