import { useEffect, useMemo, useRef } from 'react';
import { View } from 'react-native';
import MapView, { EdgePadding, Marker } from 'react-native-maps';
import { Vehicle } from '@/types/Vehicle';
import Map from '@/components/Map';
import styles from '../styles';
import CategoryIcon from '@/components/CategoryIcon';

interface Props {
  vehicles: Vehicle[];
  onSelect: (id: string) => void;
}

const edgePadding: EdgePadding = {
  top: 80,
  right: 50,
  bottom: 50,
  left: 50
};

const MapDisplay = ({ vehicles, onSelect }: Props) => {
  const mapRef = useRef<MapView | null>(null);

  const initialRegion = useMemo(() => {
    const data = vehicles[0]?.position || { lat: 55, lng: 33 };

    return {
      latitude: data.lat,
      longitude: data.lng,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    };
  }, [vehicles]);

  const markers = vehicles.map(vehicle => {
    const {position, id, category} = vehicle;

    return <Marker
      key={id}
      identifier={id}
      coordinate={{
        latitude: position.lat,
        longitude: position.lng
      }}
      onPress={() => onSelect(id)}
      title={vehicle.id}
      description={vehicle.driver.name}
    >
      <CategoryIcon category={category} size={18} />
    </Marker>;
  });

  const fitMarkers = () => {
    setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.fitToSuppliedMarkers(vehicles.map(el => el.id), { edgePadding, animated: true });
      }
    }, 500);
  };

  useEffect(() => {
    fitMarkers();
  }, [vehicles]);

  return (
    <View style={styles.container}>
      <Map
        ref={ref => mapRef.current = ref as MapView}
        initialRegion={initialRegion}
        onMapReady={fitMarkers}
      >
        {markers}
      </Map>
    </View>
  );
};


export default MapDisplay;
