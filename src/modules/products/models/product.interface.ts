import { Size } from './size.enum';

export interface IProduct {
  availableSizes: Size[];
  currencyFormat: '$';
  currencyId: 'USD';
  description: string;
  id: number;
  installments: number;
  isFreeShipping: boolean;
  price: number;
  sku: number;
  style: string;
  title: string;
}
