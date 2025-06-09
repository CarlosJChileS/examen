import { Calificacion } from './calificacion.entity';

export class FeedbackCalificacion {
  constructor(
    public readonly id: number,
    public readonly calificacion: Calificacion,
    public readonly observacion: string,
    public readonly fecha: Date,
    public readonly autor: string,
  ) {}

  static fromObject(obj: Record<string, any>): FeedbackCalificacion {
    const { id, calificacion, observacion, fecha, autor } = obj;
    if (id === undefined) throw 'id is required';
    if (!calificacion) throw 'calificacion is required';
    if (!fecha) throw 'fecha is required';
    const date = new Date(fecha);
    if (isNaN(date.getTime())) throw 'fecha is not valid';

    return new FeedbackCalificacion(
      id,
      Calificacion.fromObject(calificacion),
      observacion ?? '',
      date,
      autor ?? ''
    );
  }
}
