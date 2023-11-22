import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TeamComponent } from './team/team.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DeleteComponent } from './delete/delete.component';
import { FindplayerComponent } from './findplayer/findplayer.component';

import { RegisterComponent } from './services/register/register.component';
import { GetdetailComponent } from './getdetail/getdetail.component';
import { AddInfoComponent } from './add-info/add-info.component';


@NgModule({
  declarations: [
    AppComponent,
  
    TeamComponent,
    LoginComponent,
    DeleteComponent,
    FindplayerComponent,
   
    RegisterComponent,
    GetdetailComponent,
    AddInfoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
