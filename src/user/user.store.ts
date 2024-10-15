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

    this.rows.push({
      id: this.generateId(),
      email: 'admin@mail.com',
      firstName: 'Super',
      lastName: 'Admin',
      role: 'admin',
      password: '123456',
    });
    while (this.rows.length < 50) {
      const firstName = getRandomElement(firstNames);
      const lastName = getRandomElement(lastNames);
      this.rows.push({
        id: this.generateId(),
        email: `${firstName}.${lastName}@mail.com`.toLowerCase(),
        firstName,
        lastName,
        role: 'user',
        password: '123456',
      });
    }
  }
}
