import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  
  constructor(private cookieService: CookieService) { }
  
  user = "";

  registro(){
    
    if (this.user != "") {
        
        this.cookieService.set('usuario', this.user);

    }
    else {
        alert("Ingrese un nombre de usuario:");
    }
  }

}
