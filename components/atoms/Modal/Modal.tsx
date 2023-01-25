"use client";

import * as S from "./Modal.styles";

type Props = {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

export const Modal = ({ open, children, onClose }: Props) => {
  if (!open) return null;

  return (
    <>
      <S.ModalOverlay onClick={onClose} />
      <S.Modal>
        <S.ModalContent>{children}</S.ModalContent>
      </S.Modal>
    </>
  );
};
