/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ApiResponseDto = {
    /**
     * 요청 성공 여부
     */
    success: boolean;
    /**
     * 수행된 작업(operation) 이름
     */
    operation: string;
    /**
     * 사용자에게 보여질 메시지
     */
    message: string;
    /**
     * API 실제 데이터
     */
    data: Record<string, any> | null;
};

