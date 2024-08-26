import { Modal, ModalProps } from 'antd';
import styled from 'styled-components';

export const ModalCommonWrapper = styled(Modal)<ModalProps>`
  .ant-modal-content {
    padding: 1.25rem;
    /* min-height: 200px; */
    border-radius: 0.25rem;
    margin-top: -2rem;
  }
  .ant-modal-footer{
      display:none;
    }
  .ant-modal-close {
    width: 1.5rem;
    right: 0;
    top: 0;
    margin-right: -0.55rem;
    margin-top: -0.55rem;
    border-radius: 50%;
    .ant-modal-close-x {
      .ant-modal-close-icon {
        width: 1.5rem;
        height: 1.5rem;
        box-sizing: border-box;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border: none !important;
        outline: none !important;
        span {
        }
        svg {
          display: none;
        }
        path {
          display: none;
        }
      }
    }
  }
`;
export const FooterModal = styled.div`
  position: absolute;
  width: 100%;
  min-height: 4rem;
  margin-left: -1.25rem;
  bottom: 0;
  border-bottom-left-radius: 0.625rem;
  border-bottom-right-radius: 0.625rem;
  box-shadow:
    0px 3px 3px rgba(0, 0, 0, 0.04),
    0px -2px 3px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1.25rem;
  box-sizing: border-box;
`;
