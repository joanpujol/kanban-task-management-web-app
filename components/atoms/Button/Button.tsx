"use client";

import { Typography } from "../Typography/Typography";
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
        <Typography variant="Heading" size="md">
          {children}
        </Typography>
      ) : (
        <Typography variant="Body" size="lg" bold>
          {children}
        </Typography>
      )}
    </S.StyledButton>
  );
};

export default Button;
