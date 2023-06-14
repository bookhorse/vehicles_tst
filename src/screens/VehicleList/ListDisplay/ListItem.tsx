import { Text, TouchableOpacity } from 'react-native';
import { VehicleCategory } from '@/types/Vehicle';
import styles from '../styles';
import CategoryIcon from '@/components/CategoryIcon';

interface Props {
  title: string;
  driver: string;
  category: VehicleCategory;
  onPress: () => void;
}

const ListItem = ({title, driver, category, onPress}: Props ) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text>{title}</Text>
      <Text>{driver}</Text>
      <CategoryIcon category={category} />
    </TouchableOpacity>
  );
};


export default ListItem;
