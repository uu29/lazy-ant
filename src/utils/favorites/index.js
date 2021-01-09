import yahooClient from '../client';

const _fetchHistoricalData = (params) => {
  return yahooClient
    .get(`/stock/v3/get-historical-data`, {params: params})
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (err.response) return err.response;
    });
};

export {_fetchHistoricalData};
