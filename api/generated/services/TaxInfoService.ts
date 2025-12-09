/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaxInfoResponseDto } from '../models/TaxInfoResponseDto';
import type { UpsertTaxInfoDto } from '../models/UpsertTaxInfoDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TaxInfoService {
    /**
     * 내 과세 정보 조회
     * @returns TaxInfoResponseDto 조회 성공
     * @throws ApiError
     */
    public static myTaxControllerGet(): CancelablePromise<TaxInfoResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tax-info',
        });
    }
    /**
     * 과세 정보 저장
     * @param requestBody
     * @returns UpsertTaxInfoDto 처리 성공
     * @throws ApiError
     */
    public static myTaxControllerSave(
        requestBody: UpsertTaxInfoDto,
    ): CancelablePromise<UpsertTaxInfoDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tax-info',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
