import { IProduct } from './product.interface';
import { Size } from './size.enum';
import { ApiProperty } from '@nestjs/swagger';

export class ApiProductModel implements IProduct {
  @ApiProperty({
    enum: Size,
    isArray: true,
    example: [Size.M, Size.L],
  })
  availableSizes: Size[];

  @ApiProperty({ example: '$' })
  currencyFormat: '$';

  @ApiProperty({ example: 'USD' })
  currencyId: 'USD';

  @ApiProperty()
  description: string;

  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 9 })
  installments: number;

  @ApiProperty({ example: true })
  isFreeShipping: boolean;

  @ApiProperty({ example: 10.9 })
  price: number;

  @ApiProperty({
    example: 8552515751438644,
    description: 'Use for get image of product: images/${sku}-2-product.webp',
  })
  sku: number;

  @ApiProperty()
  style: string;

  @ApiProperty()
  title: string;
}
