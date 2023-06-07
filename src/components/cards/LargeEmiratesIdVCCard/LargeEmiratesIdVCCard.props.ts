export interface LargeEmiratesIdVCCardProps {
    did: string;
    rawData?: string;
    url: string;
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
