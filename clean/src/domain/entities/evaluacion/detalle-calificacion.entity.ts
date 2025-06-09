import { Calificacion } from './calificacion.entity';
import { CriterioEvaluacion } from './criterio-evaluacion.entity';

export class DetalleCalificacion {
  constructor(
    public id: number,
    public calificacion: Calificacion,
    public criterioEvaluacion: CriterioEvaluacion,
    public slideId: number,
    public puntaje: number,
    public comentario: string,
    public fragmentoAudioId: number,
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
