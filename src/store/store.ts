import create from 'zustand';

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

