import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Vehicle } from '@/types/Vehicle';
import styles from './styles';
import CategoryIcon from '@/components/CategoryIcon';

interface Props {
  vehicle: Vehicle;
}

interface InfoProps {
  label: string;
  value: string;
  icon?: JSX.Element;
}

const InfoField = ({label, value, icon}: InfoProps) => {
  return (
    <View style={styles.info}>
      <View style={styles.infoLabel}>
        <Text>{label}:</Text>
      </View>
      <View style={styles.infoValue}>
        {icon}
        <Text>{value}</Text>
      </View>
    </View>
  );
};

const VehicleInfo = ({vehicle}: Props) => {
  const { t } = useTranslation();
  const {category, driver} = vehicle;

  return (
    <View style={styles.container}>
      <InfoField label={t('Category')} value={category} icon={<CategoryIcon category={category} />} />
      <InfoField label={t('Driver')} value={driver.name} />
      <InfoField label={t('Telephone')} value={driver.telephone} />
    </View>
  );
};

export default VehicleInfo;
