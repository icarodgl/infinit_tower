import * as moment from "moment"

export class ItemModel{
    id:string
    name:string
    hands:number
    damage:number
    defese:number
    constructor( data: any | ItemModel | {}){
            this.id = moment.now().toString()
            this.name=data.name || ''
            this.hands=data.hands || 1
            this.damage=data.damage || 1
            this.defese=data.defese || 1
        }
}
export const unarmed:ItemModel = new ItemModel({name:"desarmado",damage:1,defese:1,hands:1})



