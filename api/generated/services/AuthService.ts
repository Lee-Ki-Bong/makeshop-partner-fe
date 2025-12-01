/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponseDto } from "../models/ApiResponseDto";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
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
   * @returns any OAuth 시작 URL 및 state 정보가 정상적으로 반환됩니다.
   * @throws ApiError
   */
  public static startOAuthControllerStartOauth(
    deviceId: string
  ): CancelablePromise<ApiResponseDto> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/oauth/start",
      query: {
        deviceId: deviceId,
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
      method: "POST",
      url: "/logout",
    });
  }
}
