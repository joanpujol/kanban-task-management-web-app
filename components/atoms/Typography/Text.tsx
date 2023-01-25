import { StyledText } from "./Text.styles";
import { TypographySize } from "./Typography.types";

type Props = {
  size: Extract<TypographySize, "md" | "lg">;
  bold?: boolean;
  dimmed?: boolean;
  children: React.ReactNode;
};

export const Text = ({ size, bold, dimmed, children }: Props) => {
  return (
    <StyledText $size={size} $bold={bold} $dimmed={dimmed}>
      {children}
    </StyledText>
  );
};
