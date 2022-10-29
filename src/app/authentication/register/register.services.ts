import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.services';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private authService: AuthService) { }

  postUserData(fromUserdata: any): Observable<any>{
    var response$ = this.authService.registerUser(fromUserdata)
    return response$;
  }
  
}
