import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CharacterModel } from '../models/character.model';
import { ItemModel, unarmed } from '../models/item.mode.';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  person = new CharacterModel(
    20,
    20,
    1,
    1
  )
  personHp$:Subject<number> = new Subject<number>()
  personMaxHp$:Subject<number> = new Subject<number>()

  constructor() { 
    this.personMaxHp$.next(this.person.maxHp)
    this.personHp$.next(this.person.hp)
  }
  newPerson(){
    this.person = new CharacterModel(
      20,
      20,
      1,
      1
    )
  }
  recieveDamage(damage: number): void {
    this.person.hp = this.person.hp - (damage - (this.person.defense + this.person.leftHand.defese + this.person.rightHand.defese))
    this.personHp$.next(this.person.hp)
  }
  recieveHeal(heal: number): void {
    this.person.hp = this.person.hp + heal
    this.personHp$.next(this.person.hp)
  }
  setLeftHand(item: ItemModel): void {
    if (item.hands == 2) {
      this._set2HandItem(item)
    } else {
      if (this.person.leftHand.hands == 1) {
        this.person.inventory.push(this.person.leftHand)
        this.person.leftHand = item
      } else {
        this.person.inventory.push(this.person.leftHand)
        this.person.leftHand = item
        this.person.rightHand = unarmed
      }

    }
  }
  setRightHand(item: ItemModel): void {
    if (item.hands == 2) {
      this._set2HandItem(item)
    } else {
      if (this.person.rightHand.hands == 1) {
        this.person.inventory.push(this.person.rightHand)
        this.person.rightHand = item
      } else {
        this.person.inventory.push(this.person.rightHand)
        this.person.rightHand = item
        this.person.leftHand = unarmed
      }
    }
  }
  private _set2HandItem(item: ItemModel): void {
    if (this.person.leftHand.hands == 1) {
      this.person.inventory.push(this.person.leftHand)
      this.person.inventory.push(this.person.rightHand)
      this.person.leftHand = item
      this.person.rightHand = item
    } else {
      this.person.inventory.push(this.person.leftHand)
      this.person.leftHand = item
      this.person.rightHand = item
    }
  }
  dealDamage(): number {
    if (this.person.leftHand.hands == 2) {
      return this.person.attack + this.person.leftHand.damage
    } else {
      return this.person.attack + this.person.leftHand.damage + this.person.rightHand.damage
    }
  }
}
