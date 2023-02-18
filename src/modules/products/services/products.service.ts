import { Injectable } from '@nestjs/common';
import { Delay, IProduct, PRODUCTS } from '../models';

@Injectable()
export class ProductsService {
  getAll({ delay = 0 }: Delay): Promise<ReadonlyArray<IProduct>> {
    return new Promise<ReadonlyArray<IProduct>>((resolve) => {
      setTimeout(() => {
        resolve(PRODUCTS);
      }, delay);
    });
  }
}
