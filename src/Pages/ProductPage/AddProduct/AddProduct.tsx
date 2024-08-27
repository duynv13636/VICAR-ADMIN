import ButtonCommon from '@src/Common/ButtonCommon/ButtonCommon';
import InputCommon from '@src/Common/InputCommon/InputCommon';
import { IProductAdd } from '@src/Types/ProductsType';
import { Form, FormProps, Select } from 'antd';
const { Option } = Select;
type IProps = {
  setIsOpen: (open: boolean) => void;
  onSubmit: (data: IProductAdd) => void;
};
const AddProduct = ({ setIsOpen, onSubmit }: IProps) => {
  const [form] = Form.useForm();

  const onFinish: FormProps<IProductAdd>['onFinish'] = (values) => {
    console.log('Success:', values);
    onSubmit(values);
  };
  return (
    <div>
      <Form form={form} onFinish={onFinish} layout='vertical'>
        <Form.Item<IProductAdd>
          label='Name product'
          name='name'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <InputCommon placeholder='Name product' />
        </Form.Item>

        <Form.Item<IProductAdd>
          label='Price'
          name='price'
          rules={[{ required: true, message: 'Please input your password!' }]}
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

        <div className='flex justify-end'>
          <ButtonCommon classNameProps='bg-gray-400' onClickBtn={() => setIsOpen(false)} textButton='Cancel' />
          <ButtonCommon onClickBtn={form.submit} textButton='Submit' />
        </div>
      </Form>
    </div>
  );
};

export default AddProduct;
