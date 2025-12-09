/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponseDto } from '../models/ApiResponseDto';
import type { CreateUserDto } from '../models/CreateUserDto';
import type { SyncUserDto } from '../models/SyncUserDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * OAuth 시작 (Authorization Code + PKCE)
     *
     * OAuth 인가 플로우를 시작합니다.
     *
     * 클라이언트 IP, User-Agent, deviceId 등을 기반으로
     * PKCE 코드 챌린지 및 state를 생성하여 Auth Server로 이동할 URL을 반환합니다.
     *
     * @param deviceId 디바이스 고유 식별자(브라우저 또는 앱 단위). 클라이언트가 생성해 전달합니다.
     * @param screenHint IDP UI 힌트 (로그인/회원가입 선택). screen_hint=signup 시 회원가입 UI 표시.
     * @returns any OAuth 시작 URL 및 관련 값들이 정상적으로 반환됩니다.
     * @throws ApiError
     */
    public static startOAuthControllerStartOauth(
        deviceId: string,
        screenHint?: string,
    ): CancelablePromise<ApiResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oauth/start',
            query: {
                'deviceId': deviceId,
                'screenHint': screenHint,
            },
        });
    }
    /**
     * 로그아웃
     *
     * 세션을 제거하고, 인터셉터를 통해 브라우저의 세션 쿠키(session_id)를 삭제합니다.
     *
     * 응답 자체는 JSON을 반환하지만, 실제 쿠키 삭제는 LogoutCookieClearInterceptor에서 처리됩니다.
     *
     * @returns any 정상적으로 로그아웃되었습니다.
     * @throws ApiError
     */
    public static logoutControllerLogout(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/logout',
        });
    }
    /**
     * OAuth 로그인 (Redirect)
     * OAuth 서버로 리다이렉트 (나중에 구현)
     * @returns any OAuth 로그인 (Redirect)
     * @throws ApiError
     */
    public static authControllerLogin(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/login',
        });
    }
    /**
     * OAuth 콜백
     * OAuth 서버에서 리다이렉트된 후 처리 (나중에 구현)
     * @param code
     * @returns any
     * @throws ApiError
     */
    public static authControllerCallback(
        code: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/callback',
            query: {
                'code': code,
            },
        });
    }
    /**
     * 사용자 정보 동기화
     * OAuth 서버의 사용자 정보를 로컬 DB에 동기화 (개발용)
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static authControllerSyncUser(
        requestBody: SyncUserDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/sync',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 현재 로그인 사용자 정보
     * @returns any
     * @throws ApiError
     */
    public static authControllerGetMe(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/me',
        });
    }
    /**
     * 로그아웃
     * @returns any
     * @throws ApiError
     */
    public static authControllerLogout(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/logout',
        });
    }
    /**
     * 테스트용 로그인 (토큰 발급)
     * @returns any
     * @throws ApiError
     */
    public static authControllerLoginTest(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login/test',
        });
    }
    /**
     * 관리자 전용 API 테스트
     * @returns any
     * @throws ApiError
     */
    public static authControllerAdminOnly(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/admin-only',
        });
    }
    /**
     * 테스트용 회원 가입
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static authControllerCreateUser(
        requestBody: CreateUserDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/create-user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
