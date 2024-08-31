declare interface OBJLIST
{
    t_thing: Thing
    next: OBJLIST
    prev: OBJLIST
}

declare interface Internal_It
{
    _ol: ObjectList
    _curr: OBJLIST
}

declare enum ObjectListType
{
    None,
    FreeList,
    UsedList,
    TypeList
}

/** @customConstructor ObjectList */
declare class ObjectList
{
    constructor(type: ObjectListType)
    constructor(copy: ObjectList)

    setObjectListType(type: ObjectListType): void
    insert(t: Thing): OBJLIST
    remove(t: Thing, del?: boolean): void
    front(): Thing
    tail(): Thing
    pop_front(): Thing
    pop_tail(): Thing
    getNextThing(t: Thing): Thing
    getPreviousThing(t: Thing): Thing
    count(): number
    whatListAmI(): ObjectListType
    processList(predicate: (predicate: Thing) => boolean): Thing|undefined
    reset(): void
    isEmpty(): boolean
    AmIInList(t: Thing): OBJLIST|undefined
    getNth(idx: number): Thing
    toThingVector(): Thing[]
    toObjectProxyVector(): ObjectProxy[]
}
