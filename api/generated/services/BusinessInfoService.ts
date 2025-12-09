/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessInfoResponseDto } from '../models/BusinessInfoResponseDto';
import type { UpsertBusinessInfoDto } from '../models/UpsertBusinessInfoDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BusinessInfoService {
    /**
     * 사업자 정보 조회
     * @returns BusinessInfoResponseDto
     * @throws ApiError
     */
    public static businessInfoControllerGet(): CancelablePromise<BusinessInfoResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/business-info',
        });
    }
    /**
     * 사업자 정보 저장
     * @param requestBody
     * @returns BusinessInfoResponseDto
     * @throws ApiError
     */
    public static businessInfoControllerSave(
        requestBody: UpsertBusinessInfoDto,
    ): CancelablePromise<BusinessInfoResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/business-info',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 사업자 재승인 정보
     * @returns BusinessInfoResponseDto
     * @throws ApiError
     */
    public static businessInfoControllerGetDraft(): CancelablePromise<BusinessInfoResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/business-info/draft',
        });
    }
    /**
     * 사업자 재승인 정보 저장
     * @param requestBody
     * @returns BusinessInfoResponseDto
     * @throws ApiError
     */
    public static businessInfoControllerSaveDraft(
        requestBody: UpsertBusinessInfoDto,
    ): CancelablePromise<BusinessInfoResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/business-info/draft',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
