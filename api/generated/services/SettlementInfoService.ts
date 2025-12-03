/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSettlementInfoDto } from '../models/CreateSettlementInfoDto';
import type { SettlementInfoResponseDto } from '../models/SettlementInfoResponseDto';
import type { UpdateSettlementInfoDto } from '../models/UpdateSettlementInfoDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SettlementInfoService {
    /**
     * 내 정산 정보
     * @returns SettlementInfoResponseDto 조회 성공
     * @throws ApiError
     */
    public static mySettlementControllerFindMine(): CancelablePromise<SettlementInfoResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/settlement-info/me',
        });
    }
    /**
     * 정산 정보 등록
     * @param requestBody
     * @returns SettlementInfoResponseDto 등록 성공
     * @throws ApiError
     */
    public static mySettlementControllerCreate(
        requestBody: CreateSettlementInfoDto,
    ): CancelablePromise<SettlementInfoResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settlement-info',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 정산 정보 수정
     * @param requestBody
     * @returns SettlementInfoResponseDto 수정 성공
     * @throws ApiError
     */
    public static mySettlementControllerUpdate(
        requestBody: UpdateSettlementInfoDto,
    ): CancelablePromise<SettlementInfoResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/settlement-info',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 정산 정보 등록/수정
     * @param requestBody
     * @returns SettlementInfoResponseDto 처리 성공
     * @throws ApiError
     */
    public static mySettlementControllerUpsert(
        requestBody: CreateSettlementInfoDto,
    ): CancelablePromise<SettlementInfoResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settlement-info/upsert',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
