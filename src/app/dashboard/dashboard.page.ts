import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private firebaseAuthentication: AngularFireAuth) { }

  ngOnInit() {
    console.log("Page 2 ngOnInit");
  }

  ionViewWillEnter(){
    try{
      this.firebaseAuthentication.auth.currentUser
      console.log("Page 2 ionViewDidEnter Inside of try");
      console.log("Page 2 Display Name:" + this.firebaseAuthentication.auth.currentUser.displayName);
    }catch(Exception){
      console.log("Page 2 Inside of catch ");
    }
  }

}
