export interface LargeRealEstateVCCardProps {
    did: string;
    url: string;
    rawData?: string;
    vcParams?: LargeRealEstateVCParamsProps;
}

interface LargeRealEstateVCParamsProps {
    titledeedid?: string;
    city?: string;
    district?: string;
    address?: string;
    type?: string;
    bedrooms?: string;
    livingspace?: string;
    owner?: string;
    ownership_begin_date?: string;
    issuing_institution?: string;
    issuance_date?: string;
    certificate_id?: string;
}

export interface Status {
    status: string;
}
