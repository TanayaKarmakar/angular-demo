import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginService } from '../../services/login.service';

// export const roomGuard: CanActivateFn = (route, state) => {
//   return true;
// };

export class RoomGuard implements CanActivate {
  constructor(private loginService: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    //throw new Error('Method not implemented.');
    return this.loginService.isAdmin;
  }
}
