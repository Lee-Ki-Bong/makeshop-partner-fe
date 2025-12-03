/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateBusinessInfoDto = {
    /**
     * 사업자 유형
     */
    businessType: 'INDIVIDUAL' | 'CORPORATE' | 'NON_BUSINESS';
    /**
     * 사업자등록증 경로
     */
    businessRegistrationPath?: string;
    /**
     * 상호/법인명
     */
    businessName?: string;
    /**
     * 사업자등록번호
     */
    businessNumber?: string;
    /**
     * 대표자명
     */
    representativeName?: string;
    /**
     * 우편번호
     */
    postalCode?: string;
    /**
     * 기본주소
     */
    baseAddress?: string;
    /**
     * 상세주소
     */
    detailAddress?: string;
    /**
     * 개업일 (YYYY-MM-DD)
     */
    openingDate?: string;
    /**
     * 업태
     */
    businessCategory?: string;
    /**
     * 종목
     */
    businessItem?: string;
    /**
     * 통신판매업 신고 여부
     */
    hasOnlineSalesReport?: boolean;
    /**
     * 통신판매업 신고번호
     */
    onlineSalesNumber?: string;
    /**
     * 미신고 사유
     */
    noReportReason?: 'PREPARING' | 'NOT_APPLICABLE' | 'OTHER';
    /**
     * 미신고 사유 상세
     */
    noReportDetail?: string;
};

