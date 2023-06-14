import { TouchableOpacity, View, StyleSheet } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouterParamList } from '@/routes/types';
import { Feather } from '@expo/vector-icons';
import useStore from '@/store';

type Navigation = NativeStackNavigationProp<RouterParamList, 'vehicle'>;

interface Props {
  navigation: Navigation;
}

const Header = ({ navigation }: Props) => {
  const [mapDisplay, toggleDisplay] = useStore(store => [store.mapDisplay, store.toggleDisplay]);
  const setModal = useStore(store => store.setModal);

  const handleFilterClick = () => {
    setModal(true);
  };

  const handleMapToggleClick = () => {
    toggleDisplay();
  };

  const handleSettingsClick = () => {
    navigation.navigate('setting');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleFilterClick}>
        <Feather name="filter" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMapToggleClick}>
        { mapDisplay
          ? <Feather name="list" size={24} color="black" />
          : <Feather name="map" size={24} color="black" />
        }
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSettingsClick}>
        <Feather name="settings" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16
  },
});


export default Header;
