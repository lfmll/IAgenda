import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import * as moment from 'moment';


/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
	eventSource=[];
	viewTitle:string;
	selectedDay=new Date();

	calendar={
		mode:'month',
		currentDate:this.selectedDay
	}

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	private modalCtrl: ModalController,
  	private alertCtrl: AlertController) {
  }

  //Metodos
  addEvento(){
  	let modelo=this.modalCtrl.create('AddEventoPage',{selectedDay:this.selectedDay});
  	modelo.present();
  	modelo.onDidDismiss(data=>{
  		if (data) {
  			let eventData=data;
  			let events=this.eventSource;
  			events.push(eventData);
  			this.eventSource=[];
  			setTimeout(()=>{
  				this.eventSource=events;
  			});
  		}
  	});
  }

  onViewTitleChanged(title){
  	this.viewTitle=title;
  }
  onTimeSelected(ev){
  	this.selectedDay=ev.selectedTime;
  }
  onEventSelected(event){
  	let alert=this.alertCtrl.create({
  		title:''+event.title,
  		buttons: ['OK']
  	});
  	alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

}
