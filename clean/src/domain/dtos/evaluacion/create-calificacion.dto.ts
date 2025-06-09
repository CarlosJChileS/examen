export class CreateCalificacionDto {
  private constructor(
    public readonly grabacionId: number,
    public readonly usuarioId: number,
    public readonly puntajeGlobal: number,
    public readonly observacionGlobal: string,
    public readonly tipoCalificacion: string,
    public readonly fecha: Date,
    public readonly parametrosIdealesId?: number,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateCalificacionDto?] {
    const {
      grabacionId,
      usuarioId,
      puntajeGlobal,
      observacionGlobal,
      tipoCalificacion,
      fecha,
      parametrosIdealesId,
    } = props;

    if (grabacionId === undefined) return ['grabacionId is required'];
    if (usuarioId === undefined) return ['usuarioId is required'];
    if (puntajeGlobal === undefined) return ['puntajeGlobal is required'];
    if (!tipoCalificacion) return ['tipoCalificacion is required'];
    if (!fecha) return ['fecha is required'];

    const parsedDate = new Date(fecha);
    if (parsedDate.toString() === 'Invalid Date') return ['fecha must be a valid date'];

    return [
      undefined,
      new CreateCalificacionDto(
        Number(grabacionId),
        Number(usuarioId),
        Number(puntajeGlobal),
        observacionGlobal ?? '',
        tipoCalificacion,
        parsedDate,
        parametrosIdealesId !== undefined ? Number(parametrosIdealesId) : undefined,
      ),
    ];
  }
}
