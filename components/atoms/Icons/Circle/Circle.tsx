import * as S from "./Circle.styles";

type Props = {
  fillColor: string;
};

export const Circle = ({ fillColor }: Props) => (
  <S.StyledCircleIcon viewBox="0 0 15 15">
    <circle cx="7.5" cy="7.5" r="7.5" fill={fillColor} />
  </S.StyledCircleIcon>
);
