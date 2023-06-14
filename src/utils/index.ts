import { Linking } from 'react-native';
import data from '@/../assets/data.json';
import { Vehicle } from '@/types/Vehicle';
const vehicles = data as Vehicle[];

export const loadVehicles = () => {
  return Promise.resolve(vehicles);
};


export const makeCall = (telephone: string) => {
  try {
    Linking.openURL(`tel:${telephone}`);
  } catch {
    //NOOP
  }
};


export const sendWAMessage = (telephone: string, message: string) => {
  try {
    Linking.openURL(`whatsapp://send?text=${message}&phone=${telephone}`);
  } catch {
    //NOOP
  }
};
