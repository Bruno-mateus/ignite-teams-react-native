import { Header } from "@components/Header";
import { Container, Title } from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const { navigate } = useNavigation();
  function handleNavigation() {
    navigate("new");
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) =>
          JSON.stringify(groups.findIndex((itemIndex) => itemIndex === item))
        }
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length <= 0 && { flex: 1 }}
        ListEmptyComponent={<ListEmpty message="Nenhum grupo criado ainda" />}
      />
      <Button onPress={() => handleNavigation()} title="Criar nova turma" />
    </Container>
  );
}
