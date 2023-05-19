import { TouchableOpacityProps } from "react-native";
import { FilterStyleProps, Title } from "./styles";
import { Container } from "./styles";

export type FilterProps = TouchableOpacityProps &
  FilterStyleProps & {
    title: String;
  };

export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
