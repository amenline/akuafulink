export enum ShopItemType {
  commodity = 'COMMODITY',
  mealbox = 'MEALBOX',
}

export enum AccountType {
  customer = 'CUSTOMER',
  admin = 'ADMIN',
}

export type Location = {
  country: string;
  region: string;
  town: string;
  gps: string;
};
