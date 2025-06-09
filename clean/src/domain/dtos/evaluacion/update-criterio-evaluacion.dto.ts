export class UpdateCriterioEvaluacionDto {
  private constructor(
    public readonly id: number,
    public readonly nombre?: string,
    public readonly descripcion?: string,
    public readonly peso?: number,
  ) {}

  get values() {
    const obj: { [key: string]: any } = {};
    if (this.nombre !== undefined) obj.nombre = this.nombre;
    if (this.descripcion !== undefined) obj.descripcion = this.descripcion;
    if (this.peso !== undefined) obj.peso = this.peso;
    return obj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateCriterioEvaluacionDto?] {
    const { id, nombre, descripcion, peso } = props;
    if (id === undefined || isNaN(Number(id))) return ['id must be a valid number'];
    return [
      undefined,
      new UpdateCriterioEvaluacionDto(
        Number(id),
        nombre,
        descripcion,
        peso !== undefined ? Number(peso) : undefined,
      ),
    ];
  }
}
