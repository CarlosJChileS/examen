import fs from 'fs';
import path from 'path';
import { Flashcard } from '../domain/entities/flashcards/flashcard.entity';

export interface FlashcardData {
  pregunta: string;
  respuesta: string;
  categorias?: string[];
}

export class FlashcardService {
  private flashcards: Flashcard[] = [];
  private nextId = 1;
  private readonly file: string;

  constructor(filePath: string) {
    this.file = path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);
    this.load();
  }

  private load() {
    if (!fs.existsSync(this.file)) return;
    try {
      const data = JSON.parse(fs.readFileSync(this.file, 'utf8'));
      if (Array.isArray(data)) {
        this.flashcards = data.map(obj => Flashcard.fromObject(obj));
        const ids = this.flashcards.map(f => f.id);
        if (ids.length) this.nextId = Math.max(...ids) + 1;
      }
    } catch {
      this.flashcards = [];
    }
  }

  private save() {
    const data = this.flashcards.map(f => ({
      id: f.id,
      pregunta: f.pregunta,
      respuesta: f.respuesta,
      categorias: f.categorias
    }));
    fs.writeFileSync(this.file, JSON.stringify(data, null, 2));
  }

  getAll(): Flashcard[] {
    return [...this.flashcards];
  }

  create(data: FlashcardData): Flashcard {
    const categorias = Array.isArray(data.categorias) ? data.categorias : [];
    const flashcard = new Flashcard(this.nextId++, data.pregunta, data.respuesta, categorias);
    this.flashcards.push(flashcard);
    this.save();
    return flashcard;
  }
}
