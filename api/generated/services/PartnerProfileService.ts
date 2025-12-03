/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartnerListResponseDto } from '../models/PartnerListResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PartnerProfileService {
    /**
     * 파트너 검색 및 리스트 조회 (백오피스)
     * @param searchType 검색 타입 (name, email 등)
     * @param keyword 검색 조건/키워드
     * @param status 승인상태
     * @param businessType 사업자 유형
     * @param page 페이지 번호
     * @param limit 페이지당 가져올 갯수
     * @returns PartnerListResponseDto
     * @throws ApiError
     */
    public static adminPartnerControllerSearchPartners(
        searchType?: string,
        keyword?: string,
        status?: Array<string>,
        businessType?: Array<string>,
        page: number = 1,
        limit: number = 20,
    ): CancelablePromise<PartnerListResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/partner/search',
            query: {
                'searchType': searchType,
                'keyword': keyword,
                'status': status,
                'businessType': businessType,
                'page': page,
                'limit': limit,
            },
        });
    }
}
