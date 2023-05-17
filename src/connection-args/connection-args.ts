import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class ConnectionArgs {
  @Field({ nullable: true, description: 'Date started to filter range' })
  public startDate: string;

  @Field({ nullable: true, description: 'Date ended to filter range' })
  public endDate: string;
}
