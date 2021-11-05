import { Component, VERSION } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular on fire';

  email: string;
  password: string;


  constructor (public authService: AuthService){}

  loginWithEmail(){
    this.authService.loginWithEmail(this.email, this.password);
    this.email = this.password = "";
  }

  loginWithGoogle(){
    this.authService.loginWithGoogle();        
  }

  logout(){
    this.authService.logout();
  }



}
