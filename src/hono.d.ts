import { UserRepository } from './user/user.repository';
import { Session } from 'hono-sessions';

declare module 'hono' {
  interface ContextVariableMap {
    session: Session;
    session_key_rotation: boolean;
    userRepository: UserRepository;
  }
}
