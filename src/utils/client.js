import axios from 'axios';

const yahooUrl = (() => {
  return 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/';
  // if (process.env.NODE_ENV === "development") {
  //   return "http://localhost:3001/";
  // } else {
  //   return "/";
  // }
})();

const yahooClient = axios.create({
  yahooUrl,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'multipart/form-data',
    'x-rapidapi-key': '7cd6735678msh7d3a80d86d9f15ep1739d8jsn0b3dc896f11c',
    'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
    useQueryString: true,
  },
});

yahooClient.interceptors.request.use(
  function (config) {
    // 요청 인터셉터
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

yahooClient.interceptors.response.use(
  function (response) {
    // 응답 인터셉터
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export {yahooClient};
