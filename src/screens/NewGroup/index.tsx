import { Header } from "@components/Header";
import { Container, Content, Icon, InputGroup } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";

export function NewGroup() {
  const { navigate } = useNavigation();
  const [group, setGroup] = useState<string>("");

  async function handleNew() {
    try {
      await groupCreate(group);
      navigate("players", { group });
    } catch (error) {
      console.log(error);
    }
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
          <Input placeholder="Nome da turma" onChangeText={setGroup} />
          <Button title="Criar" onPress={() => handleNew()} />
        </InputGroup>
      </Content>
    </Container>
  );
}
