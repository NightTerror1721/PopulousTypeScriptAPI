/** @noSelfInFile */

/** @compileMembersOnly  */
declare enum SpecialListType
{
    PEOPLELIST,
    BUILDINGLIST,
    BUILDINGMARKERLIST,
    FORMATIONSLIST,
    BEACONSLIST,
    WILDLIST,
    FIGHTLIST,
    PREFIGHTLIST,
    SPECIALLIST,
    AIRSHIPSLIST,
    BOATLIST,
    TRIGGERLIST,
    TRIGGERHEADLIST,
    SWAMPLIST,
    WOODLIST
}

declare function getPlayerContainer(arg0: number): PlayerContainer

declare function getLists(arg0: boolean): lists

declare function createThing(type: number, model: number, tribe: TribeID, coords: Coord3D, arg4: false, arg5: false): Thing

declare function getShaman(tribe: TribeID): Thing | undefined

declare function swapOwner(thing: Thing, new_tribe: TribeID): void

declare function FindNextGlobalTypeList(arg0: number, thing: Thing): Thing
declare function FindNextGlobalTypeList(thing: Thing): Thing

declare function FindNextSpecialList(arg0: number, arg1: number, thing: Thing): Thing

declare function DestroyThing(thing: Thing): void

declare function objectCounts(): number

declare function GetThing(idx: number): Thing

declare function findWood(thing: Thing): Thing

declare function ProcessGlobalTypeList(thing_type: number, callback: (this: void, thing: Thing) => boolean): Thing

declare function ProcessGlobalUsedList(callback: (this: void, thing: Thing) => boolean): Thing

declare function ProcessGlobalSpecialListAll(tribe: TribeID, callback: (thing: Thing) => boolean): Thing

declare function ProcessGlobalSpecialList(tribe: TribeID, list_type: SpecialListType, callback: (this: void, thing: Thing) => boolean): Thing

declare function uninit_thing(thing: Thing): void

declare function uninit_triggered_thing(thing: Thing): boolean

declare function reinit_riggered_thing(thing: Thing): boolean

declare function uninit_all_triggered_things(): void

declare function copy_thing_data(src: Thing, dst: Thing): void

declare function CREATE_THING_FOR_TRAINING(arg0: number, arg1: number, arg2: number, arg3: Coord3D, arg4: number, arg5: number, arg6: number, arg7: number): Thing

declare function CREATE_THING_WITH_PARAMS4(arg0: number, arg1: number, arg2: number, arg3: Coord3D, arg4: number, arg5: number, arg6: number, arg7: number): Thing

declare function CREATE_THING_WITH_PARAMS5(
    arg0: number, arg1: number, arg2: number, arg3: Coord3D, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number
): Thing

declare function CREATE_THING_FOR_BUILDING_UPGRADING(
    arg0: number, arg1: number, arg2: number, arg3: Coord3D, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number
): Thing

declare function ProcessObjectListVector(arrays: ObjectList[], callback: (thing: Thing) => boolean): void

declare function ConvertObjectListVectorToThingVector(arrays: ObjectList[]): Thing[]
