import { Injectable } from '@nestjs/common';
import { GetProductsDto, IProduct, PRODUCTS, Size } from '../models';

@Injectable()
export class ProductsService {
  getAll({
    delay = 0,
    availableSizes,
  }: GetProductsDto): Promise<ReadonlyArray<IProduct>> {
    return new Promise<ReadonlyArray<IProduct>>((resolve) => {
      setTimeout(() => {
        const products = availableSizes
          ? PRODUCTS.filter((product: IProduct) =>
              availableSizes.some((size: Size) =>
                product.availableSizes.includes(size),
              ),
            )
          : PRODUCTS;

        resolve(products);
      }, delay);
    });
  }
}
