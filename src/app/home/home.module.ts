import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [HomeComponent],
  exports:[HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    // AngularFireModul
  ]
})
export class HomeModule { }
