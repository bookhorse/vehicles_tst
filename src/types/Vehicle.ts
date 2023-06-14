export const VehicleCategoryArray = ['passengers', 'cargo', 'special'];
type VehicleCategoryTuple = typeof VehicleCategoryArray;
export type VehicleCategory = VehicleCategoryTuple[number];

export type Driver = {
  name: string;
  telephone: string;
};

export type Geolocation = {
  lat: number;
  lng: number;
};

export type Vehicle = {
  id: string;
  driver: Driver;
  position: Geolocation;
  category: VehicleCategory;
}
