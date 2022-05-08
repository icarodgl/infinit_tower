export class MonsterModel {
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
    ) {
        this.name = name
        this.hp = hp
        this.hpMax = hpMax
        this.attack = atack
        this.defense = defense
    }
}