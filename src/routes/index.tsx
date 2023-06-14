import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VehicleList from '@/screens/VehicleList/';
import VehicleDetailsScreen from '@/screens/VehicleDetails';
import SettingsScreen from '@/screens/Settings';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import { RouterParamList } from './types';

const Stack = createNativeStackNavigator<RouterParamList>();

const Router = () => {
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={VehicleList}
          options={({navigation}) => ({
            title: t('VEHICLES_SCREEN') as string,
            headerRight: () => (<Header navigation={navigation} />),
          })}
        />
        <Stack.Screen
          name="vehicle"
          component={VehicleDetailsScreen}
          options={{
            title: t('VEHICLE_SCREEN') as string,
          }}
        />
        <Stack.Screen
          name="setting"
          component={SettingsScreen}
          options={{
            title: t('Settings') as string,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
