import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MyserviceService } from './myservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
constructor(public auth: MyserviceService, public router:Router){}
  canActivate(): boolean {
    console.log("vuuuuu");
    if (!this.auth.isAuthenticated()) {
      
    //this.router.navigate(['users']);
    console.log('You are not authrised to view this page');
    return false;
    }
    
    return true;
    }
}
