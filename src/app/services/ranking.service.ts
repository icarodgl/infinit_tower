import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { RankingModel, StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  private _floor:number = 0;
  private _round:number = 0;
  floor$:Subject<number> = new Subject<number>()
  round$:Subject<number> = new Subject<number>()
  ranking:RankingModel[] = []
  constructor(public storageS:StorageService) {
    this.floor$.subscribe(f=>this._floor=f)
    this.round$.subscribe(r=>this._round=r)
    this.ranking = storageS.getRanking()
   }

  nextFloor(){
    this.floor$.next(this._floor+1)
    this.storageS.saveGame({round:this._round,floor:this._floor})
  }
  nextRound(){
    this.round$.next(this._round+1)
    this.storageS.saveGame({round:this._round,floor:this._floor})
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
    this.saveRanking(this.getFloor(),this.getRound())
    this.floor$.next(0)
    this.round$.next(0)
    this.storageS.reset()
  }
  saveRanking(floor:number,round:number){
    this.ranking = this.storageS.getRanking()
    this.ranking.push({data:this.getTime(),floor,round})
    this.storageS.saveRanking(this.ranking.sort((a,b)=> {return a.floor>b.floor?1:-1}))
  }
  getTime():string{
    return moment().format('H:mm:ss')
  }
}
