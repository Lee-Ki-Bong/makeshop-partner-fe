/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTaxInfoDto } from '../models/CreateTaxInfoDto';
import type { TaxInfoResponseDto } from '../models/TaxInfoResponseDto';
import type { UpdateTaxInfoDto } from '../models/UpdateTaxInfoDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TaxInfoService {
    /**
     * 내 과세 정보
     * @returns TaxInfoResponseDto 조회 성공
     * @throws ApiError
     */
    public static myTaxControllerFindMine(): CancelablePromise<TaxInfoResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tax-info/me',
        });
    }
    /**
     * 과세 정보 등록
     * @param requestBody
     * @returns TaxInfoResponseDto 등록 성공
     * @throws ApiError
     */
    public static myTaxControllerCreate(
        requestBody: CreateTaxInfoDto,
    ): CancelablePromise<TaxInfoResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tax-info',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 과세 정보 수정
     * @param requestBody
     * @returns TaxInfoResponseDto 수정 성공
     * @throws ApiError
     */
    public static myTaxControllerUpdate(
        requestBody: UpdateTaxInfoDto,
    ): CancelablePromise<TaxInfoResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/tax-info',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 과세 정보 등록/수정
     * @param requestBody
     * @returns TaxInfoResponseDto 처리 성공
     * @throws ApiError
     */
    public static myTaxControllerUpsert(
        requestBody: CreateTaxInfoDto,
    ): CancelablePromise<TaxInfoResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tax-info/upsert',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
