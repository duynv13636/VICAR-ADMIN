import { axiosInstance } from '@src/Axios/api';
import { IAddCategory } from '@src/Types/CategoryType';
import { useMutation, useQuery } from '@tanstack/react-query';
import { message } from 'antd';

export const AddCategoryService = (callback: () => void) =>
  useMutation({
    mutationFn: (data: IAddCategory) => {
      return axiosInstance.post('/category', data);
    },
    onError(error) {
      console.log('🚀 ~ onError ~ error:', error);
    },
    onSuccess() {
      message.success('Add category success.');
      callback();
    }
  });
export const EditCategoryService = (callback: () => void) =>
  useMutation({
    mutationFn: (data: IAddCategory) => {
      const dataPayload = { ...data };
      delete dataPayload.id;
      return axiosInstance.put(`/category/${data.id}`, dataPayload);
    },
    onError(error) {
      console.log('🚀 ~ onError ~ error:', error);
    },
    onSuccess() {
      message.success('Edit category success.');
      callback();
    }
  });
export const DeleteCategoryService = (callback: () => void) =>
  useMutation({
    mutationFn: (idCategory: string) => {
      return axiosInstance.delete(`/category/${idCategory}`);
    },
    onError(error) {
      console.log('🚀 ~ onError ~ error:', error);
    },
    onSuccess() {
      message.success('Delete category success.');
      callback();
    }
  });
export const GetCategoryService = () =>
  useQuery({
    queryKey: ['GetCategoryService'],
    queryFn: async () => {
      const res = await axiosInstance.get('/category?size=10');
      return res.data;
    },
    throwOnError(error) {
      console.log('🚀 ~ throwOnError ~ error:', error);
      return false;
    }
  });
