import Map from '@/components/Map';
import { Vehicle } from '@/types/Vehicle';
import { useMemo } from 'react';
import { Marker } from 'react-native-maps';
import { View } from 'react-native';
import styles from './styles';
import CategoryIcon from '@/components/CategoryIcon';

interface Props {
  vehicle: Vehicle;
}

const Minimap = ({vehicle}: Props) => {
  const {position, category} = vehicle;
  const region = useMemo(() => {
    return {
      latitude: position.lat,
      longitude: position.lng,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    };
  }, [vehicle.position]);

  return (
    <View style={styles.mapWrapper}>
      <Map region={region}>
        <Marker
          coordinate={{
            latitude: position.lat,
            longitude: position.lng
          }}
          title={vehicle.id}
          description={vehicle.driver.name}
        >
          <CategoryIcon category={category} size={18} />
        </Marker>
      </Map>
    </View>
  );
};

export default Minimap;
