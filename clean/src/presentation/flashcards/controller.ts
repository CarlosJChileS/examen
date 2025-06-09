import { Request, Response } from 'express';
import { GetFlashcards } from '../../domain/use-cases/flashcards/get-flashcards';
import { FlashcardRepository } from '../../domain';

export class FlashcardsController {
  constructor(private readonly repository: FlashcardRepository) {}

  public getFlashcards = (req: Request, res: Response) => {
    new GetFlashcards(this.repository)
      .execute()
      .then(data => res.json(data))
      .catch(error => res.status(400).json({ error }));
  };
}
