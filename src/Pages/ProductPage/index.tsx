import { useState } from 'react';
import ProductList from './ProductList/ProductList';
import ModalCommon from '@src/Common/ModalCommon/ModalCommon';
import AddProduct from './AddProduct/AddProduct';
import { GetProductService } from '@src/Services/ProductService';

const ProductPage = () => {
  const [openModalAddProduct, setOpenModalAddProduct] = useState(false);
  GetProductService();
  return (
    <div>
      <ProductList setOpenModalAddProduct={setOpenModalAddProduct} />
      {openModalAddProduct && (
        <ModalCommon setIsOpen={setOpenModalAddProduct} isModalOpen={openModalAddProduct} titleModal='Add product'>
          <AddProduct setIsOpen={setOpenModalAddProduct}></AddProduct>
        </ModalCommon>
      )}
    </div>
  );
};

export default ProductPage;
