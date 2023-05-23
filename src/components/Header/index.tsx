import { useNavigation } from "@react-navigation/native";
import { BackIcon, HeaderCOntainer, Logo, BackButton } from "./styles";
import logo from "@assets/logo.png";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const { navigate } = useNavigation();
  function handleBackGoHome() {
    navigate("groups");
  }
  return (
    <HeaderCOntainer>
      {showBackButton && (
        <BackButton onPress={() => handleBackGoHome()}>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logo} />
    </HeaderCOntainer>
  );
}
