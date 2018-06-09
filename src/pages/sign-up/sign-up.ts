import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AngularFireAuth} from 'angularfire2/auth';


/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

	email: string;
	password: string;

  constructor(public navCtrl: NavController, 
  			public navParams: NavParams,
  			private angularFire: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  //Crear Cuenta
  createAccount(){
  	this.angularFire.auth.createUserWithEmailAndPassword(this.email,this.password);
  }
}
