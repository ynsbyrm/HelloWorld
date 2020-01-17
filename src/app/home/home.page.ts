import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string;
  password: string;
  bgImage = "./././assets/icon/";
  usernameOpacityValue: Object;
  passwordOpacityValue: Object;

  constructor(private firebaseAuthentication: AngularFireAuth, private router: Router, private platform: Platform) {
    this.usernameOpacityValue = {'opacity': '50%'};
    this.passwordOpacityValue = {'opacity': '50%'};
    var today = new Date();
    if(today.getHours() >= 20){
      this.bgImage += "night.png";
    }else if(today.getHours() >= 17 && today.getHours() < 20){
      this.bgImage += "sunset.png";
    }else if(today.getHours() >= 11 && today.getHours() < 17){
      this.bgImage += "noon.png";
    }else if(today.getHours() > 5 && today.getHours() < 11){
      this.bgImage += "sunrise.png";
    }else{
      this.bgImage += "night.png";
    }

    this.platform.ready().then(() => {
      console.log("Platform is ready.");
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          
          console.log("Signed In");
          console.log("Display Name:" + firebase.auth().currentUser.displayName);
        } else {
          // No user is signed in.
          console.log("Not Signed In");
          //console.log("Display Name:" + this.firebaseAuthentication.auth.currentUser.displayName);
        }
      });
    })

    
  }
  
  ngOnInit() {
    console.log("Page 1 ngOnInit");
  }

  ionViewWillEnter(){
    
  }

  login(){
    console.log("Username:" + this.username + "\nPassword:" + this.password);

    console.log(this.firebaseAuthentication.auth.currentUser.displayName);
    console.log(this.firebaseAuthentication.auth.currentUser.email);
  }

  signInWithGoogle(){
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log(this.firebaseAuthentication.auth.currentUser.displayName);
    console.log(this.firebaseAuthentication.auth.currentUser.email);
  }

  changeUsernameOpacity(){
    if(this.usernameOpacityValue["opacity"] == '100%'){
      this.usernameOpacityValue = {'opacity': '50%'};
    }else{
      this.usernameOpacityValue["opacity"] = '100%';
    }
  }

  changePasswordOpacity(){
    if(this.passwordOpacityValue["opacity"] == '100%'){
      this.passwordOpacityValue = {'opacity': '50%'};
    }else{
      this.passwordOpacityValue["opacity"] = '100%';
    }
  }

}