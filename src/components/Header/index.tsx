import { BackIcon, HeaderCOntainer, Logo, BackButton } from "./styles";
import logo from "@assets/logo.png";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <HeaderCOntainer>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logo} />
    </HeaderCOntainer>
  );
}
