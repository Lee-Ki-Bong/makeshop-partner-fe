/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedWithdrawalRequestResponseDto } from '../models/PaginatedWithdrawalRequestResponseDto';
import type { ProcessWithdrawalDto } from '../models/ProcessWithdrawalDto';
import type { WithdrawalRequestResponseDto } from '../models/WithdrawalRequestResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminWithdrawalsService {
    /**
     * 탈퇴 요청 목록 (관리자)
     * @param status 상태
     * @param page 페이지
     * @param limit 페이지당 개수
     * @returns PaginatedWithdrawalRequestResponseDto 조회 성공
     * @throws ApiError
     */
    public static withdrawalsAdminControllerGetRequests(
        status?: 'PENDING' | 'APPROVED' | 'REJECTED' | 'CANCELLED',
        page?: number,
        limit?: number,
    ): CancelablePromise<PaginatedWithdrawalRequestResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/withdrawals/requests',
            query: {
                'status': status,
                'page': page,
                'limit': limit,
            },
        });
    }
    /**
     * 탈퇴 승인 (관리자)
     * @param id
     * @returns WithdrawalRequestResponseDto 승인 성공
     * @throws ApiError
     */
    public static withdrawalsAdminControllerApproveRequest(
        id: number,
    ): CancelablePromise<WithdrawalRequestResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/withdrawals/requests/{id}/approve',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 탈퇴 반려 (관리자)
     * @param id
     * @param requestBody
     * @returns WithdrawalRequestResponseDto 반려 성공
     * @throws ApiError
     */
    public static withdrawalsAdminControllerRejectRequest(
        id: number,
        requestBody: ProcessWithdrawalDto,
    ): CancelablePromise<WithdrawalRequestResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/withdrawals/requests/{id}/reject',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
