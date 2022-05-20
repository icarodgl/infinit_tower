import { ItemModel, unarmed } from "./item.mode"


export class CharacterModel {
    maxHp: number;
    defense: number;
    attack: number;
    hp: number;
    leftHand: ItemModel ;
    rightHand: ItemModel  ;
    inventory: ItemModel[]  = []
    PotionInventory: number=0
    gold:number=0

    constructor(data: CharacterModel | {} | any
    ) {
        this.maxHp = data.maxHp ||20;
        this.defense = data.defense||0;
        this.attack = data.attack||1;
        this.hp = data.hp||20;
        this.leftHand =  data.leftHand || unarmed;
        this.rightHand =  data.rightHand || unarmed;
    }

}