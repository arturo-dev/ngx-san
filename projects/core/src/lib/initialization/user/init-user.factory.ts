import { InitUserService } from './init-user.service';

export function appInitializeUser(initService: InitUserService) {
  return () => initService.initialize();
}
