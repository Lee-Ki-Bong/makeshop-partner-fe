/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DisplayStatus } from './DisplayStatus';
export type UserStateResponseDto = {
    /**
     * 사용자 고유 ID
     */
    userId: string;
    /**
     * 로그인 UID (외부 인증 시스템 ID)
     */
    loginUid: string;
    /**
     * 사용자 이름
     */
    name: string;
    /**
     * 이메일 주소
     */
    email: string;
    /**
     * 휴대폰 번호
     */
    phone: string;
    /**
     * 사용자 상태
     */
    displayStatus: DisplayStatus;
    /**
     * 상태 변경 사유
     */
    reason?: string | null;
};

