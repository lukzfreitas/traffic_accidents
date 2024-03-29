import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      csrfPrevention: true,
      autoSchemaFile: true,
      playground: true,
      driver: ApolloDriver,
    }),
  ],
})
export class GraphqlModule {}
