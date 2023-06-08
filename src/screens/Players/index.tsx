import { Alert, TextInput } from "react-native";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container } from "@screens/NewGroup/styles";
import { useEffect, useRef, useState } from "react";
import { FlatList } from "react-native";
import { Form, HeaderList, NumberOfPlayers } from "./styles";
import { PlayerCard } from "@components/PlayerCard";
import { Input } from "@components/Input";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/players/playerAddByGroup";
import { playersGetByGroup } from "@storage/players/playersGetByGroup";
import { PlayerStorageDTO } from "@storage/players/PlayerStorageDTO";
import { playersGetByTeam } from "@storage/players/playersGetByTeam";
import { playerRemoveByGroup } from "@storage/players/playerRemoveByGroup";

type RouteParams = {
  group: string;
};

export function Players() {
  const [team, setTeam] = useState("TIME A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [player, setPlayer] = useState<string>("");
  const route = useRoute();
  const newPlayerNameInputRef = useRef<TextInput>(null);

  const { group } = route.params as RouteParams;

  async function fetchPlayersByTeam(team: string) {
    try {
      const teamTextUpperCase = team.toLocaleUpperCase("pt-br");
      const playersByTeam = await playersGetByTeam(
        teamTextUpperCase,
        group,
        playersGetByGroup
      );
      playersByTeam ? setPlayers(playersByTeam.reverse()) : "";
    } catch (err) {
      console.log(err);
      Alert.alert(
        "Listar pessoas",
        "Não foi possível listar pessoas no momento"
      );
    }
  }

  useEffect(() => {
    fetchPlayersByTeam(team.toUpperCase());
  }, [team]);

  async function handleAddNewPlayers() {
    try {
      const name =
        player.charAt(0).toLocaleUpperCase("pt-br") +
        player.slice(1).toLocaleLowerCase("pt-br");

      const newPlayer = {
        name: name,
        team: team.toLocaleUpperCase("pt-br"),
      };

      await playerAddByGroup(newPlayer, group);
      await fetchPlayersByTeam(team);
      newPlayerNameInputRef.current?.blur();
      setPlayer("");
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Adicionar pessoa", error.message);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="adicione a galera e separe os times" />
      <Form>
        <Input
          placeholder="Nome da pessoa"
          value={player}
          onChangeText={setPlayer}
          inputRef={newPlayerNameInputRef}
          onSubmitEditing={handleAddNewPlayers}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" type="PRIMARY" onPress={handleAddNewPlayers} />
      </Form>

      <HeaderList>
        <FlatList
          data={["TIME A", "TIME B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={async () => {
                setTeam(item);
              }}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={async () => {
              await playerRemoveByGroup(item, group);
              await fetchPlayersByTeam(team);
            }}
          />
        )}
        ListEmptyComponent={<ListEmpty message="Não há pessoas nesse time" />}
      />
      <Button title="Remover turma" variants="secondary" />
    </Container>
  );
}
