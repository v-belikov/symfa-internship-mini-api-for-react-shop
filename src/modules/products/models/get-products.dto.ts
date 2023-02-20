import { DelayDto } from './delay.dto';
import { Size } from './size.enum';
import { IsArray, IsEnum, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetProductsDto extends DelayDto {
  @IsOptional()
  @IsArray()
  @IsEnum(Size, { each: true })
  @ApiPropertyOptional({
    name: 'availableSizes[]',
    enum: Size,
    example: [Size.X, Size.L],
    isArray: true,
  })
  availableSizes?: Size[];
}
