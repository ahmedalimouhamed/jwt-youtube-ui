import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles:[]){
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  public getRoles(): [] | null{
    const roles = localStorage.getItem("roles");
    return roles ? JSON.parse(roles) : null;
  }

  public setToken(jwtToken: string){
    localStorage.setItem("jwtToken", JSON.stringify(jwtToken));
  }

  public getToken(): string | null{
    const jwtToken = localStorage.getItem("jwtToken");
    return jwtToken ? JSON.parse(jwtToken) : null;
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn():boolean{
    console.log('token : ', this.getToken());
    console.log('roles : ', this.getRoles());
    return !!this.getRoles() && !!this.getToken();
  }
}
