import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  min-height: 56px;
  min-width: 56px;
  flex: 1;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  border-radius: 6px;
  padding: 16px;
`;
