import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsPositive } from 'class-validator';
import { Transform, TransformFnParams } from 'class-transformer';

export class Delay {
  @IsOptional()
  @IsPositive()
  @Transform(({ value }: TransformFnParams) => +value)
  @ApiPropertyOptional({ description: 'Response delay' })
  delay?: number;
}
