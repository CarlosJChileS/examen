import express from 'express';
import path from 'path';
import { FlashcardService } from './flashcard.service';
import { createFlashcardRouter } from './flashcard.router';

const app = express();
app.use(express.json());

const service = new FlashcardService(path.join(__dirname, '../data/flashcards.json'));
app.use('/flashcards', createFlashcardRouter(service));

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
app.listen(PORT, () => {
  console.log(`Auxiliary service running on port ${PORT}`);
});
