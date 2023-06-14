import { Vehicle } from '@/types/Vehicle';
import { FlatList } from 'react-native';
import ListItem from './ListItem';
import styles from '../styles';
import { useTranslation } from 'react-i18next';

interface Props {
  items: Vehicle[];
  onSelect: (id: string) => void;
}

const VehicleList = ({ items, onSelect }: Props) => {
  const { t } = useTranslation();

  return <FlatList
    style={styles.list}
    data={items}
    renderItem={({item}) => (
      <ListItem
        title={`${t('VEHICLE_SHORT')} ${item.id}`}
        driver={item.driver.name}
        category={item.category}
        onPress={() => onSelect(item.id)}
      />
    )}
    keyExtractor={(item) => item.id}
  />;
};

export default VehicleList;
