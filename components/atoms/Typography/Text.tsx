import { StyledText } from "./Text.styles";
import { TypographySize } from "./Typography.types";

type Props = {
    size: Extract<TypographySize, 'md' | 'lg'>;
    bold?: boolean;
    children: React.ReactNode;
};

export const Text = ({size, bold, children }: Props) => {
  return <StyledText $size={size} $bold={bold}>{children}</StyledText>
};

