import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MygoService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(`${environment.mygoApi}user/authenticate`, {
      username,
      password,
    });
  }

  verifyToken() {
    return this.http.get(`${environment.mygoApi}user/verifyToken`);
  }

  register(name: string, email: string, username: string, password: string) {
    return this.http.post(`${environment.mygoApi}user/register`, {
      name,
      email,
      username,
      password,
    });
  }

  forgotPassword(email: string) {
    return this.http.post(`${environment.mygoApi}user/forgotpassword`, {
      email,
    });
  }

  changePassword(hash: string, password: string, confirmPassword: string) {
    return this.http.post(`${environment.mygoApi}user/changepassword`, {
      hash,
      password,
      confirmPassword,
    });
  }
}
