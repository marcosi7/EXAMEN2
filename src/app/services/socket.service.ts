import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket = io("http://localhost:3000/");

  constructor() { 
    this.socket.emit("verificar");
    this.bienvenida();
  }

  bienvenida(){

  }

  enviarMensaje(msg: any) {
    this.socket.emit("response", msg);
    
  }

  enviarArray(habil: any) {
    this.socket.emit("reArray", habil);
    
  }

  recivirMensaje = (): Observable<any> => {
    return new Observable((observer) => {
      this.socket.on("response", (message) => {
        message.messageType = 2;
        observer.next(message);
      });
    });
  }

  recivirArray = (): Observable<any> => {
    return new Observable((observer) => {
      this.socket.on("array", (resg) => {
        observer.next(resg);
      });
    });
  }

}
