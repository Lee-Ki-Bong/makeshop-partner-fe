/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type WithdrawalRequestResponseDto = {
    /**
     * ID
     */
    id: number;
    /**
     * 파트너 ID
     */
    partnerId: number;
    /**
     * 탈퇴 사유 ID
     */
    withdrawalReasonId: Record<string, any> | null;
    /**
     * 기타 사유
     */
    customReason: Record<string, any> | null;
    /**
     * 요청자명
     */
    requesterName: Record<string, any> | null;
    /**
     * 탈퇴 동의 확인
     */
    agreementConfirmed: boolean;
    /**
     * 상태
     */
    status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'CANCELLED';
    /**
     * 처리자 ID
     */
    processedBy: Record<string, any> | null;
    /**
     * 처리 일시
     */
    processedAt: Record<string, any> | null;
    /**
     * 반려 사유
     */
    rejectReason: Record<string, any> | null;
    /**
     * 생성일
     */
    createdAt: string;
    /**
     * 수정일
     */
    updatedAt: string;
};

