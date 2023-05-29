import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  chats: any[] = [];
  text = "";

  constructor(private socketService: SocketService) {}
  
  ngOnInit(){
    this.socketService.recivirMensaje().subscribe((message:any)=> {
      this.chats.push(message);
    })
  }

  enviarMensaje() {
    console.log(this.chats)
    let message = { text: this.text, messageType: 1 }
    this.socketService.enviarMensaje(message);
    
  }

  
}
