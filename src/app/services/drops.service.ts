import { Injectable } from '@angular/core';
import { ItemModel } from '../models/item.mode';
import { PotionsItem } from '../models/potions.mode';
import { CharacterService } from './character.service';

@Injectable({
  providedIn: 'root'
})
export class DropService {
    constructor(public personS: CharacterService){}

dropPotion():PotionsItem{
    let pot = new PotionsItem()
    return pot
}
dropAttackItem(nivel:number):ItemModel{
    let calc:number = 6+nivel
    return new ItemModel ({
        name:`Espada +${nivel}` ,
        damage:calc,
        defese:Math.round(calc/2)-1,
        hands:1
    })
}
dropDefenseItem(nivel:number):ItemModel{
    let calc:number = 6+nivel
    return new ItemModel({
        name:`Escudo +${nivel}`,
        damage:Math.round(calc/2)-1 ,
        defese:calc,
        hands:1
    })
}
dropTwoHand(nivel:number):ItemModel{
    let calc:number = 10+(2*nivel)
    return new ItemModel({
        name:`Espadão +${nivel}`,
        damage:calc,
        defese:calc-6,
        hands:2
    })
}
dropItens(nivel:number):ItemModel{
    let key = Math.floor(Math.random()*3)
    switch (key) {
        case 0: 
        return this.dropAttackItem(nivel)
        case 1:
            return this.dropDefenseItem(nivel)
        case 2:
            return this.dropTwoHand(nivel)
        default:
            return this.dropAttackItem(nivel)
    } 
}
drop(nivel:number){
    let dropItem = 20
    let dropPotion = 35
    let dice = Math.floor(Math.random()*100)
    if(dice <= dropItem ){
        this.personS.addItemInventory( this.dropItens(nivel))
    }
    if(dice <= dropPotion){
        this.personS.addPotionInventory(this.dropPotion())
    }
}
}