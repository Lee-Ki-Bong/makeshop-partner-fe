/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiAgreementResponseDto } from '../models/ApiAgreementResponseDto';
import type { CreateApiAgreementDto } from '../models/CreateApiAgreementDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ApiAgreementsService {
    /**
     * API 동의서 업로드
     * @param requestBody
     * @returns ApiAgreementResponseDto 등록 성공
     * @throws ApiError
     */
    public static myApiAgreementsControllerCreate(
        requestBody: CreateApiAgreementDto,
    ): CancelablePromise<ApiAgreementResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/agreements/api',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
