import { useState } from 'react';
import ProductList from './ProductList/ProductList';
import ModalCommon from '@src/Common/ModalCommon/ModalCommon';
import AddProduct from './AddProduct/AddProduct';
import {
  AddProductService,
  DeleteProductService,
  EditProductService,
  GetProductService
} from '@src/Services/ProductService';
import { IGetProductList } from '@src/Types/ProductsType';

const ProductPage = () => {
  const [openModalAddProduct, setOpenModalAddProduct] = useState(false);
  const [isEditProduct, setEditProduct] = useState<IGetProductList>();
  const { data, isFetching, refetch } = GetProductService();
  const addProductMutation = AddProductService(() => {
    setOpenModalAddProduct(false);
    refetch();
  });
  const editProduct = EditProductService(() => {
    setOpenModalAddProduct(false);
    refetch();
  });
  const deleteProduct = DeleteProductService(() => {
    refetch();
  });
  return (
    <div>
      <ProductList
        setOpenModalAddProduct={setOpenModalAddProduct}
        isLoading={isFetching}
        dataProducts={data?.data || []}
        setEditProduct={setEditProduct}
        onDeleteProduct={deleteProduct.mutate}
      />
      {openModalAddProduct && (
        <ModalCommon setIsOpen={setOpenModalAddProduct} isModalOpen={openModalAddProduct} titleModal='Add product'>
          <AddProduct
            setIsOpen={setOpenModalAddProduct}
            onSubmit={addProductMutation.mutate}
            onEdit={editProduct.mutate}
            isEditProduct={isEditProduct}
          ></AddProduct>
        </ModalCommon>
      )}
    </div>
  );
};

export default ProductPage;
