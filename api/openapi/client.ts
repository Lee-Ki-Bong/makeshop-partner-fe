import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

/**
 * ============================
 * 환경 변수 (빌드 타임 주입)
 * ============================
 * ⚠️ 주의 - NEXT_PUBLIC_* 만 브라우저에서 접근 가능
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * ============================
 * Axios 인스턴스 생성
 * ============================
 *
 * - 모든 Orval API 호출은 이 인스턴스를 사용
 * - 인증 / 쿠키 / 공통 헤더 / 인터셉터의 단일 진입점
 */
export const customInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // 쿠키 기반 인증 (OAuth / Session)
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15_000, // 15초
});

// @TODO 앤드포인트별로 조정 고려
// customInstance.request({
//   url: "/uploads",
//   timeout: 30_000,
// });

/**
 * ============================
 * Request Interceptor
 * ============================
 *
 * - 공통 헤더
 * - 추적 ID
 * - (향후) Access Token 주입
 */
customInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // @TODO 요청 추적용 헤더
    // config.headers = {
    //   ...config.headers,
    //   "X-Request-Id": crypto.randomUUID(),
    // };

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

/**
 * ============================
 * Response Interceptor
 * ============================
 *
 * - 공통 에러 처리
 * - 인증 만료 대응
 * - UX 정책 연결 지점
 */
customInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const status = error.response?.status;

    /**
     * 인증 만료 / 세션 종료
     */
    if (status === 401) {
      /**
       * ⚠️ 여기서는 직접 router push 금지
       * - UI 레이어에서 처리
       * - 또는 Event / Store 연동
       */
      // console.warn("Unauthorized - session may be expired");
    }

    /**
     * 권한 없음
     */
    if (status === 403) {
      // console.warn("Forbidden");
    }

    /**
     * 서버 에러
     */
    if (status && status >= 500) {
      // console.error("Server error", error);
    }

    return Promise.reject(error);
  },
);

/**
 * ============================
 * Orval Mutator Signature (필수로 export 해야 함)
 * ============================
 * - axios 인스턴스를 사용한 데이터 페칭 및 래핑데이터 반환
 */
export const customInstanceMutator = async <T>(
  config: AxiosRequestConfig,
): Promise<T> => {
  const res = await customInstance.request<T>(config);
  return res.data;
};

export default customInstance;
