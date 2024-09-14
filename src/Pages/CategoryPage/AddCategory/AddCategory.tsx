import { IAddCategory, IGetCategory } from '@src/Types/CategoryType';

type IProps = {
  setIsOpen: (open: boolean) => void;
  onSubmit: (data: IAddCategory) => void;
  onEdit: (data: IAddCategory) => void;
  isEditCategory: IGetCategory | undefined;
};
const AddCategory = ({}: IProps) => {
  return <div>AddCategory</div>;
};

export default AddCategory;
