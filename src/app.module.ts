import { Module } from '@nestjs/common';
import { databaseProviders } from './users/database.providers';
import { CombineProvider } from './users/combineProvider.module';

@Module({
  imports: [CombineProvider],
  providers: [...databaseProviders],
})
export class AppModule {}
