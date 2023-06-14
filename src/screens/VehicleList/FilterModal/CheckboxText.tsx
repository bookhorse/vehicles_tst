import { View, Text } from 'react-native';
import CategoryIcon from '@/components/CategoryIcon';
import { VehicleCategory } from '@/types/Vehicle';
import styles from '../styles';

interface Props {
  text?: string;
  category: VehicleCategory;
}

const CheckBoxText = ({category, text}: Props) => (
  <View style={styles.checkBoxText}>
    <View style={styles.checkBoxIcon}>
      <CategoryIcon category={category} />
    </View>
    <Text>{text || category}</Text>
  </View>
);

export default CheckBoxText;
