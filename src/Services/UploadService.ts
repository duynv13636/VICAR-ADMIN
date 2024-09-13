import { axiosInstance } from '@src/Axios/api';
import { useMutation } from '@tanstack/react-query';

export const UploadImageService = (callback: () => void) =>
  useMutation({
    mutationFn: ({ file }: { file: unknown }) => {
      return axiosInstance.post('/upload/upload-single', file);
    },
    onSuccess() {
      callback();
    },
    onError(error) {
      console.log(error);
      callback();
    }
  });
