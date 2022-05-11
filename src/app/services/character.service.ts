import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CharacterModel } from '../models/character.model';
import { ItemModel, unarmed } from '../models/item.mode.';
import { PotionsItem } from '../models/potions.mode';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  _person = new CharacterModel(
    20,
    20,
    0,
    1
  )
  person$:Subject<CharacterModel> = new Subject<CharacterModel>()

  constructor() { 
    this.person$.subscribe(p=>this._person=p)
  }
  newPerson(){
    let person = new CharacterModel()
    this.person$.next(person)
  }
  recieveDamage(damage: number): number {
    let dmg = this._person.hp = this._person.hp - (damage - (this._person.defense + this._person.leftHand.defese + this._person.rightHand.defese))
    this.person$.next(this._person)
    return dmg
  }
  recieveFullHeal(): void {
    this._person.hp = this._person.maxHp
    this.person$.next(this._person)
  }
  recieveHeal(heal: number): void {
    this._person.hp = this._person.hp + heal
    this.person$.next(this._person)
  }
  setLeftHand(item: ItemModel): void {
    if (item.hands == 2) {
      this._set2HandItem(item)
    } else {
      if (this._person.leftHand.hands == 1) {
        this._person.inventory.push(this._person.leftHand)
        this._person.leftHand = item
      } else {
        this._person.inventory.push(this._person.leftHand)
        this._person.leftHand = item
        this._person.rightHand = unarmed
      }

    }
  }
  setRightHand(item: ItemModel): void {
    if (item.hands == 2) {
      this._set2HandItem(item)
    } else {
      if (this._person.rightHand.hands == 1) {
        this._person.inventory.push(this._person.rightHand)
        this._person.rightHand = item
      } else {
        this._person.inventory.push(this._person.rightHand)
        this._person.rightHand = item
        this._person.leftHand = unarmed
      }
    }
  }
  private _set2HandItem(item: ItemModel): void {
    if (this._person.leftHand.hands == 1) {
      this._person.inventory.push(this._person.leftHand)
      this._person.inventory.push(this._person.rightHand)
      this._person.leftHand = item
      this._person.rightHand = item
    } else {
      this._person.inventory.push(this._person.leftHand)
      this._person.leftHand = item
      this._person.rightHand = item
    }
  }
  dealDamage(): number {
    if (this._person.leftHand.hands == 2) {
      return this._person.attack + this._person.leftHand.damage
    } else {
      return this._person.attack + this._person.leftHand.damage + this._person.rightHand.damage
    }
  }

  addItemInventory(item:PotionsItem){
    this._person.PotionInventory.push(item)
  }
  consumePotion(index?:number){
    this._person.PotionInventory.pop()
  }
}
