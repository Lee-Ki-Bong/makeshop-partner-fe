/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminPartnersService {
    /**
     * 파트너 목록 조회 (관리자)
     * @param page
     * @param limit
     * @returns any
     * @throws ApiError
     */
    public static partnersAdminControllerFindAll(
        page: number,
        limit: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/partners',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }
}
