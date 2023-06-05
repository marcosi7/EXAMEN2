import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  chats: any[] = [];
  text = "";

  cookie = this.cookieService.get('usuario')

  public myInput = '';
  public showIcon = false;

  constructor(private socketService: SocketService, private cookieService: CookieService) {}
  
  ngOnInit(){

    this.socketService.recivirMensaje().subscribe((message:any)=> {
      this.chats.push(message);

    })

    this.socketService.recivirArray().subscribe((resg:any)=> {
      if (resg=true) {
        this.chats.forEach((chat, index) => {
          console.log("Eliminando en 2 segundos")
    
          setTimeout(() => 
          {
            this.chats.splice(0, 1);
    
          }, 
          2000 * (index + 1));
        });
      } else {
        console.log('myBoolean es falso');
      }
    })

  }

  Bienvenida() {

  }

  eliminarChats() {
    let habil = true;
    this.socketService.enviarArray(habil)

  }

  enviarMensaje() {

    let message = { usuario:this.cookie, text: this.text, messageType: 1 }

    this.chats.push(message);

    this.socketService.enviarMensaje(message);

    console.log(this.chats)
  }

  
}
