import axios from 'axios';

// axios 인스턴스 생성
const client = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    useQueryString: 'true',
  },
});

// 요청 인티셉터 (요청 전에 가로채서 axios 설정을 적용함)
client.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // 요청 에러 직전 호출
    return Promise.reject(error);
  },
);

// 응답 인티셉터 (응답 직전에 호출)
client.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    return Promise.reject(error);
  },
);

export default client;
