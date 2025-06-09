export class CriterioEvaluacion {
  constructor(
    public readonly id: number,
    public readonly nombre: string,
    public readonly descripcion: string,
    public readonly peso: number,
  ) {}

  static fromObject(obj: Record<string, any>): CriterioEvaluacion {
    const { id, nombre, descripcion, peso } = obj;
    if (id === undefined) throw 'id is required';
    if (!nombre) throw 'nombre is required';
    if (peso === undefined) throw 'peso is required';
    const desc = descripcion ?? '';
    return new CriterioEvaluacion(id, nombre, desc, peso);
  }
}
