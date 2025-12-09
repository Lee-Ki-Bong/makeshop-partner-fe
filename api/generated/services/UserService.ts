/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePartnerAgreementDto } from '../models/CreatePartnerAgreementDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * 서비스 최초 등록 (동의 포함)
     * 사용자가 이 서비스를 처음 이용할 때 호출되는 API입니다.
     * MVP에서는 해당 요청이 오면 IDP userinfo를 조회하여 BFF DB에 유저를 생성하고, 파트너 서비스 이용 동의를 함께 저장합니다.
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static userRegistrationControllerRegister(
        requestBody: CreatePartnerAgreementDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/registration',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
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
