import { Router } from 'express';
import path from 'path';
import { CriterioJsonDatasource } from '../../infrastructure/datasource/criterio.json.datasource';
import { CriterioEvaluacionRepositoryImpl } from '../../infrastructure/repositories/criterio-evaluacion.repository.impl';
import { CriteriosController } from './controller';

export class CriteriosRoutes {
  static get routes(): Router {
    const router = Router();
    const filePath = path.join(__dirname, '../../data/criterios.json');
    const datasource = new CriterioJsonDatasource(filePath);
    const repository = new CriterioEvaluacionRepositoryImpl(datasource);
    const controller = new CriteriosController(repository);

    router.get('/', controller.getCriterios);
    return router;
  }
}
