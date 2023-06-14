import { forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, MapViewProps } from 'react-native-maps';

interface Props extends MapViewProps {
  children: React.ReactNode;
}

const Map = forwardRef<MapView, Props>((props, forwardedRef) => {
  const { children, ...restProps } = props;
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      ref={forwardedRef}
      {...restProps}
    >
      {children}
    </MapView>
  );
});

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
