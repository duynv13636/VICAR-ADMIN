import ButtonCommon from '@src/Common/ButtonCommon/ButtonCommon';
import InputCommon from '@src/Common/InputCommon/InputCommon';
import { UploadImageService } from '@src/Services/UploadService';
import { IProductAdd } from '@src/Types/ProductsType';
import { Form, FormProps, GetProp, message, Select, Spin, Upload, UploadProps } from 'antd';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
const { Option } = Select;
type IProps = {
  setIsOpen: (open: boolean) => void;
  onSubmit: (data: IProductAdd) => void;
};
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
const AddProduct = ({ setIsOpen, onSubmit }: IProps) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const uploadImage = UploadImageService(() => {
    setLoading(false);
  });
  const onFinish: FormProps<IProductAdd>['onFinish'] = (values) => {
    onSubmit(values);
  };
  const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };
  const handleChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'uploading') {
      return;
    }
    setLoading(true);
    const data = new FormData();
    data.append('file', info.file.originFileObj as any);
    uploadImage.mutate({ file: data });
  };
  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type='button' className='outline-none border-none'>
      {loading ? <Spin /> : <FaPlus className='ml-3' />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  return (
    <div>
      <Form form={form} onFinish={onFinish} layout='vertical'>
        <Form.Item<IProductAdd>
          label='Name product'
          name='name'
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <InputCommon placeholder='Name product' />
        </Form.Item>

        <Form.Item<IProductAdd>
          label='Price'
          name='price'
          rules={[{ required: true, message: 'Please input your price!' }]}
        >
          <InputCommon placeholder='Price product' />
        </Form.Item>
        <Form.Item<IProductAdd>
          label='Category'
          name='category'
          rules={[{ required: true, message: 'Please input your category!' }]}
        >
          <Select placeholder='Select a option' allowClear>
            <Option value='male'>male</Option>
            <Option value='female'>female</Option>
            <Option value='other'>other</Option>
          </Select>
        </Form.Item>
        <div>
          <Upload
            name='file'
            listType='picture-card'
            className='avatar-uploader'
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {/* {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}
            {uploadButton}
          </Upload>
        </div>
        <div className='flex justify-end'>
          <ButtonCommon classNameProps='bg-gray-400' onClickBtn={() => setIsOpen(false)} textButton='Cancel' />
          <ButtonCommon onClickBtn={form.submit} textButton='Submit' />
        </div>
      </Form>
    </div>
  );
};

export default AddProduct;
