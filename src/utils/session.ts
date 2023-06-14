import { JSONValue } from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SETTINGS_KEY = 'APP_SETTINGS';

const storeItem = async (key: string, data: Record<string, JSONValue>) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch {
    //noop
  }
};

const loadItem = async (key: string) => {
  const raw = await AsyncStorage.getItem(key);
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
  return null;
};

export type SettingsData = {
  lang: string;
};

export const saveSettings = async (data: SettingsData) => {
  await storeItem(SETTINGS_KEY, data);
};

export const loadSettings = async () => {
  const session = await loadItem(SETTINGS_KEY) as SettingsData | null;

  return session;
};
