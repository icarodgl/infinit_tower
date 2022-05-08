import { ItemModel, unarmed } from "./item.mode."


export class CharacterModel {
    maxHp: number;
    defense: number;
    attack: number;
    hp: number;
    leftHand: ItemModel;
    rightHand: ItemModel;
    inventory: ItemModel[] = []

    constructor(
        _maxHp: number,
        _hp: number,
        _attack: number,
        _defense: number,
    ) {
        this.maxHp = _maxHp;
        this.defense = _defense;
        this.attack = _attack;
        this.hp = _hp;
        this.leftHand =  unarmed;
        this.rightHand =  unarmed;
    }

}