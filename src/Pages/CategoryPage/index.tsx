import ModalCommon from '@src/Common/ModalCommon/ModalCommon';
import {
  AddCategoryService,
  DeleteCategoryService,
  EditCategoryService,
  GetCategoryService
} from '@src/Services/CategoryService';
import { useState } from 'react';
import AddCategory from './AddCategory/AddCategory';
import CategoryList from './CategoryList/CategoryList';
import { IGetCategory } from '@src/Types/CategoryType';

const CategoryPage = () => {
  const [openModalAddCategory, setOpenModalAddCategory] = useState(false);
  const [isEditCategory, setEditCategory] = useState<IGetCategory>();
  const { data, isFetching, refetch } = GetCategoryService();
  const addCategoryMutation = AddCategoryService(() => {
    setOpenModalAddCategory(false);
    refetch();
  });
  const editCategory = EditCategoryService(() => {
    setOpenModalAddCategory(false);
    refetch();
  });
  const deleteCategory = DeleteCategoryService(() => {
    refetch();
  });
  return (
    <div>
      <CategoryList
        setOpenModalAddCategory={setOpenModalAddCategory}
        isLoading={isFetching}
        dataCategory={data?.data || []}
        setEditCategory={setEditCategory}
        onDeleteCategory={deleteCategory.mutate}
      />
      {openModalAddCategory && (
        <ModalCommon setIsOpen={setOpenModalAddCategory} isModalOpen={openModalAddCategory} titleModal='Add category'>
          <AddCategory
            setIsOpen={setOpenModalAddCategory}
            onSubmit={addCategoryMutation.mutate}
            onEdit={editCategory.mutate}
            isEditCategory={isEditCategory}
          ></AddCategory>
        </ModalCommon>
      )}
    </div>
  );
};

export default CategoryPage;
