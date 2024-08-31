/** @compileMembersOnly  */
declare enum PopModule
{
    Module_Commands,
    Module_Control,
    Module_DataTypes,
    Module_Defines,
    Module_Draw,
    Module_Game,
    Module_GameStates,
    Module_Globals,
    Module_Helpers,
    Module_Level,
    Module_Map,
    Module_MapWho,
    Module_Objects,
    Module_Person,
    Module_Players,
    Module_PopScript,
    Module_Sound,
    Module_StringTools,
    Module_System,
    Module_Table,
    Module_Package,
    Module_Math,
    Module_Shapes,
    Module_String
}

declare type cbool = number

declare const MAX_NUM_MODLES: number

/** @customName import */
declare function importModule(this: void, module: PopModule): void

declare function exit(this: void): void

declare function include(this: void, filename: string): void

declare function error(msg: string): never


declare interface Script4SaveData
{
    push_int(value: number): void
    push_bool(value: boolean): void
    push_float(value: number): void
    push_string(value: string): void
    push_objectproxy(value: ObjectProxy): void
}

declare interface Script4LoadData
{
    pop_int(): number
    pop_bool(): boolean
    pop_float(): number
    pop_string(): string
    pop_objectproxy(): ObjectProxy
}
