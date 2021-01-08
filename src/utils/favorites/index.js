import client from '../client';

const getHistoricalData = (params) => {
  return client
    .get(`get-historical-data`, {params: params})
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (err.response) return err.response;
    });
};

export {getHistoricalData};
