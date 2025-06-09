export class CreateParametrosIdealesDto {
  private constructor(
    public readonly claridadIdeal: number,
    public readonly velocidadIdeal: number,
    public readonly pausasIdeales: number,
    public readonly otrosParametros: string,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateParametrosIdealesDto?] {
    const { claridadIdeal, velocidadIdeal, pausasIdeales, otrosParametros } = props;
    if (claridadIdeal === undefined) return ['claridadIdeal is required'];
    if (velocidadIdeal === undefined) return ['velocidadIdeal is required'];
    if (pausasIdeales === undefined) return ['pausasIdeales is required'];

    return [
      undefined,
      new CreateParametrosIdealesDto(
        Number(claridadIdeal),
        Number(velocidadIdeal),
        Number(pausasIdeales),
        otrosParametros ?? '',
      ),
    ];
  }
}
