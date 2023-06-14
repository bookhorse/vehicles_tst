import { changeLanguage } from '@/i18n';
import { Vehicle, VehicleCategoryArray } from '@/types/Vehicle';
import { loadVehicles } from '@/utils';
import { saveSettings, loadSettings } from '@/utils/session';
import { create } from 'zustand';

export interface AppStore {
  vehicles?: Vehicle[];
  lang: string;
  mapDisplay: boolean;
  filter: string[];
  modal: boolean;

  init: () => void;
  setLang: (value: string) => void;
  setFilter: (value: string[]) => void;
  setModal: (value: boolean) => void;
  toggleDisplay: () => void;
  saveSession: () => void;
  loadSession: () => void;
}

const initialState = {
  filter: VehicleCategoryArray,
  modal: false,
  lang: '',
  mapDisplay: false
};

const useStore = create<AppStore>()((set, get) => ({
  ...initialState,
  init: async () => {
    const { loadSession } = get();
    await loadSession();
    const vehicles = await loadVehicles();
    set({vehicles});
  },
  saveSession: () => {
    const { lang } = get();
    const sessionData = { lang };
    saveSettings(sessionData);
  },
  loadSession: async () => {
    const sessionData = await loadSettings();
    if (sessionData) {
      if (sessionData.lang) {
        changeLanguage(sessionData.lang);
      }
      set({...sessionData});
    }
  },
  setLang: (value) => {
    const { saveSession } = get();
    set({lang: value});
    changeLanguage(value);
    saveSession();
  },
  setFilter: (value) => {
    set({filter: value});
  },
  setModal: (value) => {
    set({modal: value});
  },
  toggleDisplay: () => {
    const {mapDisplay} = get();
    set({ mapDisplay: !mapDisplay });
  }
}));

export default useStore;
