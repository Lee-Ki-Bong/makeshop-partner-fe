/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpsertBusinessInfoDto = {
    /**
     * 사업자 유형
     */
    businessType: 'INDIVIDUAL' | 'CORPORATE' | 'NON_BUSINESS';
    /**
     * 증빙 파일
     */
    evidenceFilePath: string;
    /**
     * 상호(법인명)
     */
    businessName: string;
    /**
     * 사업자등록번호
     */
    businessNumber: string;
    /**
     * 대표자명
     */
    representativeName: string;
    /**
     * 사업장 우편번호
     */
    postalCode: string;
    /**
     * 사업장 기본 주소
     */
    baseAddress: string;
    /**
     * 사업장 상세 주소
     */
    detailAddress: string;
    /**
     * 개업일
     */
    openingDate?: Record<string, any> | null;
    /**
     * 업태
     */
    businessCategory: string;
    /**
     * 업종
     */
    businessItem: string;
    /**
     * 통신판매업 신고 여부
     */
    isEcommerceRegistered: boolean;
    /**
     * 통신판매업 신고번호
     */
    ecommerceRegistrationNo: string;
    /**
     * 반려 사유
     */
    rejectReason?: string;
};

