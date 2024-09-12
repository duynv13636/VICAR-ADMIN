import { axiosInstance } from '@src/Axios/api';
import { useMutation } from '@tanstack/react-query';

export const UploadImageService = () =>
  useMutation({
    mutationFn: ({ file }: { file: unknown }) => {
      return axiosInstance.post('/upload/upload-single', file);
    },
    onError(error) {
      console.log(error);
    }
  });
