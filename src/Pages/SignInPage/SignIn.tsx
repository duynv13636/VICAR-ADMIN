import ButtonCommon from '@src/Common/ButtonCommon/ButtonCommon';
import useLocalStorage from '@src/Hooks/useLocalStorage';
import { LoginService } from '@src/Services/UserService';
import { Form, FormProps, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  type FieldType = {
    email: string;
    password: string;
  };
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { setValue } = useLocalStorage('token', '');
  const signUpMutation = LoginService((data) => {
    setValue(data.data?.access_token || '');
    navigate('/product-management');
  });
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    form.validateFields();
    signUpMutation.mutate({ data: values });
  };
  return (
    <div className=''>
      <h1 className='text-center pt-60 pb-20'>Login</h1>
      <div className='flex justify-center items-center'>
        <Form name='basic' style={{ width: '30%' }} onFinish={onFinish} className='' layout='vertical' form={form}>
          <Form.Item<FieldType>
            label='Email'
            name='email'
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input placeholder='Email' className='' />
          </Form.Item>

          <Form.Item<FieldType>
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder='Password' />
          </Form.Item>

          <Form.Item className='w-full'>
            <ButtonCommon
              onClickBtn={() => {
                form.validateFields();
                form.submit();
              }}
              textButton='Login'
              classNameProps='w-full bg-blue-500 justify-center'
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
