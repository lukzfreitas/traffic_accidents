import { Args, Query, Resolver } from '@nestjs/graphql';
import { Accident } from './accident.schema';
import { AccidentService } from './accident.service';

@Resolver(() => Accident)
export class AccidentResolver {
  constructor(private readonly accidentService: AccidentService) {}

  @Query(() => [Accident], { name: 'accidents' })
  async findAll() {
    return await this.accidentService.findAll();
  }

  @Query(() => [Accident], { name: 'accidents_by_day_of_week' })
  async findByDayOfWeek(
    @Args('dia_sem', { type: () => String }) dia_sem: string,
  ): Promise<Accident[]> {
    return await this.accidentService.findByDayOfWeek(dia_sem);
  }
}
