import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";
import { groupsGetAll } from "./groupGetAll";

export async function groupCreate(newGroup: string) {
  try {
    const groups = await groupsGetAll();
    const storage = JSON.stringify([...groups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
