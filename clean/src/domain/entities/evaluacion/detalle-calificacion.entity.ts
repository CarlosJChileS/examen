import { Calificacion } from './calificacion.entity';
import { CriterioEvaluacion } from './criterio-evaluacion.entity';

export class DetalleCalificacion {
  constructor(
    public readonly id: number,
    public readonly calificacion: Calificacion,
    public readonly criterioEvaluacion: CriterioEvaluacion,
    public readonly slideId: number,
    public readonly puntaje: number,
    public readonly comentario: string,
    public readonly fragmentoAudioId: number,
  ) {}

  static fromObject(obj: Record<string, any>): DetalleCalificacion {
    const {
      id,
      calificacion,
      criterioEvaluacion,
      slideId,
      puntaje,
      comentario,
      fragmentoAudioId,
    } = obj;

    if (id === undefined) throw 'id is required';
    if (!calificacion) throw 'calificacion is required';
    if (!criterioEvaluacion) throw 'criterioEvaluacion is required';
    if (slideId === undefined) throw 'slideId is required';
    if (puntaje === undefined) throw 'puntaje is required';
    if (fragmentoAudioId === undefined) throw 'fragmentoAudioId is required';

    return new DetalleCalificacion(
      id,
      Calificacion.fromObject(calificacion),
      CriterioEvaluacion.fromObject(criterioEvaluacion),
      slideId,
      puntaje,
      comentario ?? '',
      fragmentoAudioId
    );
  }
}
