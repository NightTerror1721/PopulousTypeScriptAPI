
/** @customConstructor ObjectProxy */
declare class ObjectProxy
{
    constructor()
    constructor(thing: Thing)
    constructor(me: ObjectProxy)

    set(refT: Thing): void
    get(): Thing
    isNull(): boolean
    getType(): number
    getFlags(): number
    setFlags(flags: number): void
    setFlag(flag: number): void
    unsetFlag(flag: number): void
    is_type(type: number): void
    is_flag_enabled(flag: number): boolean
    clear(): void
}
