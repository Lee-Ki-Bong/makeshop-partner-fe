/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ApiResponseDto = {
  /**
   * 요청 성공 여부 (비즈니스 기준)
   */
  success: boolean;
  /**
   * 수행된 작업(operation) 이름
   */
  operation: string;
  /**
   * 응답의 의미를 식별하는 코드 (성공/실패 공용)
   */
  code?: string;
  /**
   * 사람에게 보여줄 메시지 (로직에서 사용 금지)
   */
  message: string;
  /**
   * 응답 데이터 또는 에러 상세 정보
   */
  data?: Record<string, any> | null;
};
