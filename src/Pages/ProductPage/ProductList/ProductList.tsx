import ButtonCommon from '@src/Common/ButtonCommon/ButtonCommon';
import { IGetProductList } from '@src/Types/ProductsType';
import { Spin } from 'antd';
import { memo } from 'react';
import { MdDelete, MdModeEdit, MdOutlineAddCircleOutline } from 'react-icons/md';
type IProps = {
  setOpenModalAddProduct: (boolean: boolean) => void;
  isLoading: boolean;
  dataProducts: IGetProductList[];
  setEditProduct: (data: IGetProductList) => void;
  onDeleteProduct: (idProduct: string) => void;
};
const ProductList = ({ setOpenModalAddProduct, isLoading, dataProducts, setEditProduct, onDeleteProduct }: IProps) => {
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
            <table className='w-full text-sm text-left text-gray-500'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Image
                  </th>
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
                    <tr key={product._id} className='bg-white border-b'>
                      <th className='px-6 py-4'>
                        <img className='rounded' src='https://picsum.photos/50/50' alt='' />
                      </th>
                      <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                        {product.name}
                      </th>
                      <td className='px-6 py-4'>Silver</td>
                      <td className='px-6 py-4'>Laptop</td>
                      <td className='px-6 py-4'>{product.price}</td>
                      <td className='px-6 py-4'>
                        <div className='flex gap-2'>
                          <MdModeEdit
                            className='cursor-pointer'
                            onClick={() => {
                              setOpenModalAddProduct(true);
                              setEditProduct(product);
                            }}
                          />
                          <MdDelete
                            className='cursor-pointer text-red-400'
                            onClick={() => {
                              onDeleteProduct(product.id);
                            }}
                          />
                        </div>
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
