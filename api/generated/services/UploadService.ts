/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UploadResponseDto } from '../models/UploadResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UploadService {
    /**
     * 임시 파일 업로드
     * @param formData
     * @returns UploadResponseDto 업로드 성공
     * @throws ApiError
     */
    public static uploadControllerUploadTemp(
        formData: {
            file?: Blob;
        },
    ): CancelablePromise<UploadResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/uploads/temp',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * 임시 파일 다운로드 (미리보기)
     * @param filename
     * @returns any 파일 스트림
     * @throws ApiError
     */
    public static uploadControllerDownloadTemp(
        filename: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/uploads/temp/{filename}',
            path: {
                'filename': filename,
            },
        });
    }
    /**
     * 유저 파일 다운로드 (암호화 해제)
     * @param loginUid
     * @param filename
     * @returns any 파일 스트림
     * @throws ApiError
     */
    public static uploadControllerDownloadUserFile(
        loginUid: string,
        filename: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/uploads/users/{userId}/{filename}',
            path: {
                'loginUid': loginUid,
                'filename': filename,
            },
        });
    }
}
