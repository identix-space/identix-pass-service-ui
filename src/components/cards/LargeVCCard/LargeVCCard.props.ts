export interface LargeVCCardProps {
    did: string;
    status: string;
    issued: string;
    img: string;
    firstName: string;
    lastName: string;
    citizenship: string;
    dateOfBirth: string;
    dateOfExpiry: string;
    id: string;
    rawData?: string;
}

export interface Status {
    status: string;
}
