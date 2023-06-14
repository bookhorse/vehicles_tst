import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { VehicleCategory } from '@/types/Vehicle';

interface IconProps {
  color?: string;
  size?: number;
}

interface CategoryIconProps extends IconProps {
  category: VehicleCategory;
}

export const PassangerVehicle = (props: IconProps) => (
  <FontAwesome5 name="car-side" {...props} />
);

export const CargoVehicle = (props: IconProps) => (
  <FontAwesome5 name="truck" {...props} />
);

export const SpecialVehicle = (props: IconProps) => (
  <MaterialCommunityIcons name="tow-truck" {...props} />
);

const CategoryIcon = ({category, color = 'black', size = 24}: CategoryIconProps) => {
  switch (category) {
    case 'cargo': return <CargoVehicle color={color} size={size} />;
    case 'passengers': return <PassangerVehicle color={color} size={size} />;
    case 'special': return <SpecialVehicle color={color} size={size} />;
    default: return null;
  };
};

export default CategoryIcon;
