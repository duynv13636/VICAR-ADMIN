import { ModalProps } from 'antd';
import { ReactNode } from 'react';
import { ModalCommonWrapper } from './style';
interface IProps extends ModalProps {
  isModalOpen: boolean;
  children: ReactNode;
  titleModal: string;
  setIsOpen: (open: boolean) => void;
}
const ModalCommon = ({ isModalOpen, children, titleModal, setIsOpen, ...props }: IProps) => {
  return (
    <div>
      <ModalCommonWrapper title={titleModal} open={isModalOpen} onCancel={() => setIsOpen(false)} {...props}>
        {children}
      </ModalCommonWrapper>
    </div>
  );
};

export default ModalCommon;
