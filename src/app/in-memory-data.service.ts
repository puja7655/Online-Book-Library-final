import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const bookDetail = [
      {
        id: 1,
        bookName: 'Alchemist',
        description: 'This story, dazzling in its powerful simplicity and inspiring wisdom, is about an Andalusian shepherd boy .',
        count: 2,
        authorName: 'paulo cohelo'
      },
      {
        id: 2,
        bookName: 'On the origin of species',
        description: 'This piece of work recounts his ideas on the process of evolution of living beings.',
        count: 3,
        authorName: 'charles darwin'
      },
      {
        id: 3,
        bookName: 'The discovery of India',
        description: 'The book was written during Nehru’s four years of confinement to solitude in prison',
        count: 3,
        authorName: 'jawaharlal nehru'
      }
    ]
    return { bookDetail };
  }
  constructor() { }
}
