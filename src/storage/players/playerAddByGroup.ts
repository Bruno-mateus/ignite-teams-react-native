import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { PLAYERS_COLLECTION } from "@storage/storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";
import { AppError } from "@utils/AppError";

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storedPlayers = await playersGetByGroup(group);

    const playerAlreadyExists = storedPlayers.filter(
      (player) =>
        player.name.toLocaleLowerCase("pt-br") ===
        newPlayer.name.toLocaleLowerCase("pt-br")
    );
    if (newPlayer.name.trim().length <= 0)
      throw new AppError("Insira um nome de jogador válido para continuar");

    if (playerAlreadyExists.length > 0)
      throw new AppError(
        `O jogador ${
          newPlayer.name.charAt(0).toLocaleUpperCase("pt-br") +
          newPlayer.name.slice(1)
        } já foi adicionado em algum dos times`
      );

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYERS_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
