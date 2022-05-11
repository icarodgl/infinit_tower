import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  private _floor:number = 0;
  private _round:number = 0;
  floor$:Subject<number> = new Subject<number>()
  round$:Subject<number> = new Subject<number>()
  
  constructor() {
    this.floor$.subscribe(f=>this._floor=f)
    this.round$.subscribe(r=>this._round=r)
   }

  nextFloor(){
    this.floor$.next(this._floor+1)
  }
  nextRound(){
    this.round$.next(this._round+1)
  }
  nextRounds(rouds:number){
    this.round$.next(this._round+rouds)
  }
  getRound():number{
    return this._round
  }
  getFloor():number{
    return this._floor
  }
  reset(){
    this.floor$.next(0)
    this.round$.next(0)
  }
}
