"use client";

import { Header } from "../Typography/Header";
import { Text } from "../Typography/Text";
import * as S from "./Button.styles";
import { ButtonSize, ButtonVariant } from "./Button.types";

type Props = {
  variant: ButtonVariant;
  size: ButtonSize;
  stretch?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  form?: string;
};

export const Button = ({
  variant,
  size,
  stretch,
  onClick,
  type = "button",
  form,
  children,
}: Props) => {
  return (
    <S.StyledButton
      type={type}
      form={form}
      $variant={variant}
      $size={size}
      $stretch={stretch}
      onClick={onClick}
    >
      {size === "lg" ? (
        <Header size="md">{children}</Header>
      ) : (
        <Text size="lg" bold>
          {children}
        </Text>
      )}
    </S.StyledButton>
  );
};

export default Button;
