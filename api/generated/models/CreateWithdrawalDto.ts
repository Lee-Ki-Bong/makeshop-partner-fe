/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateWithdrawalDto = {
    /**
     * 탈퇴 사유 code
     */
    reasonCode: string;
    /**
     * 기타 사유 시 사용
     */
    customReason?: string;
    /**
     * 탈퇴 동의 확인
     */
    agreementConfirmed: boolean;
};

