import { ItemModel, unarmed } from "./item.mode."
import { PotionsItem } from "./potions.mode";


export class CharacterModel {
    maxHp: number;
    defense: number;
    attack: number;
    hp: number;
    leftHand: ItemModel;
    rightHand: ItemModel;
    inventory: ItemModel[]  = []
    PotionInventory: PotionsItem[] = []

    constructor(
        _maxHp?: number,
        _hp?: number,
        _attack?: number,
        _defense?: number,
        _leftHand?:ItemModel,
        _rightHand?:ItemModel,
    ) {
        this.maxHp = _maxHp ||20;
        this.defense = _defense||0;
        this.attack = _attack||1;
        this.hp = _hp||20;
        this.leftHand =  _leftHand || unarmed;
        this.rightHand =  _rightHand || unarmed;
    }

}