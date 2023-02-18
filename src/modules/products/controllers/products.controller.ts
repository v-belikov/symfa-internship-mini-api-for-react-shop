import { Controller, Get } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiProductModel } from '../models';

@Controller('products')
@ApiTags('Products - Controller')
export class ProductsController {
  constructor(private readonly _productsService: ProductsService) {}

  @Get()
  @ApiResponse({ isArray: true, type: ApiProductModel })
  getAll() {
    return this._productsService.getAll();
  }
}
