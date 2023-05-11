import { Header } from "@components/Header";
import { Container, Title } from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header />
      <Highlight title="Hello, world!" subtitle="What is the hello world?" />
      <FlatList
        data={groups}
        keyExtractor={(item) =>
          JSON.stringify(groups.findIndex((itemIndex) => itemIndex === item))
        }
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length <= 0 && { flex: 1 }}
        ListEmptyComponent={<ListEmpty message="Nenhum grupo criado ainda" />}
      />
      <Button title="Que tal cadastrar uma turma?" />
    </Container>
  );
}
