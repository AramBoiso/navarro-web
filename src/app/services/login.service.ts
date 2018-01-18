import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  email:any;
  password:any;
  autheticated:boolean;

  user:Observable<firebase.User>;

  constructor(public af:AngularFireAuth) { 
    
    this.af.authState.subscribe(
      (auth) =>{
        if(auth != null){
          this.user = this.af.authState;
          this.autheticated = true;
        }
      }
    )  

  }

  login(){
    this.af.auth.signInWithEmailAndPassword(this.email, this.password)
     .catch(error =>{
       console.log(error);
     })
     alert("Bienvenido ADMIN");
    this.autheticated = true;

  }

  logOut(){
    this.af.auth.signOut();
    this.autheticated = false;
    this.email = null;
    this.password = null;
  }

}
