import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { HomeComponent } from './slides/home/home.component';
import { ProfileComponent } from './slides/profile/profile.component';
import { MessagesComponent } from './slides/messages/messages.component';
import { MenuComponent } from './slides/menu/menu.component';
import { SettingComponent } from './slides/setting/setting.component';


const routes: Routes = [
  { path: '', component: MainComponentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: ProfileComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'setting', component: SettingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
