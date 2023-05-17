import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AccidentDocument = Accident & Document;

@Schema()
@ObjectType()
export class Accident {
  @Prop({ type: String })
  @Field({ nullable: true })
  data_hora: string;

  @Prop({ type: Number })
  @Field()
  feridos: number;

  @Prop({ type: Number })
  @Field()
  feridos_gr: number;

  @Prop({ type: Number })
  @Field()
  mortes: number;

  @Prop({ type: Number })
  @Field()
  morte_post: number;

  @Prop({ type: Number })
  @Field()
  fatais: number;

  @Prop({ type: Number })
  @Field()
  auto: number;

  @Prop({ type: Number })
  @Field()
  taxi: number;

  @Prop({ type: Number })
  @Field()
  lotacao: number;

  @Prop({ type: Number })
  @Field()
  onibus_urb: number;

  @Prop({ type: Number })
  @Field()
  onibus_met: number;

  @Prop({ type: Number })
  @Field()
  onibus_int: number;

  @Prop({ type: Number })
  @Field()
  caminhao: number;

  @Prop({ type: Number })
  @Field()
  moto: number;

  @Prop({ type: Number })
  @Field()
  carroca: number;

  @Prop({ type: Number })
  @Field()
  bicicleta: number;

  @Prop({ type: Number })
  @Field()
  outro: number;

  @Prop({ type: Number })
  @Field()
  cont_vit: number;

  @Prop({ type: Number })
  @Field()
  ups: number;

  @Prop({ type: Number })
  @Field()
  patinete: number;

  @Prop({ type: Number })
  @Field()
  longitude: number;

  @Prop({ type: Number })
  @Field()
  latitude: number;

  @Prop({ type: String })
  @Field()
  log1: string;

  @Prop({ type: String })
  @Field()
  tipo_acid: string;

  @Prop({ type: String })
  @Field({ nullable: true })
  dia_sem: string;

  @Prop({ type: String })
  @Field()
  noite_dia: string;

  @Prop({ type: String })
  @Field()
  regiao: string;
}

export const AccidentSchema = SchemaFactory.createForClass(Accident);
