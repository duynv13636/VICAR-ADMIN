import ProductList from './ProductList/ProductList';
import {
    DeleteProductService,
    GetProductService
} from '@src/Services/ProductService';

const ProductPage = () => {
    // const [isEditProduct, setEditProduct] = useState<IGetProductList>();
    const { data, isFetching, refetch } = GetProductService();
    // const addProductMutation = AddProductService(() => {
    //   refetch();
    // });
    // const editProduct = EditProductService(() => {
    //   refetch();
    // });
    const deleteProduct = DeleteProductService(() => {
        refetch();
    });
    return (
        <div>
            <ProductList
                isLoading={isFetching}
                dataProducts={data?.data || []}
                onDeleteProduct={deleteProduct.mutate}
            />
            {/* {openModalAddProduct && (
        <ModalCommon setIsOpen={setOpenModalAddProduct} isModalOpen={openModalAddProduct} titleModal='Add product'>
          <AddProduct
            setIsOpen={setOpenModalAddProduct}
            onSubmit={addProductMutation.mutate}
            onEdit={editProduct.mutate}
            isEditProduct={isEditProduct}
          ></AddProduct>
        </ModalCommon>
      )} */}
        </div>
    );
};

export default ProductPage;
