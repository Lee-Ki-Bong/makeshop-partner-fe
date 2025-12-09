/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePartnerAgreementDto } from '../models/CreatePartnerAgreementDto';
import type { CreateWithdrawalDto } from '../models/CreateWithdrawalDto';
import type { PartnerListResponseDto } from '../models/PartnerListResponseDto';
import type { PartnerResponseDto } from '../models/PartnerResponseDto';
import type { UpdatePartnerAgreementDto } from '../models/UpdatePartnerAgreementDto';
import type { UpdatePartnerDto } from '../models/UpdatePartnerDto';
import type { WithdrawalReasonsResponseDto } from '../models/WithdrawalReasonsResponseDto';
import type { WithdrawalResponseDto } from '../models/WithdrawalResponseDto';
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
     * 사용자 탈퇴 사유 코드 조회
     * @returns WithdrawalReasonsResponseDto 조회 성공
     * @throws ApiError
     */
    public static userControllerGetReasons(): CancelablePromise<WithdrawalReasonsResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/withdrawal-reasons',
        });
    }
    /**
     * 상용자 탈퇴 신청
     * @param requestBody
     * @returns WithdrawalResponseDto 탈퇴 신청 성공
     * @throws ApiError
     */
    public static userControllerWithdrawal(
        requestBody: CreateWithdrawalDto,
    ): CancelablePromise<WithdrawalResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/withdrawal',
            body: requestBody,
            mediaType: 'application/json',
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
    /**
     * 이용 약관
     * @returns any
     * @throws ApiError
     */
    public static partnerAgreementControllerGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/partner-agreement',
        });
    }
    /**
     * 이용 약관 생성
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static partnerAgreementControllerCreate(
        requestBody: CreatePartnerAgreementDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/partner-agreement',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 광고성 이용약관 수정
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static partnerAgreementControllerUpdateAdvertising(
        requestBody: UpdatePartnerAgreementDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/partner-agreement',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
