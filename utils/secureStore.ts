import * as SecureStore from "expo-secure-store";

async function getSecureStore(key: string) {
  const storeData = (await SecureStore.getItemAsync(key)) ?? null;
  return storeData;
}

async function saveSecureStore(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

async function deleteSecureStore(key: string) {
  await SecureStore.deleteItemAsync(key);
}

export { deleteSecureStore, getSecureStore, saveSecureStore };
