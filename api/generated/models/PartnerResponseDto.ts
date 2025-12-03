/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PartnerResponseDto = {
    /**
     * 파트너명
     */
    partnerName: string;
    /**
     * 대표 이미지 URL
     */
    representativeImage: Record<string, any> | null;
    /**
     * 홈페이지 URL
     */
    homepageUrl: Record<string, any> | null;
    /**
     * 대표자명
     */
    representativeName: Record<string, any> | null;
    /**
     * 이메일
     */
    email: Record<string, any> | null;
    /**
     * 전화번호
     */
    phone: Record<string, any> | null;
    /**
     * 우편번호
     */
    postalCode: Record<string, any> | null;
    /**
     * 기본 주소
     */
    baseAddress: Record<string, any> | null;
    /**
     * 상세 주소
     */
    detailAddress: Record<string, any> | null;
    /**
     * 소개글
     */
    introduction: Record<string, any> | null;
    /**
     * 파트너 상태
     */
    status: 'ACTIVE' | 'SUSPENDED';
    /**
     * 생성일
     */
    createdAt: string;
    /**
     * 수정일
     */
    updatedAt: string;
};

