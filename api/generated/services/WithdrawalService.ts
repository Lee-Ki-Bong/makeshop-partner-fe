/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateWithdrawalRequestDto } from '../models/CreateWithdrawalRequestDto';
import type { WithdrawalReasonResponseDto } from '../models/WithdrawalReasonResponseDto';
import type { WithdrawalRequestResponseDto } from '../models/WithdrawalRequestResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WithdrawalService {
    /**
     * 탈퇴 사유 목록
     * @returns WithdrawalReasonResponseDto 조회 성공
     * @throws ApiError
     */
    public static myWithdrawalControllerGetReasons(): CancelablePromise<Array<WithdrawalReasonResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/withdrawal/reasons',
        });
    }
    /**
     * 탈퇴 요청
     * @param requestBody
     * @returns WithdrawalRequestResponseDto 요청 성공
     * @throws ApiError
     */
    public static myWithdrawalControllerCreateRequest(
        requestBody: CreateWithdrawalRequestDto,
    ): CancelablePromise<WithdrawalRequestResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/withdrawal/requests',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 내 탈퇴 요청
     * @returns WithdrawalRequestResponseDto 조회 성공
     * @throws ApiError
     */
    public static myWithdrawalControllerFindMyRequest(): CancelablePromise<WithdrawalRequestResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/withdrawal/requests/me',
        });
    }
    /**
     * 탈퇴 요청 취소
     * @returns WithdrawalRequestResponseDto 취소 성공
     * @throws ApiError
     */
    public static myWithdrawalControllerCancelRequest(): CancelablePromise<WithdrawalRequestResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/withdrawal/requests/me/cancel',
        });
    }
}
