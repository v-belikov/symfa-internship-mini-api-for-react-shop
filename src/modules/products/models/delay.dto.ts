import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsPositive } from 'class-validator';

export class Delay {
  @IsOptional()
  @IsPositive()
  @ApiPropertyOptional({ description: 'Response delay' })
  delay?: number;
}
