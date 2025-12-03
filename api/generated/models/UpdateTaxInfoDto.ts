/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateTaxInfoDto = {
    /**
     * 과세 유형
     */
    taxType: 'SIMPLIFIED' | 'GENERAL';
    /**
     * 증빙 유형
     */
    proofType: 'TAX_INVOICE' | 'CASH_RECEIPT_EXPENSE' | 'CASH_RECEIPT_DEDUCTION';
    /**
     * 담당자명
     */
    managerName?: string;
    /**
     * 담당자 연락처
     */
    managerPhone?: string;
};

