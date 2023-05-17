import { Module } from '@nestjs/common';
import { AccidentService } from './accident.service';
import { AccidentResolver } from './accident.resolver';
import { Accident, AccidentSchema } from './accident.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Accident.name,
        schema: AccidentSchema,
      },
    ]),
  ],
  providers: [AccidentService, AccidentResolver],
})
export class AccidentModule {}
