export class CreateCriterioEvaluacionDto {
  private constructor(
    public readonly nombre: string,
    public readonly descripcion: string,
    public readonly peso: number,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateCriterioEvaluacionDto?] {
    const { nombre, descripcion, peso } = props;
    if (!nombre) return ['nombre is required'];
    if (peso === undefined) return ['peso is required'];
    return [undefined, new CreateCriterioEvaluacionDto(nombre, descripcion ?? '', Number(peso))];
  }
}
