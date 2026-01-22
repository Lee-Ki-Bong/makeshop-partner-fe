/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponseDto } from '../models/ApiResponseDto';
import type { CreatePartnerAgreementDto } from '../models/CreatePartnerAgreementDto';
import type { UserResponseDto } from '../models/UserResponseDto';
import type { UserStateResponseDto } from '../models/UserStateResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class Service {
    /**
     * 서비스 최초 등록 (동의 포함)
     * 사용자가 이 서비스를 처음 이용할 때 호출되는 API입니다.
     * 해당 요청이 오면 IDP userinfo를 조회하여 BFF DB에 유저를 생성하고, 파트너 서비스 이용 동의를 함께 저장합니다.
     * @param requestBody
     * @returns any 서비스 최초 등록에 성공
     * @throws ApiError
     */
    public static userRegistrationControllerRegister(
        requestBody: CreatePartnerAgreementDto,
    ): CancelablePromise<ApiResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/user/registration',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 사용자 조회
     * @returns UserResponseDto 조회 성공
     * @throws ApiError
     */
    public static adminUserControllerGetUser(): CancelablePromise<UserResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/user',
        });
    }
    /**
     * 사용자 상태 조회
     * @returns UserStateResponseDto 조회 성공
     * @throws ApiError
     */
    public static adminUserControllerGetUserState(): CancelablePromise<UserStateResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/user/state',
        });
    }
    /**
     * 사용자 현재 상태 스냅샷
     *
     * 현재 세션을 기반으로 사용자 정보를 조회합니다.
     *
     * - 인증된 요청 주체의 “현재 상태 스냅샷”을 반환 반환합니다.
     * - 인증 외에 판단·차단·흐름 제어는 하지 않는다
     *
     * @returns any 현재 로그인 사용자의 도메인 상태 컨텍스트 조회
     * @throws ApiError
     */
    public static meControllerGetMe(): CancelablePromise<ApiResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/me',
            errors: {
                401: `세션이 없거나 만료된 경우 (Unauthorized)`,
            },
        });
    }
}
