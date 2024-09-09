import ButtonCommon from '@src/Common/ButtonCommon/ButtonCommon';
import { Form, FormProps, Input } from 'antd';

const SignUp = () => {
  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };
  const [form] = Form.useForm();
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    form.validateFields();
    console.log('Success:', values);
  };
  return (
    <div className=''>
      <h1 className='text-center pt-60 pb-20'>Sign Up</h1>
      <div className='flex justify-center items-center'>
        <Form
          name='basic'
          style={{ width: '30%' }}
          onFinish={onFinish}
          className=''
          layout='vertical'
          form={form}
        >
          <Form.Item<FieldType>
            label='Email'
            name='username'
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
                form.validateFields()
                form.submit()
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
