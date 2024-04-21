import { UserRepository } from './user/user.repository';

declare module 'hono' {
  interface ContextVariableMap {
    userRepository: UserRepository;
  }
}
