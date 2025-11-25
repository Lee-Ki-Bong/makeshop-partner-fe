/* AUTO GENERATED — DO NOT EDIT */

export interface ApiResponseDto {
  /**
   * @description 요청 성공 여부
   * @example true
   */
  success: boolean;
  /**
   * @description 수행된 작업(operation) 이름
   * @example get_users
   */
  operation: string;
  /**
   * @description 사용자에게 보여질 메시지
   * @example 조회 성공
   */
  message: string;
  /** @description API 실제 데이터 */
  data: Record<string, never> | null;
}

export interface StartOAuthResponseDto {
  /**
   * @description 클라이언트가 이동해야 할 OAuth 인가 엔드포인트 URL (PKCE 포함)
   * @example http://localhost:3001/oauth/authorize?client_id=partner-center&redirect_uri=http://localhost:3002/oauth/callback&state=8c4f0e20&code_challenge=vsh1d9k2&code_challenge_method=S256
   */
  authorizeUrl: string;
}

export interface StartOAuthRequestDto {
  /**
   * @description 디바이스 고유 식별자(브라우저 또는 앱 단위). 클라이언트가 생성해 전달합니다.
   * @example c6e54331-47c6-4bf5-8e1a-1b2cafb0df91
   */
  deviceId: string;
}
