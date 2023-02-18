import { Module } from '@nestjs/common';
import { APP_MODULES } from './modules';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ...APP_MODULES,
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public') }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
