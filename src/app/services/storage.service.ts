import { Injectable } from '@angular/core';
import { Moment } from 'moment';
import { CharacterModel } from '../models/character.model';
import { CharacterService } from './character.service';

export interface SaveGame {
  person: CharacterModel
  ranking: RankingModel
}
export interface RankingModel {
  data?:string
  floor: number,
  round: number
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(public personS: CharacterService) { 
    
  }
  saveRanking(ranking:RankingModel[]){
    localStorage.setItem('ranking', JSON.stringify(ranking));
  }
  getRanking():RankingModel[]{
    let ranking = localStorage.getItem('ranking')
    return ranking!==null? JSON.parse(ranking):[]
  }
  saveGame(ranking: RankingModel) {
    let save: SaveGame = {
      person: this.personS._person,
      ranking: { floor: ranking.floor, round: ranking.round }
    }
    localStorage.setItem('saved', JSON.stringify(save));
  }
  loadGame(): SaveGame | undefined {
    let save = localStorage.getItem('saved')
    return save ? JSON.parse(save) : undefined
  }
  reset() {
    localStorage.removeItem('saved')
  }
}
