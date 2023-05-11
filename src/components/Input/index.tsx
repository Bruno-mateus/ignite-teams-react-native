import { useTheme } from "styled-components";
import { Container } from "./styles";
import { TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  const { COLORS } = useTheme();
  return (
    <Container
      {...rest}
      placeholder="Nome da turma"
      placeholderTextColor={COLORS.GRAY_300}
    />
  );
}
