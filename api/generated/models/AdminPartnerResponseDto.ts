/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AdminPartnerResponseDto = {
    /**
     * 파트너명
     */
    partnerName: string;
    /**
     * 대표 이미지 URL
     */
    representativeImage: string;
    /**
     * 홈페이지 URL
     */
    homepageUrl: string;
    /**
     * 대표자명
     */
    representativeName: string;
    /**
     * 이메일
     */
    email: string;
    /**
     * 전화번호
     */
    phone: string;
    /**
     * 우편번호
     */
    postalCode: string;
    /**
     * 기본 주소
     */
    baseAddress: string;
    /**
     * 상세 주소
     */
    detailAddress: string;
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

