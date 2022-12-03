import { MongooseModule } from '@nestjs/mongoose';
import { CatsResolver } from './cats.resolver';
import { Module } from '@nestjs/common';
import { Cat, CatSchema } from './cats.schema';
import { CatsService } from './cats.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],

  providers: [CatsResolver, CatsService],
})
export class CatsModule {}
