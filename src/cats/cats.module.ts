import { CatsResolver } from './cats.resolver';
import { Module } from '@nestjs/common';

@Module({
  providers: [CatsResolver],
})
export class CatsModule {}
