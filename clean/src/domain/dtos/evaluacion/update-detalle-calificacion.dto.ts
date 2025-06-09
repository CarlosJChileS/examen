export class UpdateDetalleCalificacionDto {
  private constructor(
    public readonly id: number,
    public readonly calificacionId?: number,
    public readonly criterioEvaluacionId?: number,
    public readonly slideId?: number,
    public readonly puntaje?: number,
    public readonly comentario?: string,
    public readonly fragmentoAudioId?: number,
  ) {}

  get values() {
    const obj: { [key: string]: any } = {};
    if (this.calificacionId !== undefined) obj.calificacionId = this.calificacionId;
    if (this.criterioEvaluacionId !== undefined) obj.criterioEvaluacionId = this.criterioEvaluacionId;
    if (this.slideId !== undefined) obj.slideId = this.slideId;
    if (this.puntaje !== undefined) obj.puntaje = this.puntaje;
    if (this.comentario !== undefined) obj.comentario = this.comentario;
    if (this.fragmentoAudioId !== undefined) obj.fragmentoAudioId = this.fragmentoAudioId;
    return obj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateDetalleCalificacionDto?] {
    const {
      id,
      calificacionId,
      criterioEvaluacionId,
      slideId,
      puntaje,
      comentario,
      fragmentoAudioId,
    } = props;

    if (id === undefined || isNaN(Number(id))) return ['id must be a valid number'];

    return [
      undefined,
      new UpdateDetalleCalificacionDto(
        Number(id),
        calificacionId !== undefined ? Number(calificacionId) : undefined,
        criterioEvaluacionId !== undefined ? Number(criterioEvaluacionId) : undefined,
        slideId !== undefined ? Number(slideId) : undefined,
        puntaje !== undefined ? Number(puntaje) : undefined,
        comentario,
        fragmentoAudioId !== undefined ? Number(fragmentoAudioId) : undefined,
      ),
    ];
  }
}
