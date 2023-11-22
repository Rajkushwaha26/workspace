import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { FindplayerComponent } from './findplayer/findplayer.component';
import { DeleteComponent } from './delete/delete.component';
import { GetdetailComponent } from './getdetail/getdetail.component';
import { AddInfoComponent } from './add-info/add-info.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'getdetail',component:GetdetailComponent},
  {path:'findplayer',component:FindplayerComponent},
  {path:'delete',component:DeleteComponent},
  {path:'add-info',component:AddInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
