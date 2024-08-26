import { axiosInstance } from '@src/Axios/api';
import { IProductAdd } from '@src/Types/ProductsType';
import { useMutation, useQuery } from '@tanstack/react-query';

export const AddProductService = () =>
  useMutation({
    mutationFn: (data: IProductAdd) => {
      return axiosInstance.post('/product', data);
    },
    onError(error) {
      console.log('🚀 ~ onError ~ error:', error);
    }
  });
export const GetProductService = () =>
  useQuery({
    queryKey: ['GetProductService'],
    queryFn: async () => {
      const res = await axiosInstance.get('/product');
      return res;
    },
    throwOnError(error) {
      console.log('🚀 ~ throwOnError ~ error:', error);
      return false;
    }
  });
