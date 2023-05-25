import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class ConnectionArgs {
  @Field({ nullable: true, description: 'Date started to filter range' })
  public startDate: string;

  @Field({ nullable: true, description: 'Date ended to filter range' })
  public endDate: string;

  @Field({ description: 'Start index to fetch items', defaultValue: 0 })
  public skip?: number;

  @Field({
    description: 'How many items do you want to retrieve',
    defaultValue: 100,
  })
  public take?: number;
}
