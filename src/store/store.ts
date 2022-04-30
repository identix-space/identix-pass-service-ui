import create from 'zustand';

interface VC {
    vcDid: string;
    vcTypeDid: string;
    vcParams: string;
    vcRawText: string;
    issuerDid: string;
    holderDid: string;
}

interface issuerVC {
    holderDid: string;
    vcTypeDid: string;
    vcTypeTitle: string;
    vcParams: string;
    setHolderDid: (holderDid: string) => void;
    setVcTypeDid: (vcTypeDid: string) => void;
    setVcTypeTitle: (vcTypeTitle: string) => void;
    setVcParams: (vcParams: string) => void;
}

interface VCState {
    vcs: VC[];
    addVC: (vcDid: string, vcTypeDid: string, vcParams: string, vcRawText: string, issuerDid: string, holderDid: string) => void;
}

export const useVCStore = create<VCState>((set) => ({
    vcs: [],
    addVC: (vcDid: string, vcTypeDid: string, vcParams: string, vcRawText: string, issuerDid: string, holderDid: string) =>
        set((state) => ({
            vcs: [
                ...state.vcs,
                {vcDid: vcDid, vcTypeDid: vcTypeDid, vcParams: vcParams, vcRawText: vcRawText, issuerDid: issuerDid, holderDid: holderDid}
            ]
        }))
}));

export const useIssuerVCStore = create<issuerVC>((set) => ({
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

