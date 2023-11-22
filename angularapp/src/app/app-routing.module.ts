import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { FindplayerComponent } from './findplayer/findplayer.component';
import { DeleteComponent } from './delete/delete.component';
import { CreateComponent } from './create/create.component';
import { GetdetailComponent } from './getdetail/getdetail.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'getdetail',component:GetdetailComponent},
  {path:'findplayer',component:FindplayerComponent},
  {path:'delete',component:DeleteComponent},
  {path:'create',component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
