import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  logs:string[] = []
  constructor() { }
  
  atack(atacker:string,reciver:string,damage:string|number):void{
    this.logs.unshift(`${this.getTime()}: O ${atacker} atacou o ${reciver} dando ${damage} de dano`)
  }
  morte(morto:string){
    this.logs.unshift(`${this.getTime()}: O ${morto} morreu.`)
  }
  gameOver(){
    this.logs.unshift(`${this.getTime()}: GAME OVER!`)
    this.logs = []
  }
  getTime(){
    return moment().format('H:mm:ss')
  }
}
