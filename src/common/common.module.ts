import { Module } from '@nestjs/common';
import { AccidentModule } from 'src/accident/accident.module';
import { ConfigurationModule } from 'src/configuration/configuration.module';
import { GraphqlModule } from 'src/graphql/graphql.module';
import { MongoDBModule } from 'src/mongodb/mongodb.module';

@Module({
  imports: [GraphqlModule, MongoDBModule, AccidentModule, ConfigurationModule],
  exports: [GraphqlModule, MongoDBModule, AccidentModule, ConfigurationModule],
})
export class CommonModule {}
