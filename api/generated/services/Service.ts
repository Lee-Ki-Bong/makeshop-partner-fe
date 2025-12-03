/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartnerResponseDto } from '../models/PartnerResponseDto';
import type { UpdatePartnerDto } from '../models/UpdatePartnerDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class Service {
    /**
     * 사용자 상세 조회
     * @returns any
     * @throws ApiError
     */
    public static userControllerGetUser(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user',
        });
    }
    /**
     * 내 파트너 프로필 조회
     * @returns PartnerResponseDto 조회 성공
     * @throws ApiError
     */
    public static partnerControllerGetProfile(): CancelablePromise<PartnerResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/partner',
        });
    }
    /**
     * 파트너 업데이트
     * @param requestBody
     * @returns PartnerResponseDto 업데이트 성공
     * @throws ApiError
     */
    public static partnerControllerUpdateProfile(
        requestBody: UpdatePartnerDto,
    ): CancelablePromise<PartnerResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/partner',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
