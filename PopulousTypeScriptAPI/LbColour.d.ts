/** @TbColour ObjectProxy */
declare class TbColour
{
    Packed: number
    Blue: number
    Green: number
    Red: number
    Alpha: number
    Index: number

    constructor()
    constructor(ind: number)
    constructor(r: number, g: number, b: number, a?: number)

    Set(r: number, g: number, b: number, a?: number): void
    Get32bitValue(): number
}