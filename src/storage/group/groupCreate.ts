import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";
import { groupsGetAll } from "./groupGetAll";
import { AppError } from "@utils/AppError";

export async function groupCreate(newGroup: string) {
  try {
    const groups = await groupsGetAll();

    const groupAlreadyExists = groups.find((group) => group === newGroup);

    if (groupAlreadyExists)
      throw new AppError("Já existe um grupo com esse nome");

    const storage = JSON.stringify([...groups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
