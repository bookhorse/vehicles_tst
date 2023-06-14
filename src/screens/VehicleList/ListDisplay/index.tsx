import { Vehicle } from '@/types/Vehicle';
import { View } from 'react-native';
import styles from '../styles';
import VehicleList from './VehicleList';

interface Props {
  vehicles: Vehicle[];
  onSelect: (id: string) => void;
}

const ListDisplay = ({ vehicles, onSelect }: Props) => {
  return (
    <View style={styles.container}>
      <VehicleList items={vehicles} onSelect={onSelect} />
    </View>
  );
};


export default ListDisplay;
