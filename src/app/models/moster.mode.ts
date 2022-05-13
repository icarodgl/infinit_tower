export class MonsterModel {
    nivel:number
    cor:string
    name: string
    hp: number
    hpMax: number
    attack: number
    defense: number
    constructor(
        name: string,
        hp: number,
        hpMax: number,
        atack: number,
        defense: number,
        nivel:number,
        cor:string
    ) {
        this.nivel = nivel
        this.name = name
        this.hp = hp
        this.hpMax = hpMax
        this.attack = atack
        this.defense = defense
        this.cor = cor
    }
}