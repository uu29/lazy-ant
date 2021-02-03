import serverClient from '../serverClient';

const _signupRequest = (params) => {
  return serverClient
    .post(`/users`, {params: params})
    .then((res) => res)
    .catch((err) => {
      if (err.response) return err.response;
    });
};

export {_signupRequest};
