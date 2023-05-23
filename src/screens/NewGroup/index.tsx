import { Header } from "@components/Header";
import { Container, Content, Icon, InputGroup } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
  const { navigate } = useNavigation();
  function handlePlayersScreen() {
    navigate("players", { groups: "team a" });
  }
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova Turma"
          subtitle="Crie uma turma para adicionar pessoas"
        />
        <InputGroup>
          <Input />
          <Button title="Criar" onPress={() => handlePlayersScreen()} />
        </InputGroup>
      </Content>
    </Container>
  );
}
