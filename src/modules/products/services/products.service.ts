import { Injectable } from '@nestjs/common';
import { IProduct, PRODUCTS } from '../models';

@Injectable()
export class ProductsService {
  getAll(): ReadonlyArray<IProduct> {
    return PRODUCTS;
  }
}
