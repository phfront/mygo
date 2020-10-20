import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { MygoService } from '../shared/services/mygo.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private mygoService: MygoService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.mygoService.verifyToken().pipe(
      map((res: any) => {
        if (res.success) {
          return true;
        } else {
          this.router.navigate(['/']);
          return false;
        }
      }),
      catchError((err) => {
        this.router.navigate(['/']);
        return of(false);
      })
    );
  }
}
