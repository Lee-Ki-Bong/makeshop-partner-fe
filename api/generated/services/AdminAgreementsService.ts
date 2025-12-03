/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiAgreementResponseDto } from '../models/ApiAgreementResponseDto';
import type { PartnerAgreementResponseDto } from '../models/PartnerAgreementResponseDto';
import type { ReviewApiAgreementDto } from '../models/ReviewApiAgreementDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminAgreementsService {
    /**
     * API 동의서 승인 (관리자)
     * @param id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static agreementsAdminControllerApprove(
        id: number,
        requestBody: ReviewApiAgreementDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/agreements/api/{id}/approve',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API 동의서 반려 (관리자)
     * @param id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static agreementsAdminControllerReject(
        id: number,
        requestBody: ReviewApiAgreementDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/agreements/api/{id}/reject',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 특정 파트너 약관 동의 내역 (관리자)
     * @param partnerId
     * @returns PartnerAgreementResponseDto 조회 성공
     * @throws ApiError
     */
    public static agreementsAdminControllerFindPartnerAgreement(
        partnerId: number,
    ): CancelablePromise<PartnerAgreementResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/agreements/partner/{partnerId}',
            path: {
                'partnerId': partnerId,
            },
        });
    }
    /**
     * 모든 API 약관 동의 내역 (관리자)
     * @returns ApiAgreementResponseDto 조회 성공
     * @throws ApiError
     */
    public static agreementsAdminControllerFindAllApiAgreements(): CancelablePromise<Array<ApiAgreementResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/agreements/api',
        });
    }
    /**
     * 특정 파트너 API 약관 동의 내역 (관리자)
     * @param partnerId
     * @returns ApiAgreementResponseDto 조회 성공
     * @throws ApiError
     */
    public static agreementsAdminControllerFindApiAgreements(
        partnerId: number,
    ): CancelablePromise<Array<ApiAgreementResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/agreements/api/{partnerId}',
            path: {
                'partnerId': partnerId,
            },
        });
    }
    /**
     * 승인 대기 목록 (관리자)
     * @param page
     * @param limit
     * @returns any
     * @throws ApiError
     */
    public static agreementsAdminControllerGetPending(
        page: number,
        limit: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/agreements/api/pending',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }
}
