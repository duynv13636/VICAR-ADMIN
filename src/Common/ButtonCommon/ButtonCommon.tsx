type IProps = {
  textButton: string;
  icon?: React.ReactNode;
  onClickBtn: () => void;
  classNameProps?: string;
};
const ButtonCommon = ({ icon, textButton, onClickBtn, classNameProps }: IProps) => {
  return (
    <div>
      <button
        onClick={onClickBtn}
        type='button'
        className={`${classNameProps ? classNameProps : 'bg-bgSidebar'} outline-white border-none flex items-center gap-1 text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}
      >
        {icon ? icon : ''}
        {textButton}
      </button>
    </div>
  );
};

export default ButtonCommon;
