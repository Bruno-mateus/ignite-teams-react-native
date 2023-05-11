import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonStyleProps = {
  variants?: "primary" | "secondary";
  disabled?: boolean;
};

export const ButtonContainer = styled(TouchableOpacity)<ButtonStyleProps>`
  min-height: 56px;
  min-width: 56px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, variants }) =>
    variants === "primary" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    `}
`;

export const ButtonTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
