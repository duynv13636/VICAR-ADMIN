import ButtonCommon from '@src/Common/ButtonCommon/ButtonCommon';
import { IGetCategory } from '@src/Types/CategoryType';
import { Spin } from 'antd';
import { MdDelete, MdModeEdit, MdOutlineAddCircleOutline } from 'react-icons/md';

type IProps = {
  setOpenModalAddCategory: (boolean: boolean) => void;
  isLoading: boolean;
  dataCategory: IGetCategory[];
  setEditCategory: (data: IGetCategory) => void;
  onDeleteCategory: (idProduct: string) => void;
};
const CategoryList = ({
  setOpenModalAddCategory,
  dataCategory,
  isLoading,
  onDeleteCategory,
  setEditCategory
}: IProps) => {
  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-semibold'>Management Product</h1>
        <ButtonCommon
          classNameProps=''
          onClickBtn={() => setOpenModalAddCategory(true)}
          textButton='Add category'
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
                    category name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataCategory?.length &&
                  dataCategory?.map((category) => (
                    <tr key={category.id} className='bg-white border-b'>
                      <th className='px-6 py-4'>
                        <img className='rounded' src='https://picsum.photos/50/50' alt='' />
                      </th>
                      <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                        {category.name}
                      </th>
                      <td className='px-6 py-4'>
                        <div className='flex gap-2'>
                          <MdModeEdit
                            className='cursor-pointer'
                            onClick={() => {
                              setOpenModalAddCategory(true);
                              setEditCategory(category);
                            }}
                          />
                          <MdDelete
                            className='cursor-pointer text-red-400'
                            onClick={() => {
                              onDeleteCategory(category.id || '');
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

export default CategoryList;
