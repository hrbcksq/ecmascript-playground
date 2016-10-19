import './polyfills';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import {ItemsService} from "../services/item.service";

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent ],
  bootstrap : [ AppComponent ],
  providers : [ItemsService]  
})
export class AppModule { }