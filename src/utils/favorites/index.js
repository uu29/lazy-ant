import yahooClient from '../client';

const _fetchHistoricalData = (params) => {
  const headers = {
    'x-rapidapi-key': '7cd6735678msh7d3a80d86d9f15ep1739d8jsn0b3dc896f11c',
    'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
  };

  return yahooClient
    .get(`/stock/v3/get-historical-data`, {params: params, headers: headers})
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (err.response) return err.response;
    });
};

export {_fetchHistoricalData};
