import ButtonCommon from '@src/Common/ButtonCommon/ButtonCommon';
import { SignUpService } from '@src/Services/UserService';
import { Form, FormProps, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  type FieldType = {
    email: string;
    password: string;
    full_name: string;
  };
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const signUpMutation = SignUpService(() => {
    navigate('/signin');
  });
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    form.validateFields();
    signUpMutation.mutate({ data: { ...values, role: 'admin' } });
  };
  return (
    <div className=''>
      <h1 className='text-center pt-60 pb-20 text-black'>Sign Up</h1>
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
            label='Full name'
            name='full_name'
            rules={[{ required: true, message: 'Please input your full name!' }]}
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
              textButton='Sign up'
              classNameProps='w-full bg-blue-500 justify-center'
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
