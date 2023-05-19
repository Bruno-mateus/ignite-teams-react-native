import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, ContainerButtonIcon, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

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
    <ContainerButtonIcon {...rest}>
      <Icon name={icon} type={type} />
    </ContainerButtonIcon>
  );
}