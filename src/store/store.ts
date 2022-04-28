import create from 'zustand';

export type VCType = {
    citizenship: string;
    title: string;
    did: string;
    status: 'Active' | 'Expired';
    img: string;
    setCitizenship: (citizenship: string) => void;
    setTitle: (title: string) => void;
    setDid: (did: string) => void;
    setStatus: (status: 'Active' | 'Expired') => void;
    setImg: (img: string) => void;
}

const useStore = create<VCType>((set) => ({
    citizenship: 'Belarus',
    title: 'State ID',
    did: '31253313412',
    status: 'Active',
    img: '/assets/identix-pass-logo.svg',
    setCitizenship: (citizenship) => set({citizenship}),
    setTitle: (title) => set({title}),
    setDid: (did) => set({did}),
    setStatus: (status) => set({status}),
    setImg: (img) => set({img})
}));

export default useStore;
