import * as S from "./ModalSection.styles";

type Props = {
  title?: string;
  children: React.ReactNode;
};

export const ModalSection = ({ title, children }: Props) => {
  return (
    <S.StyledModalSection>
      {title && <S.SectionHeader>{title}</S.SectionHeader>}
      {children}
    </S.StyledModalSection>
  );
};
