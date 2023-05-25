export interface LargeEmiratesIdVCCardProps {
    did: string;
    status: string;
    rawData?: string;
    vcParams?: LargeEmiratesIdVCParamsProps;
}

interface LargeEmiratesIdVCParamsProps {
    firstNameEN?: string;
    lastNameEN?: string;
    nationalityEN?: string;
    firstNameAR?: string;
    lastNameAR?: string;
    nationalityAR?: string;
    gender?: string;
    idcardIssuanceDate?: string;
    idcardExpirationDate?: string;
    idcardIssuer?: string;
}

export interface Status {
    status: string;
}
