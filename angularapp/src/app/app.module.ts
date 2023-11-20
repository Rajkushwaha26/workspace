import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalyerComponent } from './palyer/palyer.component';

@NgModule({
  declarations: [
    AppComponent,
    PalyerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
