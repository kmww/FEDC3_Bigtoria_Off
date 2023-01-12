import { args } from '../interfaces/signUp';
import http from './instance';

export const postSignUp = async (values: args) => {
  await http.post({
    url: '/signup',
    data: {
      email: values.email,
      fullName: values.fullName,
      password: values.password,
      username: JSON.stringify({
        year: values.year,
        job: values.job,
      }),
    },
  });
};
