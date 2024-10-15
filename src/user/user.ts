export type UserRole = 'guest' | 'user' | 'admin';

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: UserRole;
};
