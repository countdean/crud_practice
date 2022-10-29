import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleTokenService {
  token_key = 'auth-token';
  user_key = 'auth-use';
  token_expire_key = 'token-expire';

  constructor() { }

  saveToken(token: string) {
    localStorage.removeItem(this.token_key);
    localStorage.setItem(this.token_key, token);
  }
  getToken(){
    return localStorage.getItem(this.token_key);
  }

  saveUser(user: any) {
    localStorage.removeItem(this.user_key);
    localStorage.setItem(this.user_key, JSON.stringify(user));
    localStorage.removeItem(this.token_expire_key);
    localStorage.setItem(this.token_expire_key, user.user.created_at);
  }
}
