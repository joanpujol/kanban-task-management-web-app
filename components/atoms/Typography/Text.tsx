import { StyledText } from "./Text.styles";
import { TypographySize } from "./Typography.types";

type Props = {
  size: Extract<TypographySize, "md" | "lg">;
  bold?: boolean;
  dimmed?: boolean;
  red?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

export const Text = ({ size, bold, dimmed, red, children, onClick }: Props) => {
  return (
    <StyledText
      $size={size}
      $bold={bold}
      $dimmed={dimmed}
      $red={red}
      onClick={onClick}
    >
      {children}
    </StyledText>
  );
};
