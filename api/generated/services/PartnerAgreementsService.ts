/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartnerAgreementResponseDto } from '../models/PartnerAgreementResponseDto';
import type { UpdatePartnerAgreementDto } from '../models/UpdatePartnerAgreementDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PartnerAgreementsService {
    /**
     * 내 파트너 약관 동의 내역
     * @returns PartnerAgreementResponseDto 조회 성공
     * @throws ApiError
     */
    public static myAgreementsControllerFindMine(): CancelablePromise<PartnerAgreementResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/agreements/partner',
        });
    }
    /**
     * 파트너 약관 동의/갱신
     * @param requestBody
     * @returns PartnerAgreementResponseDto 수정 성공
     * @throws ApiError
     */
    public static myAgreementsControllerUpdate(
        requestBody: UpdatePartnerAgreementDto,
    ): CancelablePromise<PartnerAgreementResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/agreements/partner',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
