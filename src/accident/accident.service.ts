import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Accident, AccidentDocument } from './accident.schema';
import { Model } from 'mongoose';

@Injectable()
export class AccidentService {
  @InjectModel(Accident.name) private AccidentModel: Model<AccidentDocument>;

  async findAll(): Promise<Accident[]> {
    return await this.AccidentModel.find().exec();
  }

  async findByDayOfWeek(dia_sem: string): Promise<Accident[]> {
    return await this.AccidentModel.find({ dia_sem }).exec();
  }

  async rangeDate(startDate: string, endDate: string): Promise<Accident[]> {
    return await this.AccidentModel.find().where({
      DATA_HORA: {
        $gte: startDate,
        $lte: endDate,
      },
    });
  }
}
