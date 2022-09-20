import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { HomeComponent } from './slides/home/home.component';
import { ProfileComponent } from './slides/profile/profile.component';
import { MessagesComponent } from './slides/messages/messages.component';
import { MenuComponent } from './slides/menu/menu.component';
import { SettingComponent } from './slides/setting/setting.component';

import { FbStorageUiComponent } from './components/fb-storage-ui/fb-storage-ui.component';
import { TaskListComponent } from './components/fb-cloudstorare-ui/task-list/task-list.component';
import { FbRtdbNavUiComponent } from './components/fb-rtdb-nav-ui/fb-rtdb-nav-ui.component';
const routes: Routes = [
  { path: '', component: CheckoutComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'summitForm', component: MainComponentComponent },

  { path: 'home', component: HomeComponent },
  { path: 'login', component: ProfileComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'setting', component: SettingComponent },

  { path: 'fstorage', component: FbStorageUiComponent },
  { path: 'fcloud', component: TaskListComponent },
  { path: 'frtdb', component: FbRtdbNavUiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
