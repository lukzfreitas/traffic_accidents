import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      cors: {
        origin: 'http://localhost:3000',
        credentials: true,
      },
      autoSchemaFile: true,
      playground: true,
      driver: ApolloDriver,
    }),
  ],
})
export class GraphqlModule {}
