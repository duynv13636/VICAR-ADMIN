import { axiosInstance } from '@src/Axios/api';
import { IProductAdd } from '@src/Types/ProductsType';
import { useMutation, useQuery } from '@tanstack/react-query';
import { message } from 'antd';

export const AddProductService = (callback: () => void) =>
  useMutation({
    mutationFn: (data: IProductAdd) => {
      return axiosInstance.post('/product', data);
    },
    onError(error) {
      console.log('🚀 ~ onError ~ error:', error);
    },
    onSuccess() {
      message.success("Add product success.")
      callback();
    }
  });
export const GetProductService = () =>
  useQuery({
    queryKey: ['GetProductService'],
    queryFn: async () => {
      const res = await axiosInstance.get('/product?size=10');
      return res.data;
    },
    throwOnError(error) {
      console.log('🚀 ~ throwOnError ~ error:', error);
      return false;
    },
  });
