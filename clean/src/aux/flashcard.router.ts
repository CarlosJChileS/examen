import { Router } from 'express';
import { FlashcardService } from './flashcard.service';

export function createFlashcardRouter(service: FlashcardService): Router {
  const router = Router();

  router.get('/', (req, res) => {
    res.json(service.getAll());
  });

  router.post('/', (req, res) => {
    const { pregunta, respuesta, categorias } = req.body;
    if (!pregunta || !respuesta) {
      return res.status(400).json({ error: 'pregunta and respuesta are required' });
    }
    const flashcard = service.create({ pregunta, respuesta, categorias });
    res.status(201).json(flashcard);
  });

  return router;
}
