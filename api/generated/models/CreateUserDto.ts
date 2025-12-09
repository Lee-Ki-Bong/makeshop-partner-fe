/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateUserDto = {
    /**
     * 유저 ID
     */
    loginUid: string;
    /**
     * 글로벌 ID
     */
    globalUid: string;
    /**
     * 파트너 이름
     */
    name: string;
    /**
     * 이메일
     */
    email?: string;
    /**
     * 전화번호
     */
    phone?: string;
    /**
     * 대표 이미지
     */
    representativeImage?: string;
    /**
     * 홈페이지 URL
     */
    homepageUrl?: string;
    /**
     * 대표자명
     */
    representativeName?: string;
    /**
     * 우편번호
     */
    postalCode?: string;
    /**
     * 기본 주소
     */
    baseAddress?: string;
    /**
     * 상세 주소
     */
    detailAddress?: string;
    /**
     * 소개글
     */
    introduction?: string;
};

