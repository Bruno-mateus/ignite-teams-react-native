import { Header } from "@components/Header";
import { Container, Title } from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { groupsGetAll } from "@storage/group/groupGetAll";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const { navigate } = useNavigation();
  function handleNavigation() {
    navigate("new");
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      console.log("executou");
      fetchGroups();
    }, [])
  );

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
