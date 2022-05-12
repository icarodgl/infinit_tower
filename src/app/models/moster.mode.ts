export class MonsterModel {
    nivel:number
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
        nivel:number
    ) {
        this.nivel = nivel
        this.name = name
        this.hp = hp
        this.hpMax = hpMax
        this.attack = atack
        this.defense = defense
    }
}