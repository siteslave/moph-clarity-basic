import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Injectable()
export class SocketService {

  constructor(private socket: Socket) { }

  sendMessage(msg: string) {
    this.socket.emit("message", msg);
  }

  sendWelcome(msg: string) {
    this.socket.emit("welcome", msg);
  }

  getMessage() {
    return this.socket
      .fromEvent("message")
      .map(data => data);
  }


}
