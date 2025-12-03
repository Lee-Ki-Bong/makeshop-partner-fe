/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * 사용자 정보 조회
     *
     * 현재 세션을 기반으로 사용자 정보를 조회합니다.
     *
     * ※ 주의
     * - 세션 검증(로그인 여부) → UserSessionGuard에서 처리
     * - 세션 갱신 또는 부가 처리 → MeSessionInterceptor에서 처리
     * - 컨트롤러는 실제 사용자 정보를 JSON 형태로 반환합니다.
     *
     * @returns any 정상적으로 사용자 정보를 반환합니다.
     * @throws ApiError
     */
    public static meControllerGetMe(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/me',
            errors: {
                401: `세션이 없거나 만료된 경우 (Unauthorized)`,
            },
        });
    }
}
