"use client";

import { Header } from "../Typography/Header";
import { Text } from "../Typography/Text";
import * as S from "./Button.styles";
import { ButtonSize, ButtonVariant } from "./Button.types";

type Props = {
  variant: ButtonVariant;
  size: ButtonSize;
  children: React.ReactNode;
};

export const Button = ({ variant, size, children }: Props) => {
  return (
    <S.StyledButton $variant={variant} $size={size}>
      {size === "lg" ? (
        <Header size="md">
          {children}
        </Header>
      ) : (
        <Text size="lg" bold>
          {children}
        </Text>
      )}
    </S.StyledButton>
  );
};

export default Button;
