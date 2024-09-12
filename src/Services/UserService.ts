import { axiosInstance } from '@src/Axios/api';
import { IUserPost } from '@src/Types/UserType';
import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';

export const SignUpService = (callBack: () => void) =>
  useMutation({
    mutationFn: ({ data }: { data: IUserPost }) => {
      return axiosInstance.post('/users/login', data);
    },
    onError(error) {
      console.log(error);
    },
    onSuccess() {
      message.success('You register account success.');
      callBack();
    }
  });
export const LoginService = (callBack: (response) => void) =>
  useMutation({
    mutationFn: ({ data }: { data: { email: string; password: string } }) => {
      return axiosInstance.post('/users/login', data);
    },
    onError(error) {
      console.log(error);
    },
    onSuccess(res) {
      message.success('Login success.');
      callBack(res.data);
    }
  });
