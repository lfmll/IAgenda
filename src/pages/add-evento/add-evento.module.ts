import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEventoPage } from './add-evento';

@NgModule({
  declarations: [
    AddEventoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEventoPage),
  ],
})
export class AddEventoPageModule {}
