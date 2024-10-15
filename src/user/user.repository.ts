import { User } from './user';
import { UserStore } from './user.store';

type FetchParams = {
  offset?: number;
  limit?: number;
};

export class UserRepository {
  private store = new UserStore();

  async fetchAll({ offset = 0, limit }: FetchParams): Promise<User[]> {
    const rows = this.store.getRows().filter((_, i) => i >= offset);
    if (limit && rows.length > limit) {
      rows.length = limit;
    }

    return rows;
  }

  async countAll(): Promise<number> {
    return this.store.getRows().length;
  }

  async fetchOne(id: number): Promise<User | null> {
    return this.store.getRows().find(u => u.id === id) ?? null;
  }

  async fetchOneByEmail(email: string): Promise<User | null> {
    return this.store.getRows().find(u => u.email === email) ?? null;
  }
}
