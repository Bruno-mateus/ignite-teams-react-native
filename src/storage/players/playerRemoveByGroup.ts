import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { PLAYERS_COLLECTION } from "@storage/storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerRemoveByGroup(
  removePlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storedPlayers = await playersGetByGroup(group);

    const updatePlayersList = storedPlayers.filter(
      (player) => player.name !== removePlayer.name
    );

    const storage = JSON.stringify(updatePlayersList);

    await AsyncStorage.setItem(`${PLAYERS_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
