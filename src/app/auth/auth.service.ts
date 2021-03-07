import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthData } from './auth-data.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material'

@Injectable({providedIn: 'root'})
export class AuthService{

  isAuthenticated = false;
  private token : string;
  private tokenTimer : any;
  private authStatusListener  = new Subject<boolean>();

  private user= [];
  private userUpdated = new Subject<any>();


  constructor(private http: HttpClient, private router: Router , private snackBar : MatSnackBar){}

  getToken(){
    return this.token;
  }

  getIsAuth(){
    return this.isAuthenticated;
  }


  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  createUser(name: string ,email: string ,password: string){
    const authData  = {name:name,email:email , password:password };
    this.http.post("https://examenangularmongokouassi.herokuapp.com/api/user/signup",authData)
      .subscribe(response =>{
        console.log(response);
      });

  }

  login(email: string, password){
    const authData :AuthData = {name: null , email: email , password: password};
    this.http.post<{token: string, expiresIn: number, role :string , message: string}>("https://examenangularmongokouassi.herokuapp.com/api/user/login",authData)
      .subscribe(response =>{
        const token= response.token;
        this.token=token;
        const message = response.message;
        const action = 'Close'
        this.snackBar.open(message , action);
        if(token){
          const expiresInDuration = response.expiresIn;
       
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          console.log(expirationDate,email);

          this.saveAuthData(token, expirationDate );

          this.router.navigate(['/main']);
        
        }
      });
  }

  autoAuthUser(){
    const authInformation = this.getAuthData();
    if(!authInformation){
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    console.log(authInformation,expiresIn)
    if(expiresIn > 0){
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn /1000);
      this.authStatusListener.next(true);
    }
  }

  logout(){
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/login']);

  }

  private setAuthTimer(duration : number){
    console.log("setting timer " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date){
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
  }

  private clearAuthData(){
    localStorage.removeItem("token");
    localStorage.removeItem("expiration")
  }


  private getAuthData(){
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    if(!token || !expirationDate){
      return;
    }
    return{
      token: token,
      expirationDate : new Date(expirationDate)
    }
  }

  getUserDatas(id: string){
    return this.http.get<{_id: string , name: string, email: string, password: string}>
    ('https://examenangularmongokouassi.herokuapp.com/api/user/' +id);
  }


  getUser() {
    this.http.get<{message: string, users: any}>('https://examenangularmongokouassi.herokuapp.com/api/user/getUserData')
    .pipe(map(userData => {
     return userData.users.map(user=>{
       return{

        name: user.name,
      
        email: user.email,
        password: user.password,
      
        id: user._id
       }
     })
    }))
    .subscribe((transformedSuppliers)=>{
      this.user = transformedSuppliers;
      this.userUpdated.next([...this.user])
    });

  }

  getUserUpdateListener() {
    return this.userUpdated.asObservable();
  }

  updateUser(id: string ,  name: string, email: string, password: string){
    const user  ={id:id , name:name , email:email, password:password };
    this.http
             .put('https://examenangularmongokouassi.herokuapp.com/api/user/' +id , user)
             .subscribe(response => {
               const updatedUser = [...this.user];
               const oldUserIndex = updatedUser.findIndex(s => s.id === user.id);
               updatedUser[oldUserIndex] = user;
               this.userUpdated.next([...this.user]);
               this.router.navigate(["/settings/APharmasistAccounts"]);
             });
  }

  deleteUser(userId: string) {
    this.http.delete('https://examenangularmongokouassi.herokuapp.com/api/user/' +userId)
      .subscribe(() => {
        const updatedUser = this.user.filter(user => user.id !== userId);
        this.user = updatedUser;
        this.userUpdated.next([...this.user])
      });
  }








}
