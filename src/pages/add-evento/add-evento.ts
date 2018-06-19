import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';


/**
 * Generated class for the AddEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-evento',
  templateUrl: 'add-evento.html',
})
export class AddEventoPage {
	minDate=new Date().toISOString();

  constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl:ViewController) {
  	let preselectedDate=moment(this.navParams.get('selectedDay')).format();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventoPage');
  }

  save(){
  	//this.viewCtrl.dismiss(this.evento);
  }
  cancel(){
  	this.viewCtrl.dismiss();
  }

}
