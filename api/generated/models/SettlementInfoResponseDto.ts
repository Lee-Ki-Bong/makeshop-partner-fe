/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SettlementInfoResponseDto = {
    /**
     * ID
     */
    id: number;
    /**
     * 파트너 ID
     */
    partnerId: number;
    /**
     * 담당자명
     */
    managerName: Record<string, any> | null;
    /**
     * 담당자 이메일
     */
    managerEmail: Record<string, any> | null;
    /**
     * 담당자 연락처
     */
    managerPhone: Record<string, any> | null;
    /**
     * 은행명
     */
    bankName: Record<string, any> | null;
    /**
     * 계좌번호
     */
    accountNumber: Record<string, any> | null;
    /**
     * 예금주명
     */
    accountHolderName: Record<string, any> | null;
    /**
     * 통장사본 경로
     */
    bankbookCopyPath: Record<string, any> | null;
    /**
     * 생성일
     */
    createdAt: string;
    /**
     * 수정일
     */
    updatedAt: string;
};

