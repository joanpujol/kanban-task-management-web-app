import styled from "styled-components";
import { StyledText as Text } from "../../atoms/Typography/Text.styles";

export const StyledFormItem = styled.div`
  width: 100%;
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

export const StyledText = styled(Text).attrs({
  $size: "md",
  $bold: true,
  $dimmed: true,
})`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;
