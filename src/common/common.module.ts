import { Module } from '@nestjs/common';
import { AccidentModule } from '../accident/accident.module';
import { ConfigurationModule } from '../configuration/configuration.module';
import { GraphqlModule } from '../graphql/graphql.module';
import { MongoDBModule } from '../mongodb/mongodb.module';

@Module({
  imports: [GraphqlModule, MongoDBModule, AccidentModule, ConfigurationModule],
  exports: [GraphqlModule, MongoDBModule, AccidentModule, ConfigurationModule],
})
export class CommonModule {}
