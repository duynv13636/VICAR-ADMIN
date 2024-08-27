import { useState } from 'react';
import ProductList from './ProductList/ProductList';
import ModalCommon from '@src/Common/ModalCommon/ModalCommon';
import AddProduct from './AddProduct/AddProduct';
import { AddProductService, GetProductService } from '@src/Services/ProductService';

const ProductPage = () => {
  const [openModalAddProduct, setOpenModalAddProduct] = useState(false);
  const { data, isFetching, refetch } = GetProductService();
  const addProductMutation = AddProductService(() => {
    setOpenModalAddProduct(false);
    refetch();
  });
  return (
    <div>
      <ProductList
        setOpenModalAddProduct={setOpenModalAddProduct}
        isLoading={isFetching}
        dataProducts={data?.data || []}
      />
      {openModalAddProduct && (
        <ModalCommon setIsOpen={setOpenModalAddProduct} isModalOpen={openModalAddProduct} titleModal='Add product'>
          <AddProduct setIsOpen={setOpenModalAddProduct} onSubmit={addProductMutation.mutate}></AddProduct>
        </ModalCommon>
      )}
    </div>
  );
};

export default ProductPage;
