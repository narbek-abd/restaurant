export default interface ProductTypes {
  id: number;
  title: string;
  price: number;
  description: string;
  coords: {
    address_name: string;
  };
}
