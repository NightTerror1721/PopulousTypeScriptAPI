/** @noSelfInFile */

declare interface ThingDrawTableInfo
{
    DrawType: number
    NumFramesPerDir: number
    DirNumBeforeReflect: number
    FrameSpeedIncr: number
    AnimationType: number
    AnimGroup: number
    AnimVersion: number
    Alpha: number
    NonLooped: number
    Flags: number
}

/** @compileMembersOnly  */
declare enum AnimationConstant
{
    S_ANIM_WILD_STAND = 0,
    S_ANIM_WILD_RUN = 1,
    S_ANIM_WILD_EAT = 2,
    S_ANIM_WILD_DRINK = 3,
    S_ANIM_WILD_KNEEL = 4,
    S_ANIM_BEAR_STAND = 5,
    S_ANIM_BEAR_RUN = 6,
    S_ANIM_BUFFALO_STAND = 7,
    S_ANIM_BUFFALO_RUN = 8,
    S_ANIM_WOLF_STAND = 9,
    S_ANIM_WOLF_RUN = 10,
    S_ANIM_RABBIT_STAND = 11,
    S_ANIM_RABBIT_RUN = 12,
    S_ANIM_BEAVER_STAND = 13,
    S_ANIM_BEAVER_RUN = 14,
    S_ANIM_BRAVE_STAND = 15,
    S_ANIM_WARRIOR_STAND = 16,
    S_ANIM_RELIGIOUS_STAND = 17,
    S_ANIM_SPY_STAND = 18,
    S_ANIM_SUPER_STAND = 19,
    S_ANIM_SHAMEN_STAND = 20,
    S_ANIM_BRAVE_RUN = 21,
    S_ANIM_WARRIOR_RUN = 22,
    S_ANIM_RELIGIOUS_RUN = 23,
    S_ANIM_SPY_RUN = 24,
    S_ANIM_SUPER_RUN = 25,
    S_ANIM_SHAMEN_RUN = 26,
    S_ANIM_BRAVE_WORK = 27,
    S_ANIM_WARRIOR_WORK = 28,
    S_ANIM_RELIGIOUS_WORK = 29,
    S_ANIM_SPY_WORK = 30,
    S_ANIM_SUPER_WORK = 31,
    S_ANIM_BRAVE_PRAY = 32,
    S_ANIM_WARRIOR_PRAY = 33,
    S_ANIM_RELIGIOUS_PRAY = 34,
    S_ANIM_SPY_PRAY = 35,
    S_ANIM_SUPER_PRAY = 36,
    S_ANIM_SHAMEN_PRAY = 37,
    S_ANIM_BRAVE_JUMP = 38,
    S_ANIM_WARRIOR_JUMP = 39,
    S_ANIM_RELIGIOUS_JUMP = 40,
    S_ANIM_SPY_JUMP = 41,
    S_ANIM_SUPER_JUMP = 42,
    S_ANIM_BRAVE_STAND_WOOD = 43,
    S_ANIM_WARRIOR_STAND_WOOD = 44,
    S_ANIM_RELIGIOUS_STAND_WOOD = 45,
    S_ANIM_SPY_STAND_WOOD = 46,
    S_ANIM_SUPER_STAND_WOOD = 47,
    S_ANIM_BRAVE_RUN_WOOD = 48,
    S_ANIM_WARRIOR_RUN_WOOD = 49,
    S_ANIM_RELIGIOUS_RUN_WOOD = 50,
    S_ANIM_SPY_RUN_WOOD = 51,
    S_ANIM_SUPER_RUN_WOOD = 52,
    S_ANIM_BRAVE_PUNCH = 53,
    S_ANIM_WARRIOR_PUNCH = 54,
    S_ANIM_RELIGIOUS_PUNCH = 55,
    S_ANIM_SPY_PUNCH = 56,
    S_ANIM_SUPER_PUNCH = 57,
    S_ANIM_BRAVE_FLINCH = 58,
    S_ANIM_WARRIOR_FLINCH = 59,
    S_ANIM_RELIGIOUS_FLINCH = 60,
    S_ANIM_SPY_FLINCH = 61,
    S_ANIM_SUPER_FLINCH = 62,
    S_ANIM_BRAVE_PUSH = 63,
    S_ANIM_WARRIOR_PUSH = 64,
    S_ANIM_RELIGIOUS_PUSH = 65,
    S_ANIM_SPY_PUSH = 66,
    S_ANIM_SUPER_PUSH = 67,
    S_ANIM_BRAVE_PUSHED = 68,
    S_ANIM_WARRIOR_PUSHED = 69,
    S_ANIM_RELIGIOUS_PUSHED = 70,
    S_ANIM_SPY_PUSHED = 71,
    S_ANIM_SUPER_PUSHED = 72,
    S_ANIM_BRAVE_SIT = 73,
    S_ANIM_WARRIOR_SIT = 74,
    S_ANIM_RELIGIOUS_SIT = 75,
    S_ANIM_SPY_SIT = 76,
    S_ANIM_SUPER_SIT = 77,
    S_ANIM_BRAVE_FLY = 78,
    S_ANIM_WARRIOR_FLY = 79,
    S_ANIM_RELIGIOUS_FLY = 80,
    S_ANIM_SPY_FLY = 81,
    S_ANIM_SUPER_FLY = 82,
    S_ANIM_BRAVE_KICK = 83,
    S_ANIM_WARRIOR_KICK = 84,
    S_ANIM_RELIGIOUS_KICK = 85,
    S_ANIM_SPY_KICK = 86,
    S_ANIM_SUPER_KICK = 87,
    S_ANIM_BRAVE_LAY = 88,
    S_ANIM_WARRIOR_LAY = 89,
    S_ANIM_RELIGIOUS_LAY = 90,
    S_ANIM_SPY_LAY = 91,
    S_ANIM_SUPER_LAY = 92,
    S_ANIM_SHAMEN_LEVITATE = 93,
    S_ANIM_SUPER_FIST_ATTACK = 94,
    S_ANIM_RELIGIOUS_BOOK_OUT = 95,
    S_ANIM_RELIGIOUS_BOOK_IN = 96,
    S_ANIM_RELIGIOUS_PREACH = 97,
    S_ANIM_RELIGIOUS_PREACH_ONE = 98,
    S_ANIM_RELIGIOUS_PREACH_TWO = 99,
    S_ANIM_BRAVE_SET_FIRE = 100,
    S_ANIM_SPY_SET_FIRE = 101,
    S_ANIM_AOD_STAND = 102,
    S_ANIM_AOD_WALK = 103,
    S_ANIM_AOD_FLY = 104,
    S_ANIM_AOD_SLASH = 105,
    S_ANIM_SHAMEN_PUNCH = 106,
    S_ANIM_SHAMEN_FLY = 107,
    S_ANIM_WILD_FLY = 108,
    S_ANIM_FSHAMEN_CAST = 109,
    S_ANIM_BRAVE_ROLL = 110,
    S_ANIM_WARRIOR_ROLL = 111,
    S_ANIM_RELIGIOUS_ROLL = 112,
    S_ANIM_SPY_ROLL = 113,
    S_ANIM_SUPER_ROLL = 114,
    S_ANIM_BRAVE_FALL = 115,
    S_ANIM_WARRIOR_FALL = 116,
    S_ANIM_RELIGIOUS_FALL = 117,
    S_ANIM_SPY_FALL = 118,
    S_ANIM_SUPER_FALL = 119,
    S_ANIM_BRAVE_RISE = 120,
    S_ANIM_WARRIOR_RISE = 121,
    S_ANIM_RELIGIOUS_RISE = 122,
    S_ANIM_SPY_RISE = 123,
    S_ANIM_SUPER_RISE = 124,
    S_ANIM_FSHAMEN_KICK = 125,
    S_ANIM_FSHAMEN_FALL = 126,
    S_ANIM_FSHAMEN_LAY = 127,
    S_ANIM_FSHAMEN_RISE = 128,
    S_ANIM_FSHAMEN_ROLL = 129,
    S_ANIM_WILD_ROLL = 130,
    S_ANIM_BRAVE_CHEER_A = 131,
    S_ANIM_WARRIOR_CHEER_A = 132,
    S_ANIM_RELIGIOUS_CHEER_A = 133,
    S_ANIM_SPY_CHEER_A = 134,
    S_ANIM_SUPER_CHEER_A = 135,
    S_ANIM_BRAVE_CHEER_B = 136,
    S_ANIM_WARRIOR_CHEER_B = 137,
    S_ANIM_RELIGIOUS_CHEER_B = 138,
    S_ANIM_SPY_CHEER_B = 139,
    S_ANIM_SUPER_CHEER_B = 140,
    S_ANIM_BRAVE_CHEER_C = 141,
    S_ANIM_WARRIOR_CHEER_C = 142,
    S_ANIM_RELIGIOUS_CHEER_C = 143,
    S_ANIM_SPY_CHEER_C = 144,
    S_ANIM_SUPER_CHEER_C = 145,
    S_ANIM_BRAVE_PADDLE = 146,
    S_ANIM_WARRIOR_PADDLE = 147,
    S_ANIM_RELIGIOUS_PADDLE = 148,
    S_ANIM_SPY_PADDLE = 149,
    S_ANIM_SUPER_PADDLE = 150,
    S_ANIM_AOD2_STAND = 151,
    S_ANIM_AOD2_FLY = 152,
    S_ANIM_AOD2_WALK = 153,
    S_ANIM_AOD2_SLASH = 154,
    S_ANIM_AOD2_DIE = 155,
    S_ANIM_BRAVE_FLEE = 156,
    S_ANIM_WARRIOR_FLEE = 157,
    S_ANIM_RELIGIOUS_FLEE = 158,
    S_ANIM_SPY_FLEE = 159,
    S_ANIM_SUPER_FLEE = 160,
    S_ANIM_BRAVE_SCRATCH = 161,
    S_ANIM_WARRIOR_PRESS_UP = 162,
    S_ANIM_SUPER_PRESS_UP = 163,
    S_ANIM_SPY_JUGGLE = 164,
    S_ANIM_SHAMAN_STUCK = 165,
    S_ANIM_BRAVE_ELECTRIC = 166,
    S_ANIM_SHAMAN_ELECTRIC = 167,
}


declare function DrawTextStr(x: number, y: number, text: string): void

declare function LbDraw_Line(x0: number, y0: number, x1: number, y1: number, colour: TbColour): void

declare function LbDraw_VerticalLine(arg0: number, arg1: number, arg2: number, colour: TbColour): void

declare function LbDraw_HorizontalLine(arg0: number, arg1: number, arg2: number, colour: TbColour): void

declare function LbDraw_Pixel(x: number, y: number, colour: TbColour): void

declare function CharWidth(char_as_int: number): number

declare function CharHeight(char_as_int: number): number

declare function UnlockSurface(): void

declare function LockSurface(): cbool

declare function LbScreen_Swap(arg0: number): unknown

declare function LbDraw_SetFlagsOn(fMask: number): void

declare function LbDraw_SetFlagsOff(fMask: number): void

declare function set_pop3_palette(pallete: unknown): void

declare function LbDraw_Text(x: number, y: number, text: string, colour: TbColour): void

declare function LbDraw_Rectangle(rect: TbRect, clr: number): void

declare function LbDraw_RectangleOutline(rect: TbRect, clr: number): void

declare function LbDraw_Circle(x: number, y: number, rad: number, colour: TbColour): void

declare function LbDraw_CircleOutline(x: number, y: number, rad: number, colour: TbColour): void

declare function LbDraw_Triangle(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, colour: TbColour): void

declare function LbDraw_CircleFilled(x: number, y: number, rad: number, colour: TbColour): void

declare function LbDraw_PropText(x: number, y: number, text: string, colour: TbColour): void

declare function LbDraw_UnicodePropText(x: number, y: number, text: string, colour: TbColour): void

declare function COLOUR(colour: TbColour): number

declare function SetDrawColour(colour: TbColour): void

declare function SetFont(font: TbSprite): void

declare function font(arg0: number): TbSprite

declare function SetDrawFlagOn(flags: number): void

declare function SetDrawFlagOff(flags: number): void

declare function DrawBox(x: number, y: number, w: number, h: number, colour: TbColour): void

declare function ScreenWidth(): number

declare function ScreenHeight(): number

declare function ScreenDepth(): number

declare function isSurfaceLocked(): cbool

declare function CharWidth2(): number

declare function CharHeight2(): number

declare function clear_all_screens(): void

declare function clear_any_screen_effect_modes(): void

declare function draw_sky_clr_overlay(arg0: number, arg1: number): void

declare function set_thing_draw_info(thing: Thing, table_idx: number, draw_num: number): void

declare function set_person_draw_info_by_anim(thing: Thing, draw_num: number): void
