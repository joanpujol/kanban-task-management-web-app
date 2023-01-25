"use client";

import ReactDOM from "react-dom";
import * as S from "./Modal.styles";

type Props = {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

export const Modal = ({ open, children, onClose }: Props) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <S.ModalOverlay onClick={onClose} />
      <S.Modal>
        <S.ModalContent>{children}</S.ModalContent>
      </S.Modal>
    </>,
    document.getElementById("portal") as Element
  );
};
