import { Input, InputProps } from "antd";

interface IPropsInput extends InputProps {
  placeholder: string;
}
const InputCommon = ({placeholder,...props}: IPropsInput) => {
  return (
    <div>
      <Input
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default InputCommon;
