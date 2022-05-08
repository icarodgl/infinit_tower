export class ItemModel{
    name:string
    hands:number
    damage:number
    defese:number
    constructor(
        _name:string,
        _hands:number,
        _damage:number,
        _defese:number,
        ){
            this.name=_name
            this.hands=_hands
            this.damage=_damage
            this.defese=_defese
        }
}
export const unarmed:ItemModel = new ItemModel("unarmed",1,1,1)