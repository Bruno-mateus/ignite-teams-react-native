import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;
export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  margin: 32px 0 12px;
`;

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;
export const Form = styled.View`
  width: 100%;
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
