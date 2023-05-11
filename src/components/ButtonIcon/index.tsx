import { TouchableOpacityProps } from "react-native";
import {
  ButtonIconTypeStyleProps,
  ContainerButtonIcon,
  Form,
  Icon,
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "@components/Input";

type ButtonIconProps = TouchableOpacityProps & {
  type?: ButtonIconTypeStyleProps;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonIcon({
  icon,
  type = "PRIMARY",
  ...rest
}: ButtonIconProps) {
  return (
    <Form>
      <Input autoCorrect={false} placeholder="Nome da pessoa" />
      <ContainerButtonIcon>
        <Icon name={icon} type={type} />
      </ContainerButtonIcon>
    </Form>
  );
}
