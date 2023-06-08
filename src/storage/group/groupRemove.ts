import AsyncStorage from "@react-native-async-storage/async-storage";
import { groupsGetAll } from "./groupGetAll";
import { GROUP_COLLECTION, PLAYERS_COLLECTION } from "@storage/storageConfig";
import { Alert } from "react-native";

export async function groupRemove(groupName: string) {
  try {
    const groups = await groupsGetAll();
    const updateGroupList = JSON.stringify(
      groups.filter((group) => group !== groupName)
    );
    await AsyncStorage.setItem(GROUP_COLLECTION, updateGroupList);
    await AsyncStorage.removeItem(`${PLAYERS_COLLECTION}-${groupName}`);
  } catch (error) {
    console.log(error);
    Alert.alert(
      "Remover grupo",
      "Não foi possível remover esse grupo agora, tente novamente mais tarde"
    );
  }
}
