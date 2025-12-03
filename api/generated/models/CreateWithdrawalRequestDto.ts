/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateWithdrawalRequestDto = {
    /**
     * 탈퇴 사유 ID
     */
    withdrawalReasonId?: number;
    /**
     * 기타 사유
     */
    customReason?: string;
    /**
     * 요청자명
     */
    requesterName?: string;
    /**
     * 탈퇴 동의 확인
     */
    agreementConfirmed: boolean;
};

