/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PartnerAgreementResponseDto = {
    /**
     * ID
     */
    id: number;
    /**
     * 파트너 ID
     */
    partnerId: number;
    /**
     * 이용약관 동의 여부
     */
    termsOfUse: boolean;
    /**
     * 이용약관 동의 일시
     */
    termsOfUseAgreedAt: Record<string, any> | null;
    /**
     * 개인정보 처리방침 동의 여부
     */
    privacyPolicy: boolean;
    /**
     * 개인정보 처리방침 동의 일시
     */
    privacyPolicyAgreedAt: Record<string, any> | null;
    /**
     * 마케팅 SMS 수신 동의 여부
     */
    marketingSms: boolean;
    /**
     * 마케팅 SMS 수신 동의 일시
     */
    marketingSmsAgreedAt: Record<string, any> | null;
    /**
     * 마케팅 이메일 수신 동의 여부
     */
    marketingEmail: boolean;
    /**
     * 마케팅 이메일 수신 동의 일시
     */
    marketingEmailAgreedAt: Record<string, any> | null;
    /**
     * 생성일
     */
    createdAt: string;
    /**
     * 수정일
     */
    updatedAt: string;
};

