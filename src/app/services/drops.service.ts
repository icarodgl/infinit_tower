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
    return new ItemModel ({
        name:`Espada +${nivel}` ,
        damage:2*nivel,
        defese:1,
        hands:1
    })
}
dropDefenseItem(nivel:number):ItemModel{
    return new ItemModel({
        name:`Escudo +${nivel}`,
        damage:1 ,
        defese:2*nivel,
        hands:1
    })
}
dropTwoHand(nivel:number):ItemModel{
    return new ItemModel({
        name:`Espadão +${nivel}`,
        damage:2*nivel,
        defese:(2*Math.round(nivel/2)),
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
    let dropI = 100
    let dropP = 100
    let dice = Math.floor(Math.random()*100)
    if(dice <= dropI ){
        this.personS.addItemInventory( this.dropItens(nivel))
    }
    if(dice <= dropP){
        this.personS.addPotionInventory(this.dropPotion())
    }
}
}