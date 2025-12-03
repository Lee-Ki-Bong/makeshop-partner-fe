/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaxInfoResponseDto } from '../models/TaxInfoResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminTaxInfoService {
    /**
     * 파트너 과세 정보 조회 (관리자)
     * @param partnerId
     * @returns TaxInfoResponseDto 조회 성공
     * @throws ApiError
     */
    public static taxAdminControllerFindOne(
        partnerId: number,
    ): CancelablePromise<TaxInfoResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/tax-info/{partnerId}',
            path: {
                'partnerId': partnerId,
            },
        });
    }
}
