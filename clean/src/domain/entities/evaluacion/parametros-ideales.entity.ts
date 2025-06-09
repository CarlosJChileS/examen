export class ParametrosIdeales {
  constructor(
    public readonly id: number,
    public readonly claridadIdeal: number,
    public readonly velocidadIdeal: number,
    public readonly pausasIdeales: number,
    public readonly otrosParametros: string,
  ) {}

  static fromObject(obj: Record<string, any>): ParametrosIdeales {
    const { id, claridadIdeal, velocidadIdeal, pausasIdeales, otrosParametros } = obj;
    if (id === undefined) throw 'id is required';
    if (claridadIdeal === undefined) throw 'claridadIdeal is required';
    if (velocidadIdeal === undefined) throw 'velocidadIdeal is required';
    if (pausasIdeales === undefined) throw 'pausasIdeales is required';
    const otros = otrosParametros ?? '';
    return new ParametrosIdeales(id, claridadIdeal, velocidadIdeal, pausasIdeales, otros);
  }
}
