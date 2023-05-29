import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor() { }

  socket = io("http://localhost:3000/");

  enviarMensaje(msg: any) {
    console.log(msg)
    this.socket.emit("message", msg);
    
  }

  recivirMensaje = (): Observable<any> => {
    return new Observable((observer) => {
      this.socket.on("message", (message) => {
        observer.next(message);
      });
    });
  }

}
