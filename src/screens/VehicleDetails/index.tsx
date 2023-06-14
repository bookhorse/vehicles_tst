import { View, ActivityIndicator } from 'react-native';
import { useEffect, useMemo } from 'react';
import { useNavigation, useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { RouterParamList } from '@/routes/types';
import useStore from '@/store';
import VehicleInfo from './VehicleInfo';
import styles from './styles';
import Footer from './Footer';
import Minimap from './Minimap';

const VehicleDetailsScreen = () =>  {
  const navigation = useNavigation<NavigationProp<RouterParamList>>();
  const route = useRoute<RouteProp<RouterParamList, 'vehicle'>>();
  const vehicles = useStore(store => store.vehicles);
  const { id } = route.params || {};

  const vehicle = useMemo(() => {
    if (id && vehicles) {
      return vehicles.find(el => el.id === id);
    } else {
      return null;
    }
  }, [vehicles, id]);

  useEffect(() => {
    if (!id) {
      navigation.navigate('home');
    }
  }, [id]);

  if (!vehicle) return <ActivityIndicator />;

  return (
    <View style={styles.flex}>
      <Minimap vehicle={vehicle} />
      <VehicleInfo vehicle={vehicle} />
      <Footer telephone={vehicle.driver.telephone} />
    </View>
  );
};

export default VehicleDetailsScreen;
