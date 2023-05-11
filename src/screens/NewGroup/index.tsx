import { Header } from "@components/Header";
import { Container, Content, Icon, InputGroup } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup() {
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
          <Button title="Criar" />
        </InputGroup>
      </Content>
    </Container>
  );
}
