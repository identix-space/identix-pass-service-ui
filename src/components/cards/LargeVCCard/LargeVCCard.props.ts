export interface LargeVCCardProps {
    did: string;
    status: 'Active' | 'Expired' | 'Review';
    issued: string;
    img: string;
    firstName: string;
    lastName: string;
    citizenship: string;
    dateOfBirth: string;
    id: string;
}

export interface Status {
    status: 'Active' | 'Expired' | 'Review';
}
