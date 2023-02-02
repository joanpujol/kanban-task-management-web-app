import styled from "styled-components";
import { StyledText as Text } from "../../atoms/Typography/Text.styles";

export const StyledModalSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const SectionHeader = styled(Text).attrs({
  $size: "md",
  $bold: true,
  $dimmed: true,
})`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;
