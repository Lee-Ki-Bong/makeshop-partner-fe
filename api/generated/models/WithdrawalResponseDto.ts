/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type WithdrawalResponseDto = {
    /**
     * 사용자 탈퇴 사유. 기타 선택시 사용
     */
    customReason: Record<string, any>;
    /**
     * 상태
     */
    status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'CANCELLED';
    /**
     * 거부 사유
     */
    rejectReason: Record<string, any>;
    /**
     * 사용자 탈퇴 사유 테이블의 reasonCode
     */
    reasonCode: Record<string, any>;
    /**
     * 사용자 탈퇴 사유 테이블의 reasonContent
     */
    reasonContent: Record<string, any>;
};

