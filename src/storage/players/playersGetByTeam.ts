import { Alert } from "react-native";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function playersGetByTeam(
  team: string,
  group: string,
  playersGetByGroup: (group: string) => Promise<PlayerStorageDTO[]>
) {
  try {
    const players = await playersGetByGroup(group);
    const playersByTeam = players.filter((player) => player.team === team);
    return playersByTeam;
  } catch (error) {
    console.log(error);
    Alert.alert("Listar pessoas", "Houve um erro ao listar as pessoas");
  }
}
