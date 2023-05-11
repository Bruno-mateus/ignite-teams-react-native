import { TouchableOpacityProps } from "react-native";
import { ButtonTitle, ButtonContainer, ButtonStyleProps } from "./styles";

type ButtonProps = TouchableOpacityProps &
  ButtonStyleProps & {
    title: string;
  };

export function Button({ title, variants = "primary", ...rest }: ButtonProps) {
  return (
    <ButtonContainer variants={variants} {...rest}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  );
}
