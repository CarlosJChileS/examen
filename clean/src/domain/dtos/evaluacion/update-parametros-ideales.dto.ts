export class UpdateParametrosIdealesDto {
  private constructor(
    public readonly id: number,
    public readonly claridadIdeal?: number,
    public readonly velocidadIdeal?: number,
    public readonly pausasIdeales?: number,
    public readonly otrosParametros?: string,
  ) {}

  get values() {
    const obj: { [key: string]: any } = {};
    if (this.claridadIdeal !== undefined) obj.claridadIdeal = this.claridadIdeal;
    if (this.velocidadIdeal !== undefined) obj.velocidadIdeal = this.velocidadIdeal;
    if (this.pausasIdeales !== undefined) obj.pausasIdeales = this.pausasIdeales;
    if (this.otrosParametros !== undefined) obj.otrosParametros = this.otrosParametros;
    return obj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateParametrosIdealesDto?] {
    const { id, claridadIdeal, velocidadIdeal, pausasIdeales, otrosParametros } = props;
    if (id === undefined || isNaN(Number(id))) return ['id must be a valid number'];
    return [
      undefined,
      new UpdateParametrosIdealesDto(
        Number(id),
        claridadIdeal !== undefined ? Number(claridadIdeal) : undefined,
        velocidadIdeal !== undefined ? Number(velocidadIdeal) : undefined,
        pausasIdeales !== undefined ? Number(pausasIdeales) : undefined,
        otrosParametros,
      ),
    ];
  }
}
