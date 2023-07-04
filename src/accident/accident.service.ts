import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Accident, AccidentDocument } from './accident.schema';
import { Model } from 'mongoose';
import ConnectionArgs from 'src/connection-args/connection-args';

@Injectable()
export class AccidentService {
  @InjectModel(Accident.name) private AccidentModel: Model<AccidentDocument>;

  async findByDayOfWeek(dia_sem: string): Promise<Accident[]> {
    return await this.AccidentModel.find({ dia_sem }).exec();
  }

  async total(args: ConnectionArgs): Promise<number> {
    return await this.AccidentModel.count({
      DATA_HORA: { $gte: args.startDate, $lte: args.endDate },
    });
  }

  async rangeDate(args: ConnectionArgs): Promise<Accident[]> {
    return await this.AccidentModel.find(
      { DATA_HORA: { $gte: args.startDate, $lte: args.endDate } },
      null,
      {
        limit: args.take,
        skip: args.skip,
      },
    );
  }
}
