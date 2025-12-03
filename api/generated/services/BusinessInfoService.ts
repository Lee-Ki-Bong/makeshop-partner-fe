/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessInfoDraftResponseDto } from '../models/BusinessInfoDraftResponseDto';
import type { BusinessInfoResponseDto } from '../models/BusinessInfoResponseDto';
import type { CreateBusinessInfoDto } from '../models/CreateBusinessInfoDto';
import type { UpdateBusinessInfoDto } from '../models/UpdateBusinessInfoDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BusinessInfoService {
    /**
     * 내 사업자 정보
     * @returns BusinessInfoResponseDto 조회 성공
     * @throws ApiError
     */
    public static myBusinessControllerFindMine(): CancelablePromise<BusinessInfoResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/business/me',
        });
    }
    /**
     * 사업자 정보 등록
     * @param requestBody
     * @returns BusinessInfoResponseDto 등록 성공
     * @throws ApiError
     */
    public static myBusinessControllerCreate(
        requestBody: CreateBusinessInfoDto,
    ): CancelablePromise<BusinessInfoResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/business',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 사업자 정보 수정
     * @param requestBody
     * @returns BusinessInfoResponseDto 수정 성공
     * @throws ApiError
     */
    public static myBusinessControllerUpdate(
        requestBody: UpdateBusinessInfoDto,
    ): CancelablePromise<BusinessInfoResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/business',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 사업자 정보 임시저장
     * @param requestBody
     * @returns BusinessInfoDraftResponseDto 임시저장 성공
     * @throws ApiError
     */
    public static myBusinessControllerCreateDraft(
        requestBody: CreateBusinessInfoDto,
    ): CancelablePromise<BusinessInfoDraftResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/business/drafts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 사업자 정보 제출
     * @param id
     * @returns BusinessInfoDraftResponseDto 제출 성공
     * @throws ApiError
     */
    public static myBusinessControllerSubmitDraft(
        id: number,
    ): CancelablePromise<BusinessInfoDraftResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/business/drafts/{id}/submit',
            path: {
                'id': id,
            },
        });
    }
}
