import { Args, Query, Resolver } from '@nestjs/graphql';
import { Accident } from './accident.schema';
import { AccidentService } from './accident.service';
import ConnectionArgs from '../connection-args/connection-args';

@Resolver(() => Accident)
export class AccidentResolver {
  constructor(private readonly accidentService: AccidentService) {}

  @Query(() => [Accident], { name: 'accidents_range_date' })
  async rangeDate(@Args('args') args: ConnectionArgs): Promise<Accident[]> {
    return this.accidentService.rangeDate(args);
  }

  @Query(() => [Accident], { name: 'accidents_by_day_of_week' })
  async findByDayOfWeek(
    @Args('dia_sem', { type: () => String }) dia_sem: string,
  ): Promise<Accident[]> {
    return await this.accidentService.findByDayOfWeek(dia_sem);
  }
}
