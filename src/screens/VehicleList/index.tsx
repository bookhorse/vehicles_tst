import { ActivityIndicator } from 'react-native';
import useStore from '@/store';
import { RouterParamList } from '@/routes/types';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import ListDisplay from './ListDisplay';
import MapDisplay from './MapDisplay';
import FilterModal from './FilterModal';

const VehicleListScreen = () => {
  const filter = useStore(store => store.filter);
  const vehicles = useStore(store => store.vehicles);
  const mapDisplay = useStore(store => store.mapDisplay);
  const navigation = useNavigation<NavigationProp<RouterParamList>>();

  if (!vehicles) return <ActivityIndicator />;

  const filterdVehicles =  vehicles.filter(el => filter.includes(el.category));

  const handleSelectVehicle = (id: string) => {
    navigation.navigate('vehicle', { id });
  };

  const DisplayComponent = mapDisplay ? MapDisplay : ListDisplay;

  return <>
    <DisplayComponent vehicles={filterdVehicles} onSelect={handleSelectVehicle} />
    <FilterModal />
  </>;
};

export default VehicleListScreen;
