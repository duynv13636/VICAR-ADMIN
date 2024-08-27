import ButtonCommon from '@src/Common/ButtonCommon/ButtonCommon';
import { IGetProductList } from '@src/Types/ProductsType';
import { Spin } from 'antd';
import { memo } from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
type IProps = {
  setOpenModalAddProduct: (boolean: boolean) => void;
  isLoading: boolean;
  dataProducts: IGetProductList[];
};
const ProductList = ({ setOpenModalAddProduct, isLoading, dataProducts }: IProps) => {
  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-semibold'>Management Product</h1>
        <ButtonCommon
          classNameProps=''
          onClickBtn={() => setOpenModalAddProduct(true)}
          textButton='Add Product'
          icon={<MdOutlineAddCircleOutline />}
        ></ButtonCommon>
      </div>
      <Spin spinning={isLoading}>
        <div>
          <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Product name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Color
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Category
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Price
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataProducts?.length &&
                  dataProducts?.map((product) => (
                    <tr
                      key={product._id}
                      className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'
                    >
                      <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        {product.name}
                      </th>
                      <td className='px-6 py-4'>Silver</td>
                      <td className='px-6 py-4'>Laptop</td>
                      <td className='px-6 py-4'>$2999</td>
                      <td className='px-6 py-4'>
                        <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </Spin>
    </div>
  );
};

export default memo(ProductList);
