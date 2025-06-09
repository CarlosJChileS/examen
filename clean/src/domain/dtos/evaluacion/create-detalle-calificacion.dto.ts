export class CreateDetalleCalificacionDto {
  private constructor(
    public readonly calificacionId: number,
    public readonly criterioEvaluacionId: number,
    public readonly slideId: number,
    public readonly puntaje: number,
    public readonly comentario: string,
    public readonly fragmentoAudioId: number,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateDetalleCalificacionDto?] {
    const {
      calificacionId,
      criterioEvaluacionId,
      slideId,
      puntaje,
      comentario,
      fragmentoAudioId,
    } = props;

    if (calificacionId === undefined) return ['calificacionId is required'];
    if (criterioEvaluacionId === undefined) return ['criterioEvaluacionId is required'];
    if (slideId === undefined) return ['slideId is required'];
    if (puntaje === undefined) return ['puntaje is required'];
    if (fragmentoAudioId === undefined) return ['fragmentoAudioId is required'];

    return [
      undefined,
      new CreateDetalleCalificacionDto(
        Number(calificacionId),
        Number(criterioEvaluacionId),
        Number(slideId),
        Number(puntaje),
        comentario ?? '',
        Number(fragmentoAudioId),
      ),
    ];
  }
}
