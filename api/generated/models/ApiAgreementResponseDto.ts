/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ApiAgreementResponseDto = {
    /**
     * ID
     */
    id: number;
    /**
     * 파트너 ID
     */
    partnerId: number;
    /**
     * 동의서 파일 경로
     */
    agreementFilePath: string;
    /**
     * 파일명
     */
    fileName: string;
    /**
     * 파일 크기 (bytes)
     */
    fileSize: Record<string, any> | null;
    /**
     * 업로드 일시
     */
    uploadedAt: string;
    /**
     * 상태
     */
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    /**
     * 검토자 ID
     */
    reviewedBy: Record<string, any> | null;
    /**
     * 검토 일시
     */
    reviewedAt: Record<string, any> | null;
    /**
     * 검토 의견
     */
    reviewComment: Record<string, any> | null;
    /**
     * 버전
     */
    version: number;
    /**
     * 생성일
     */
    createdAt: string;
    /**
     * 수정일
     */
    updatedAt: string;
};

