export class UpdateCalificacionDto {
  private constructor(
    public readonly id: number,
    public readonly grabacionId?: number,
    public readonly usuarioId?: number,
    public readonly puntajeGlobal?: number,
    public readonly observacionGlobal?: string,
    public readonly tipoCalificacion?: string,
    public readonly fecha?: Date,
    public readonly parametrosIdealesId?: number,
  ) {}

  get values() {
    const obj: { [key: string]: any } = {};
    if (this.grabacionId !== undefined) obj.grabacionId = this.grabacionId;
    if (this.usuarioId !== undefined) obj.usuarioId = this.usuarioId;
    if (this.puntajeGlobal !== undefined) obj.puntajeGlobal = this.puntajeGlobal;
    if (this.observacionGlobal !== undefined) obj.observacionGlobal = this.observacionGlobal;
    if (this.tipoCalificacion !== undefined) obj.tipoCalificacion = this.tipoCalificacion;
    if (this.fecha) obj.fecha = this.fecha;
    if (this.parametrosIdealesId !== undefined) obj.parametrosIdealesId = this.parametrosIdealesId;
    return obj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateCalificacionDto?] {
    const {
      id,
      grabacionId,
      usuarioId,
      puntajeGlobal,
      observacionGlobal,
      tipoCalificacion,
      fecha,
      parametrosIdealesId,
    } = props;

    if (id === undefined || isNaN(Number(id))) return ['id must be a valid number'];

    let parsedDate: Date | undefined = undefined;
    if (fecha) {
      parsedDate = new Date(fecha);
      if (parsedDate.toString() === 'Invalid Date') return ['fecha must be a valid date'];
    }

    return [
      undefined,
      new UpdateCalificacionDto(
        Number(id),
        grabacionId !== undefined ? Number(grabacionId) : undefined,
        usuarioId !== undefined ? Number(usuarioId) : undefined,
        puntajeGlobal !== undefined ? Number(puntajeGlobal) : undefined,
        observacionGlobal,
        tipoCalificacion,
        parsedDate,
        parametrosIdealesId !== undefined ? Number(parametrosIdealesId) : undefined,
      ),
    ];
  }
}
