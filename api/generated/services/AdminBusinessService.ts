/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessInfoDraftResponseDto } from '../models/BusinessInfoDraftResponseDto';
import type { PaginatedBusinessInfoDraftResponseDto } from '../models/PaginatedBusinessInfoDraftResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminBusinessService {
    /**
     * 사업자 정보 승인 (관리자)
     * @param id
     * @returns BusinessInfoDraftResponseDto 승인 성공
     * @throws ApiError
     */
    public static businessAdminControllerApproveDraft(
        id: number,
    ): CancelablePromise<BusinessInfoDraftResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/business/drafts/{id}/approve',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 사업자 정보 반려 (관리자)
     * @param id
     * @returns BusinessInfoDraftResponseDto 반려 성공
     * @throws ApiError
     */
    public static businessAdminControllerRejectDraft(
        id: number,
    ): CancelablePromise<BusinessInfoDraftResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/business/drafts/{id}/reject',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 승인 대기 목록 (관리자)
     * @param page
     * @param limit
     * @returns PaginatedBusinessInfoDraftResponseDto 조회 성공
     * @throws ApiError
     */
    public static businessAdminControllerGetPendingDrafts(
        page: number,
        limit: number,
    ): CancelablePromise<PaginatedBusinessInfoDraftResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/business/drafts/pending',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }
}
