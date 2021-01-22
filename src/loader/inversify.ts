import { Container } from 'inversify';
import { UserService } from '../service/user/userService';

export function getContainer(): Container {
  const container = new Container({ skipBaseClassChecks: true });
  container.bind<UserService>(UserService).to(UserService);
  return container;
}
