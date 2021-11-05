import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AuthService } from './auth.service';

import { RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { FirelistComponent } from './firelist/firelist.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: IndexComponent },
      { path: 'firelist', component: FirelistComponent },
    ]),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBdlOKThg1G23GnHURjoT1EuM1JdS507tM',
      authDomain: 'victhoria.firebaseapp.com',
      projectId: 'victhoria',
      storageBucket: 'victhoria.appspot.com',
      messagingSenderId: '568112119823',
      appId: '1:568112119823:web:6de7b3eb37f8a05056237a',
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    IndexComponent,
    FirelistComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AuthService],
})
export class AppModule {}
