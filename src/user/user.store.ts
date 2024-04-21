import { User } from './user';

const getRandomElement = <T = any>(a: T[]): T => a[Math.random() * a.length | 0];

export class UserStore {
  private id = 0;
  private rows: User[] = [];

  constructor() {
    this.seed();
  }

  getRows() {
    return this.rows;
  }

  generateId() {
    return ++this.id;
  }

  private seed() {
    const firstNames = [
      'Andi', 'Raphael', 'Luella', 'Porter', 'Alexia',
      'Eden', 'Jazlyn', 'Lionel', 'Morgan', 'Emiliano',
    ];
    const lastNames = [
      'Cobb', 'Weber', 'Moss', 'Snow', 'Maxwell',
      'Villarreal', 'Heath', 'Ryan', 'Robertson', 'Sweeney',
    ];

    while (this.rows.length < 50) {
      const id = this.generateId();
      this.rows.push({
        id,
        firstName: getRandomElement(firstNames),
        lastName: getRandomElement(lastNames),
        role: id === 1 ? 'admin' : 'user',
        password: '123456',
      });
    }
  }
}
