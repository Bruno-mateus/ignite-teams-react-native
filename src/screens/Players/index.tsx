import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container } from "@screens/NewGroup/styles";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nova turma"
        subtitle="adicione a galera e separe os times"
      />
      <ButtonIcon icon="add" type="PRIMARY" />
      <Filter title={"time a"} />
    </Container>
  );
}
