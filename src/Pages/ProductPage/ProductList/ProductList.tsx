import ButtonCommon from '@src/Common/ButtonCommon/ButtonCommon';
import ProductListComponent from '@src/Components/ProductComponent/ProductListComponent/ProductListComponent';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
type IProps = {
  setOpenModalAddProduct: (boolean: boolean) => void;
};
const ProductList = ({ setOpenModalAddProduct }: IProps) => {
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
      <ProductListComponent />
    </div>
  );
};

export default ProductList;
