import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlayerComponent } from './player/player.component';
import { FindplayerComponent } from './findplayer/findplayer.component';
import { DeleteComponent } from './delete/delete.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'player',component:PlayerComponent},
  {path:'findplayer',component:FindplayerComponent},
  {path:'delete',component:DeleteComponent},
  {path:'create',component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
