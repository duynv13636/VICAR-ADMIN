import ButtonCommon from '@src/Common/ButtonCommon/ButtonCommon';
import InputCommon from '@src/Common/InputCommon/InputCommon';
import { Form, FormProps, Input } from 'antd';

const SignIn = () => {
  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };
  return (
    <div>
      {' '}
      <div>
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete='off'
        >
          <Form.Item<FieldType>
            label='Username'
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <InputCommon placeholder='' />
          </Form.Item>

          <Form.Item<FieldType>
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <ButtonCommon onClickBtn={() => {}} textButton='Submit' />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
