import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AuthdialogComponent } from '../components/authdialog/authdialog.component';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private dialog: MatDialog) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authService.isLoggedIn()) {
      this.openAuthDialog();
      return false;
    }
    return true;
  }

  openAuthDialog(): void {
    this.dialog.open(AuthdialogComponent, {
      backdropClass: 'dialog-backdrop',
    });
  }
}
