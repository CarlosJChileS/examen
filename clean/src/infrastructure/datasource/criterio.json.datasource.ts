import fs from 'fs';
import path from 'path';
import { CriterioEvaluacion, CriterioEvaluacionDatasource } from '../../domain';

export class CriterioJsonDatasource implements CriterioEvaluacionDatasource {
  private criterios: CriterioEvaluacion[] = [];
  private nextId = 1;

  constructor(private readonly filePath: string) {
    this.loadData();
  }

  private loadData() {
    try {
      const absPath = path.isAbsolute(this.filePath)
        ? this.filePath
        : path.join(process.cwd(), this.filePath);
      if (fs.existsSync(absPath)) {
        const data = JSON.parse(fs.readFileSync(absPath, 'utf8'));
        if (Array.isArray(data)) {
          this.criterios = data.map((obj: any) => CriterioEvaluacion.fromObject(obj));
          const ids = this.criterios.map(c => c.id);
          if (ids.length) this.nextId = Math.max(...ids) + 1;
        }
      }
    } catch (error) {
      console.error('Failed to load criterios JSON:', error);
      this.criterios = [];
    }
  }

  private saveData() {
    try {
      const absPath = path.isAbsolute(this.filePath)
        ? this.filePath
        : path.join(process.cwd(), this.filePath);
      const data = this.criterios.map(c => ({
        id: c.id,
        nombre: c.nombre,
        descripcion: c.descripcion,
        dificultad: c.dificultad,
      }));
      fs.writeFileSync(absPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
      console.error('Failed to save criterios JSON:', error);
    }
  }

  async create(criterio: CriterioEvaluacion): Promise<CriterioEvaluacion> {
    const newCriterio = new CriterioEvaluacion(
      this.nextId++,
      criterio.nombre,
      criterio.descripcion,
      criterio.dificultad
    );
    this.criterios.push(newCriterio);
    this.saveData();
    return newCriterio;
  }

  async getAll(): Promise<CriterioEvaluacion[]> {
    return [...this.criterios];
  }

  async findById(id: number): Promise<CriterioEvaluacion> {
    const criterio = this.criterios.find(c => c.id === id);
    if (!criterio) throw `Criterio with id ${id} not found`;
    return criterio;
  }

  async update(criterio: CriterioEvaluacion): Promise<CriterioEvaluacion> {
    const index = this.criterios.findIndex(c => c.id === criterio.id);
    if (index === -1) throw `Criterio with id ${criterio.id} not found`;
    this.criterios[index] = criterio;
    this.saveData();
    return criterio;
  }

  async deleteById(id: number): Promise<CriterioEvaluacion> {
    const index = this.criterios.findIndex(c => c.id === id);
    if (index === -1) throw `Criterio with id ${id} not found`;
    const [deleted] = this.criterios.splice(index, 1);
    this.saveData();
    return deleted;
  }
}
