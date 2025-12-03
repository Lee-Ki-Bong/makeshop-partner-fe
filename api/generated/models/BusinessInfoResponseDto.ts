/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BusinessInfoResponseDto = {
    /**
     * ID
     */
    id: number;
    /**
     * 파트너 ID
     */
    partnerId: number;
    /**
     * 사업자 유형
     */
    businessType: 'INDIVIDUAL' | 'CORPORATE' | 'NON_BUSINESS';
    /**
     * 사업자등록증 경로
     */
    businessRegistrationPath: Record<string, any> | null;
    /**
     * 상호/법인명
     */
    businessName: Record<string, any> | null;
    /**
     * 사업자등록번호
     */
    businessNumber: Record<string, any> | null;
    /**
     * 대표자명
     */
    representativeName: Record<string, any> | null;
    /**
     * 우편번호
     */
    postalCode: Record<string, any> | null;
    /**
     * 기본주소
     */
    baseAddress: Record<string, any> | null;
    /**
     * 상세주소
     */
    detailAddress: Record<string, any> | null;
    /**
     * 개업일
     */
    openingDate: Record<string, any> | null;
    /**
     * 업태
     */
    businessCategory: Record<string, any> | null;
    /**
     * 종목
     */
    businessItem: Record<string, any> | null;
    /**
     * 통신판매업 신고 여부
     */
    hasOnlineSalesReport: boolean;
    /**
     * 통신판매업 신고번호
     */
    onlineSalesNumber: Record<string, any> | null;
    /**
     * 미신고 사유
     */
    noReportReason: 'PREPARING' | 'NOT_APPLICABLE' | 'OTHER' | null;
    /**
     * 미신고 사유 상세
     */
    noReportDetail: Record<string, any> | null;
    /**
     * 검증 상태
     */
    verificationStatus: 'UNVERIFIED' | 'VERIFIED' | 'REJECTED';
    /**
     * 검증 일시
     */
    verifiedAt: Record<string, any> | null;
    /**
     * 생성일
     */
    createdAt: string;
    /**
     * 수정일
     */
    updatedAt: string;
};

