import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  logs:string[] = []
  constructor() { }
  
  monsterAtack(atacker:string,attack:number, effective:number):void{
    this.logs.unshift(`${this.getTime()}: O ${atacker} atacou você dando ${effective} de dano. (${attack-effective} 🛡️) `)
  }
  personAtack(reciver:string,attack:number, effective:number):void{
    this.logs.unshift(`${this.getTime()}: Você atacou o ${reciver} dando ${effective} de dano. (${attack-effective} 🛡️)`)
  }
  personHeal(){
    this.logs.unshift(`${this.getTime()}: Você se curou.`)

  }
  morte(morto:string){
    this.logs.unshift(`${this.getTime()}: O ${morto} foi derrotado.`)
  }
  dropPotion(morto:string){
    this.logs.unshift(`${this.getTime()}: O ${morto} deixou uma poção cair.`)
  }
  rest(){
    this.logs.unshift(`${this.getTime()}: Você descansou por 2 rounds, recuperando toda sua vida.`)
  }
  nextFloor(floor:number){
    this.logs.unshift(`${this.getTime()}: Você alcançou o ${floor}º`)

  }
  gameOver(){
    this.logs.unshift(`${this.getTime()}: GAME OVER!`)
    this.logs = []
  }
  getTime(){
    return moment().format('H:mm:ss')
  }

}
