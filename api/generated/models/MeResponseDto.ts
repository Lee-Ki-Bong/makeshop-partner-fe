/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MeFlagsDto } from './MeFlagsDto';
import type { MeIdentityDto } from './MeIdentityDto';
export type MeResponseDto = {
    /**
     * 사용자 식별 최소 정보
     */
    user: MeIdentityDto;
    /**
     * 도메인 상태 플래그
     */
    flags: MeFlagsDto;
};

