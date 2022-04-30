export interface SmallVCCardProps {
    citizenship: string;
    title: string;
    did: string;
    status: 'Active' | 'Expired';
    img: string;
    verificationStatus?: string;
}

