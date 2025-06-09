import { Request, Response } from 'express';
import { GetCriterios } from '../../domain/use-cases/criterio-evaluacion/get-criterios';
import { CriterioEvaluacionRepository } from '../../domain';

export class CriteriosController {
  constructor(private readonly repository: CriterioEvaluacionRepository) {}

  public getCriterios = (req: Request, res: Response) => {
    new GetCriterios(this.repository)
      .execute()
      .then(data => res.json(data))
      .catch(error => res.status(400).json({ error }));
  };
}
