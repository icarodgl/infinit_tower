export class ItemModel{
    name:string
    hands:number
    damage:number
    defese:number
    constructor(
        _name?:string,
        _hands?:number,
        _damage?:number,
        _defese?:number,
        ){
            this.name=_name || ''
            this.hands=_hands || 1
            this.damage=_damage || 1
            this.defese=_defese || 1
        }
}
export const unarmed:ItemModel = new ItemModel("unarmed",1,1,1)

