import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiProductModel, GetProductsDto } from '../models';

@Controller('products')
@ApiTags('Products - Controller')
export class ProductsController {
  constructor(private readonly _productsService: ProductsService) {}

  @Get()
  @ApiResponse({ isArray: true, type: ApiProductModel })
  getAll(@Query() query: GetProductsDto) {
    return this._productsService.getAll(query);
  }
}
