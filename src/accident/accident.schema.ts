import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AccidentDocument = Accident & Document;

@Schema()
@ObjectType()
export class Accident {
  @Prop({ type: String })
  @Field({ nullable: true })
  DATA_HORA: string;

  @Prop({ type: Number })
  @Field()
  FERIDOS: number;

  @Prop({ type: Number })
  @Field()
  FERIDOS_GR: number;

  @Prop({ type: Number })
  @Field()
  MORTES: number;

  @Prop({ type: Number })
  @Field()
  MORTE_POST: number;

  @Prop({ type: Number })
  @Field()
  FATAIS: number;

  @Prop({ type: Number })
  @Field()
  AUTO: number;

  @Prop({ type: Number })
  @Field()
  TAXI: number;

  @Prop({ type: Number })
  @Field()
  LOTACAO: number;

  @Prop({ type: Number })
  @Field()
  ONIBUS_URB: number;

  @Prop({ type: Number })
  @Field()
  ONIBUS_MET: number;

  @Prop({ type: Number })
  @Field()
  ONIBUS_INT: number;

  @Prop({ type: Number })
  @Field()
  CAMINHAO: number;

  @Prop({ type: Number })
  @Field()
  MOTO: number;

  @Prop({ type: Number })
  @Field()
  CARROCA: number;

  @Prop({ type: Number })
  @Field()
  BICICLETA: number;

  @Prop({ type: Number })
  @Field()
  OUTRO: number;

  @Prop({ type: Number })
  @Field()
  UPS: number;

  @Prop({ type: Number })
  @Field()
  LONGITUDE: number;

  @Prop({ type: Number })
  @Field()
  LATITUDE: number;

  @Prop({ type: String })
  @Field()
  LOG1: string;

  @Prop({ type: String })
  @Field()
  TIPO_ACID: string;

  @Prop({ type: String })
  @Field({ nullable: true })
  DIA_SEM: string;

  @Prop({ type: String })
  @Field()
  NOITE_DIA: string;

  @Prop({ type: String })
  @Field()
  REGIAO: string;

  @Prop({ type: String })
  @Field()
  TEMPO: string;

  @Prop({ type: Number })
  @Field()
  FX_HORA: string;

  @Prop({ type: Number })
  @Field()
  DIA: string;

  @Prop({ type: Number })
  @Field()
  MES: string;

  @Prop({ type: Number })
  @Field()
  ANO: string;
}

export const AccidentSchema = SchemaFactory.createForClass(Accident);
