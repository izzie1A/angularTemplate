import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';

// firestore
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';

// material
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

// component 
import { MainComponentComponent } from './components/main-component/main-component.component';
import { NgRtdbComponentComponent } from './components/ng-rtdb-component/ng-rtdb-component.component';
import { HomeComponent } from './slides/home/home.component';
import { SettingComponent } from './slides/setting/setting.component';
import { ProfileComponent } from './slides/profile/profile.component';
import { MessagesComponent } from './slides/messages/messages.component';
import { MenuComponent } from './slides/menu/menu.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';

import { providePerformance,getPerformance } from '@angular/fire/performance';
import { FbRtdbNavUiComponent } from './components/fb-rtdb-nav-ui/fb-rtdb-nav-ui.component';
import { MainDisplayBlockComponent } from './components/main-display-block/main-display-block.component';
import { TaskComponent } from './components/fb-cloudstorare-ui/task/task.component';
import { TaskListComponent } from './components/fb-cloudstorare-ui/task-list/task-list.component';
import { TaskDialogComponent } from './components/fb-cloudstorare-ui/task-dialog/task-dialog.component';
import { TaskFlexComponent } from './components/fb-cloudstorare-ui/task-flex/task-flex.component';
import { ImgSlideshowComponent } from './components/img-slideshow/img-slideshow.component';
import { TaskGridComponent } from './components/fb-cloudstorare-ui/task-grid/task-grid.component';
import { TaskDetailComponent } from './components/fb-cloudstorare-ui/task-detail/task-detail.component';
import { FbStorageUiComponent } from './components/fb-storage-ui/fb-storage-ui.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FbCloudstoreUiComponent } from './components/fb-cloudstore-ui/fb-cloudstore-ui.component';
import { CardComponentComponent } from './components/card-component/card-component.component';
// component


@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    NgRtdbComponentComponent,
    HomeComponent,
    SettingComponent,
    ProfileComponent,
    MessagesComponent,
    MenuComponent,
    MainButtonComponent,
    NavBarComponent,
    LoginComponent,
    FbRtdbNavUiComponent,
    MainDisplayBlockComponent,
    TaskComponent,
    TaskListComponent,
    TaskDialogComponent,
    ImgSlideshowComponent,
    TaskFlexComponent,
    TaskGridComponent,
    TaskDetailComponent,
    FbStorageUiComponent,
    CartComponent,
    CheckoutComponent,
    FbCloudstoreUiComponent,
    CardComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatSelectModule,
    provideAnalytics(() => getAnalytics()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    MatInputModule,
    MatTreeModule,
    MatIconModule,
    MatProgressBarModule,
    MatToolbarModule,
    DragDropModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule,
    MatStepperModule,
    MatSlideToggleModule,
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
