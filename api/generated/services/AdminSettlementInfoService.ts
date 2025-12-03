/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SettlementInfoResponseDto } from '../models/SettlementInfoResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminSettlementInfoService {
    /**
     * 파트너 정산 정보 조회 (관리자)
     * @param partnerId
     * @returns SettlementInfoResponseDto 조회 성공
     * @throws ApiError
     */
    public static settlementAdminControllerFindOne(
        partnerId: number,
    ): CancelablePromise<SettlementInfoResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/settlement-info/{partnerId}',
            path: {
                'partnerId': partnerId,
            },
        });
    }
}
