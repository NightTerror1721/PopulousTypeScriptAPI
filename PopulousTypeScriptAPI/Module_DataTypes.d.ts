declare interface AODDrawThing
{
    TargetDrawNum: number
    TweenCount: number
}

declare interface BeaconDisplayInfo
{
    Alt: number
    Flags: number
    Radius: number
}

declare interface Beacon
{
    BDInfo: BeaconDisplayInfo[]
    Count: number
    CurrCellRadius: number
    CurrMaxCellRadius: number
    InfluenceFactor: number
    LinkedThingIdx: ObjectProxy
    TimeBeforeSearchStart: number
}

declare interface BeaconDisplayInfo
{
    Alt: number
    Flags: number
    Radius: number
}

declare interface Blast
{
    AffectAll: number
    AltIncrement: number
    BurningBlast: number
    CurrCellRadius: number
    DoneFirstAffect: number
    Duration: number
    Flags: number
    MaxCellRadius: number
    MaxEffectSpeed: number
    MaxEffectWorldRadius: number
    RadiusIncrement: number
}

declare interface BridgeControl
{
    BridgeThingIdx: ObjectProxy
}

declare interface Building
{
    AddOnIdx: ObjectProxy
    BasePos: Coord2D
    BeaconIdx: ObjectProxy
    ChimneySmokeIdx: ObjectProxy
    Count: number
    Damaged: number
    DrawOwner: number
    Dwellers: ObjectProxy[] //length = 6
    Flags: number
    HasBuildingExistedBefore: number
    LastDamagedBy: number
    LastPersonLeftAt: number
    LastPersonTrainedAt: number
    LinkTriggerIdx: ObjectProxy
    NumDwellers: number
    NumExpected: number
    NumExpectedCountDown: number
    PersonToBeTrainedIdx: number
    PrevOwner: number
    PrevStage: number
    QueueInteractCount: number
    QueueLinkIdx: ObjectProxy
    QueueReorderPos: number
    ShapeThingIdx: ObjectProxy
    SproggingCount: number
    TIDIdx: number
    TmpProcessChild: ObjectProxy
    TrainingManaCost: number
    UpgradeCount: number
    VehicleAcquiredWood: number
    VehicleConstrThingIdx: ObjectProxy
}

declare interface BuildingTypeInfo
{
    ObjectIdx: number
    ButtonTooltipText: number
    ToolTipStrId1: number
    ToolTipStrId2: number
    ToolTipStrId3: number
    DiscoveryObjectIdx: number
    DrawTableIdx: number
    GUIButtonId: number
    CursorSpriteNum: number
    MinBuilders: number
    MaxBuilders: number
    DfltBuilders: number
    ReqdShapeWood: number
    ReqdBldgWood: number
    AtlantisWoodDecr: number
    MaxNumWoodCollectors: number
    MaxNumFlatteners: number
    MaxNumDwellers: number
    MaxNumAttackers: number
    WaiterWanderRadius: number
    WorkWanderRadius: number
    WorkAltOffset: number
    UnitHarmonyIncr: number
    TrainingLength: number
    ConversionCount: number
    DamageThreshold: number
    BldgValue: number
    ModelProduced: number
    GuiStateGroup: number
    UpgradeLevel: number
    UpgradeModel: number
    ShadowDepth: number
    UpgradeTime: number
    HouseBldgManaFactor: number
    PeopleMinMaxPopValue: number
    SproggingTime: number
    AddOnInfo: number
    ArmageddonValue: number
    ArmageddonModel: number
    FlattenAmt: number
    RepairAltIncr: number
    MaxAltDiff: number
    Flags: number
}

declare interface BytePosOffsets
{
    XO: number
    ZO: number
}

declare interface CmdIdxSize
{
    CellsX: number
    CellsZ: number
    MapIdx: number
}

declare interface CmdTMIdxs
{
    MapIdx: number
    TargetIdx: ObjectProxy
}

/** @customConstructor CmdTargetInfo.new */
declare class CmdTargetInfo
{
    BldgModel: number
    Owner: number
    TargetCoord: Coord2D
    TargetIdx: ObjectProxy
    TIdxSize: CmdIdxSize
    TMIdxs: CmdTMIdxs
}

/** @customConstructor Commands.new */
declare class Commands
{
    CommandType: CommandType
    ControlThingIdx: ObjectProxy
    Flags: CommandFlag
    NumCommandees: number
    u: CmdTargetInfo
}

declare interface ComputerAttributes
{
    Value: number[] //length = 48
}


declare class Coord2D
{
    Xpos: number
    Zpos: number
    static new(this: void): Coord2D
}

declare class Coord3D
{
    Xpos: number
    Ypos: number
    Zpos: number
    static new(this: void): Coord3D
}

declare interface Coord3DDebug
{
    Xpos0: number
    Xpos1: number
    Ypos0: number
    Ypos1: number
    Zpos0: number
    Zpos1: number
}

declare interface Creature
{
    AheadAlt: number
    Count: number
    EagleRoll: number
    Flags: number
    Hunger: number
    LeaderIdx: ObjectProxy
    Leadership: number
    Life: number
    MaxMembersInGroup: number
    MembersInGroup: number
    MeStoreIdx: number
    PrefAlt: number
    RaiseAlt: number
    TargetIdx: ObjectProxy
    Thirst: number
}

declare interface CurrentGameDescription
{
    CurrentLevel: number
}


declare interface DTBeacon
{
    CurrBldgCellRange: number
    CurrDwellerCellRange: number
    CurrMaxCellRange: number
    LinkedThingIdx: ObjectProxy
    RecalcBldgRange: number
    RecalcDwellerRange: number
}

declare interface Discovery
{
    AvailabilityType: number
    CountToEffect: number
    CountToPlayerUpdate: number
    DiscoveringPlayer: number
    DiscoveryModel: number
    DiscoveryType: number
    DrawLinkThing: ObjectProxy
    ManaAmt: number
    TriggerType: number
}

declare interface DiscoveryDescription
{
    Model: number
    ObjectiveIndex: number
    Type: number
}

declare interface DiscoveryMarker
{
    AvailabilityType: number
    CountToEffect: number
    CountToPlayerUpdate: number
}

declare interface DormantTree
{
    Count: number
    Model: number
    Type: number
}

declare interface DrawInfo
{
    Alpha: number
    DrawNum: number
    DrawTableIdx: number
    Flags: number
    FrameCount: number
    FrameNum: number
    SeqNum: number
}

declare interface DrawnAtInfo
{
    EngineDrawnAtX: number
    EngineDrawnAtY: number
    ScannerDrawnAtX: number
    ScannerDrawnAtY: number
}

declare interface EffectAlphaInfo
{
    Alpha: number[] //length = 3
    Prob: number[] //length = 2
}

declare interface EffectArmageddon
{
    CreateArenaCount: number
    EndArmageddon: number
    GotoBattleCount: number
    LastShamanCastingIdx: number
    NumPeopleMovePerTurn: number[] //length = 10
    PlayerArenaOrder: number[] //length = 10
    ProcessBldgDestroy: number
    ProcessCameraAngle: number
    ProcessCreateArena: number
    ProcessLineUpPeople: number
    ProcessReincSites: number
    ShamanSpellCastCount: number
    SilenceBeforeAttackTime: number
    SoundEffectCount: number
}

declare interface EffectAtlantis
{
    CreateOwner: number
}

declare interface EffectAttached
{
    ThingIdx: ObjectProxy
}

declare interface EffectEarthquake
{
    MePos: number
    Side: number
}

declare interface EffectFireCloud
{
    Count2: number
    HorizRadius: number
    NumElems: number
    VertRadius: number
}

declare interface EffectFireRoll
{
    AODLinkThing: number
    CurrentStage: number
    StageCount: number
    StatueLinkThing: number
}

declare interface EffectFireStorm
{
    StartPos: Coord2D
}

declare interface EffectFlatten
{
    FireRadius: number
    LandRadius: number
    PrefAlt: number
    Radius: number
}

declare interface EffectFlyThing
{
    Colour: number
    FlyFriends: Coord2D[] //length = 5
    PrefOffsetY: number
}

declare interface EffectGeneral
{
    Count: number
    Duration: number
    EffectLinkThing: ObjectProxy
    AttackedThingsIdxs: ObjectProxy[] //length = 10
    ScaleFactorX: number
    ScaleFactorY: number
    AlphaInfo: EffectAlphaInfo
    AODStatue: EffectStatueToAOD
    Armageddon: EffectArmageddon
    Atlantis: EffectAtlantis
    Earthquake: EffectEarthquake
    FireCloud: EffectFireCloud
    FireStorm: EffectFireStorm
    Flatten: EffectFlatten
    FlyThing: EffectFlyThing
    InsectPlage: EffectInsectPlage
    LandAlter: EffectLandAlter
    LandBridge: EffectLandBridge
    LavaFlow: EffectLavaFlow
    Lightning: EffectLightning
    Meteor: EffectMeteor
    Orbiter: EffectOrbiter
    RSPrepare: EffectRSPrepare
    Swamp: EffectSwamp
}

declare interface EffectInsectPlage
{
    NumElems: number
    SS2: number
    StartPos: Coord2D
}

declare interface EffectLandAlter
{
    Height: number
    MePos: number
    Radius: number
    Sense: number
}

declare interface EffectLandBridge
{
    EndC2D: Coord2D
    EndMapPos: MapPosXZ
    StartC2D: Coord2D
    StartMapPos: MapPosXZ
    Type: number
    Water: number
    XStep: number
    YStep: number
    ZStep: number
}

declare interface EffectLavaFlow
{
    CurrRadius: number
    MaxRadius: number
    Volume: number
}

declare interface EffectLightning
{
    Points: Coord3D[] //length = 9
    RandSeed: number
    Remainder: number
    Stages: number
}

declare interface EffectMeteor
{
    Radius: number
    YSpeed: number
}

declare interface EffectOrbiter
{
    AngleStep: number
    Direction: number
    Lissajoux: number
    Phi: number
    Radius: number
    Theta: number
}

declare interface EffectRSPrepare
{
    FireRadius: number
    Flags: number
    LandRadius: number
}

declare interface EffectStatueToAOD
{
    CurrentStage: number
    StageCount: number
}

declare interface EffectSwamp
{
    ReedsPositionCode: number
}

declare interface EffectTumblingBranch
{
    WWThingIdx: ObjectProxy
}

declare interface EffectWhirlwind
{
    ConeHeight: number
    Count: number
    Duration: number
    NumCircuits: number
    NumElements: number
    OverWaterCount: number
    Rotation: number
    TopRadius: number
}

declare interface Fight
{
    FighterIdxs: ObjectProxy[] //length = 6
    LinkBlgdIdx: ObjectProxy
    Owner1: number
    Owner2: number
    TotalFighters: number
    UnderDogIdx: ObjectProxy
    WinningOwner: number
}

declare interface FontNums
{
    Debug: number
    FlashMsg: number
    GameOverMsg: number
    GenButtons: number
    Input: number
    LevelStats: number
    Panel: number
    PeoplePanel: number
    ThingDebug: number
    UserMsg: number
    VersionInfo: number
    VersionInfoSmall: number
}

declare interface Formation
{
    FirstFreePos: number
    NumMembers: number
    PosOffsets: BytePosOffsets[] //length = 12
    ThingIdxs: ObjectProxy[] //length = 12
}

declare interface GameParams
{
    AltChangeNoAffectDist: number
    CurrParamNum: number
    CurrParamValueNum: number
    Flags: number
    Flags2: number
    MoveMomentumAmt: number
    NumParams: number
}

declare interface General
{
    BasePos: Coord2D
    Orient: number
}

declare interface General3D
{
    X: number
    Y: number
    Z: number
}

declare interface GlobalClassesItems
{
    WoodSearchEngine2: unknown
}

declare interface GlobalNonSaveItems
{
    PlayerNum: number
    PhysScreenW: number
    PhysScreenH: number
    ScreenW: number
    ScreenH: number
    ScreenD: number
    FontNums: FontNums
    Flags: number
    GameParams: GameParams
    ThisLevelHeader: LevelHeaderv3
    StartLevelNumber: number
    DwellCapacityValidity: number
    CurrentGameDescription: CurrentGameDescription
    AudioInfo: AudioInfo
}

declare class FogOfWar
{
    uncover(tribe: TribeID, elem: MapElement): void
    perm_uncover(tribe: TribeID, elem: MapElement): void
    uncover_for_all_players(elem: MapElement): void
    perm_uncover_all_players(elem: MapElement): void
    clear(): void
    is_uncovered(elem: MapElement): cbool

    static clear_perm_uncover_all_players(this: void, elem: MapElement): void
    static clear_perm_uncover(this: void, tribe: TribeID, elem: MapElement): void
}


declare interface GlobalSaveItems
{
    Level: Level
    Counts: NetworkCounts
    Players: Player[] //length = 10
    CurrNumPlayers: number
    CurrMaxNumPlayers: number
    CurrObjectBank: number
    CurrLevelFlags: number
    GameSpeed: number
    StartNumWildPeople: number
    SpellsPresentOnLevel: number
    BuildingsPresentOnLevel: number
    PermBuildingPresentOnLevel: number
    LevelInfo: LevelInfo
    ThisLevelInfo: ThisLevelInfo
    FogOfWar: FogOfWar
}

declare interface GuardAreaControl
{
    CellsX: number
    CellsZ: number
    Count1: number
    Count2: number
    CurrDist: number
    CurrPeopleCount: number
    EnemyPresence: number
    GameTurnProcessed: number
    MapIdx: number
    PrevPeopleCount: number
    PrevPeopleCountTotal: number
}

declare interface Level
{
    MapElements: MapElement[] //length = 16384
    WildBuckets: number[] //length = 64
}

declare interface LevelHeaderv3
{
    LevelType: number
    ObjectsBankNum: number
    LevelFlags: number
    NumPlayers: number
    Markers: Record<number, number>
}

declare interface LevelInfo
{
    PlayerStartPositions: Coord2D[] //length = 10
}

declare interface MapElement
{
    Alt: number
    Cliff: number
    CollideTableIdxAndWDTFlags: number
    Flags: number
    Flags2: number
    MapWhoList: ObjectList
    MapWhoLocalList: ObjectList
    ObjectShadowAndLavaNum: number
    OwnerInfo: number
    PlayerMapWho: ObjectList[] //length = 10
    Shade1: number
    ShadeIncr: number
    ShapeOrBldgIdx: ObjectProxy
}

declare class MapPosXZ
{
    Pos: number
    XZ: PosAsXZ
    
    static new(this: void): MapPosXZ
}

declare interface MedManAttract
{
    BeaconIdx: ObjectProxy
    Count: number
    FireIdx: ObjectProxy
    MedManIdx: ObjectProxy
}

declare interface Movement
{
    BldgDieCount: number
    BldgDrawNum: number
    CurrAngleXZ: number
    CurrDest: MovementDestInfo
    FinalCoord: Coord2D
    LastNavigation: number
    LastWoodSearchEngineIdx: number
    NavigationCount: number
    ObjectBlastedCount: number
    ObjectBlastedMapIdx: number
    SelfPowerSpeed: number
    StageCoord: Coord2D
    Velocity: General3D
    WanderFactor: number
}

declare interface MovementDestAngleInfo
{
    XZ: number
    ZY: number
}

declare interface MovementDestCoordInfo
{
    D2: Coord2D
    D3: Coord3D
}

declare interface MovementDestInfo
{
    Angles: MovementDestAngleInfo
    AngleXZ: number
    Coord: Coord2D
    Coords: MovementDestCoordInfo|number
}

declare interface NetworkCounts
{
    GameTurn: number
    ProcessThings: number
}

declare interface ObjectFaceThing
{
    AngleIncrs: number[] //length = 3
    DrawFrame: number
    FaceIdx: number
    NumPoints: number
    Points: Points3DWord[] //length = 4
    PolyDrawMode: number
    WWThingIdx: ObjectProxy
    YIncr: number
}

declare interface ObjectThingInfo
{
    ConstructionStage: number
    CurrentFrame: number
    KeyStart: number
    KeyStop: number
    NumFrames: number
    Roll: number
    Scale: number
    StopFrame: number
    Tilt: number
}

declare class ObjectTraversal
{
    sortOutNeutralPlayerNum(arg: number): number
}

declare interface P3Constants
{
    MaxManaValue: number
    StartManaValue: number
    ConvertPersonManaCost: number
    GrabSoulManaCost: number
    TrainingManaBucketSize: number
    HumanManaAdjustFactor: number
    ComputerManaAdjustFactor: number
    HarmonyUnsheltered: number
    HarmonySheltered: number
    HarmonyEmployed: number
    HarmonyUnemployed: number
    MaxHarmonyIncr: number
    MinHarmonyIncr: number
    TrainingManaFactor: number
    HouseManaFactor: number
    WorkingManaFactor: number
    MaxManaFactor: number
    ManaUpdateFreq: number
    MaxWalkableAltDiff: number
    MaxWalkableAltDiffShallow: number
    MaxBuildableAltDiff: number
    MaxBoatHutAltDiff: number
    MaxBuildingDestroyAltDiff: number
    RaiseLowerManaCost: number
    TriggerReactiveCount: number
    SuperWarriorFireRate: number
    SuperWarriorBlastDamage: number
    SuperWarriorFireRateTower: number
    SuperWarriorBlastDamageTower: number
    SproggRatePer256Bands: number[] //length = 20
    HypnoNumPeopleAffected: number
    SwampNumPeopleAffected: number
    LightningNumPeopleAffected: number
    InvisNumPeopleAffected: number
    ShieldNumPeopleAffected: number
    BloodlustNumPeopleAffected: number
    ShapeNearBldgCells: number
    ShamenDeadManaPer256Lost: number
    ShamenDeadManaPer256Gained: number
    InvisibleCount: number
    HypnotisedCount: number
    ShieldCount: number
    BldgDamageDelay: number
    PreacheeCheckConvFreq: number
    PreacheeConvertChance: number
    BloodlustCount: number
    BldgBlastDamage: number
    PersBlastDamage: number
    SwarmPersonDamage: number
    LandBridgeMaxAltChange: number
    BraveDtRadius: number
    WarriorDtRadius: number
    SpyDtRadius: number
    SuperWarriorDtRadius: number
    MedicineManDtRadius: number
    FallOutOfWhirlwindDamage: number
    AltBandSpellRadiusAffectPer256: number[] //length = 8
    AltBandSuperRadiusAffectPer256: number[] //length = 8
    SpecialConvManaCostPer256Bands: number[] //length = 10
    FirestormDuration: number
    SpyDisgueseDelay: number
    MultipleSelectNumber: number
    DMETimeBeforeRestore: number
    AOD2KillCount: number
    AOD2Duration: number
    LandBridgeDuration: number
    BloodlustDamageMultiplier: number
    BloodlustHealthMultiplier: number
    BloodlustSWarriorBlastRate: number
    FriendliesAffectedByBlast: number
    IdleBravesMana: number
    IdleSpecialistsMana: number
    BusyBravesMana: number
    BusySpecialistsMana: number
    LSMENumTreesPerShot: number
    LSMENumWildsPerShot: number
    LSMETimeLimitSeconds: number
    LSMEPointAltAlterAmount: number
    HumanReincStartDelay: number
    LSMEWorldCoordRangeRaiseLower: number
    AOD2StatueSecsBeforeSeekShaman: number
    SuperWarriorBlastDamageShamanInVehiclePer256: number
}

declare interface PeopleTypeInfo
{
    AttackPower: number
    AutoGuardFreq: number
    BaseFightEnergy: number
    BaseHunger: number
    BaseThirst: number
    CanCarryWood: number
    ComputerConvManaCost: number
    ConvValue: number
    CPDefenceValue: number
    DefaultLife: number
    DrownAlt: number
    DrownRate: number
    FightPriority: number
    Flags: number
    GhostingValue: number
    GotoPointDistCheck: number
    GuardDiamCmd: number
    GuardDiamIdle: number
    HumanConvManaCost: number
    KilledValue: number
    LifeIncrease: number
    ManaValue: number
    MoveInfoIdx: number
    Radius: number
    SightCells: number
    SWBlastPer256: number
    ToolTipStrId1: number
    ToolTipStrId2: number
    TopState: number
    UnemployedState: number
    WoodCutTime: number
}

declare interface Person
{
    Life: number
    MaxLife: number
    Hunger: number
    Thirst: number
    TargetIdx: ObjectProxy
    WoodCarrying: number
    u: PersonThingData
}

declare interface PersonOwned
{
    BloodlustCount: number
    Count2: number
    FightGroup: number
    GuardPosSlot: number
    HypnoTime: number
    InHouseCount: number
    InvisibleCount: number
    LastDamageBy: number
    OnFireCount: number
    OriginalHypnoOwner: number
    ShieldCount: number
    SubState2: number
    SubState3: number
    SubState4: number
    TimeDoingNothing: number
    u: unknown
    AngleHasKilled: number
    MissileFireCount: number
    PreacherFlags: number
    ShamanFlags: number
    SpyDiscuiseOwner: number
}

declare interface PersonThingData
{
    Owned: PersonOwned
    Wild: PersonWild
}

declare interface PersonWild
{
    NextOwner: number
    ProcessSummon: number
    SummonInfo: unknown[] //length = 10
    TimeBeforeSummonable: number
    UnderInfluence: number
}

declare interface Player
{
    PlayerNum: TribeID
    StartNumPeople: number
    Mana: number
    NumPeople: number
    NumBuildings: number
    NumBuildingMarkers: number
    NumBuildingsOfType: number[] //length = 20
    NumBuiltOrPartBuiltBuildingsOfType: number[] //length = 20
    NumDeadSoulConverters: number
    NumGhostPeople: number
    NumLocalPeopleInBalloons: number[] //length = 9
    NumLocalPeopleInBoats: number[] //length = 9
    NumLocalPeopleInGuiState: number[][] //length = rows:9, cols:6
    NumLocalPeopleOfType: number[] //length = 9
    NumPeopleOfType: number[] //length = 9
    NumVehiclesOfType: number[] //length = 5
    NumWildToRepopulate: number
    ShamanLives: number
    ReincarnSiteCoord: Coord3D
    SpellsMana: number[] //length = 32
    PeopleKilled: number[] //length = 10
    SpellsCast: number[] //length = 22
    ManaTransferAmt: number
    ManaUnspent: number
    TotalManaIncr: number
    OptimalManaIncome: number
    ManaTransferCount: number
    ManaTransferRate: number
    NumPeopleConverted: number
    SpellDelayCount: number
    PlayerType: number
    PlayerActive: number
    MigratedPlayer: number
    DeadCount: number
}

declare interface PlayerContainer
{
    Shaman: Thing
    PlayerLists: ObjectList[] //length = 15
}

declare interface PlayerThings
{
    BuildingsAvailable: number
    BuildingsAvailableLevel: number
    BuildingsAvailableOnce: number
    Flags: number
    SpellsAvailable: number
    SpellsAvailableLevel: number
    SpellsAvailableOnce: number[] //length = 32
    SpellsNotCharging: number
    TrainingManOff: number
    VehiclesAvailable: number
}

declare interface Points3DWord
{
    WX: number
    WY: number
    WZ: number
}

declare interface PosAsXZ
{
    X: number
    Z: number
}

declare interface PreFight
{
    FighterIdxs: ObjectProxy[] //length = 2
    LinkBldgIdx: ObjectProxy
    Owner1: number
    Owner2: number
}

declare interface Scenery
{
    AltOffset: number
    BridgeIdx: ObjectProxy
    BridgeNum: number
    Cost: number[] //length = 8
    Duration: number
    Flags: number
    GrowthRate: number
    HeadType: number
    IsLandNum: number
    LevelDrawNum: number
    LinkTriggerIdx: ObjectProxy
    MaxScale: number
    PlayerEnroute: number
    PortalLevel: number
    PortalStatus: number
    PortalType: number
    ResourceRemaining: number
    ScaleIncr: number
    Type: number
    UnitsEnroute: number
    UserId: number
    WWThingIdx: number
}

declare interface SceneryTypeInfo
{
    DrawTableIdx: number
    ToolTipStrId: number
    DfltResourceValue: number
    DormantTime: number
    DrawNum: number
    DrownRate: number
    DrownAlt: number
    Colour: number
    TopState: number
    MoveInfoIdx: number
    ShadowDepth: number
    Flags: number
}

declare interface Shape
{
    AcquiredWood: number
    AttackDamageDelay: number
    BldgModel: number
    BldgThingIdx: ObjectProxy
    Flags: number
    LastDamangeBy: number
    NumWorkers: number
    Orient: number
    OriginMapIdx: number
    OtherWallAlt: number
    ShapeIdx: number
    TimeOut: number
    WorkerIdxs: ObjectProxy[] //length = 20
}

declare interface ShotGeneral
{
    Count: number
    Count2: number
    EffectModel: number
    EffectNumParams: number
    EffectParams: number[] //length = 4
    EffectType: number
    Flags: number
    ItemDuration: number
    ItemsPerTurn: number
    ItemThingIdxs: ObjectProxy[] //length = 6
    ShotThingParent: number
    SpecialThingIdxs: ObjectProxy[] //length = 2
    SpeedPerItem: number
    StartCoord: Coord3D
    TargetCoord: Coord3D
    TargetThingIdx: ObjectProxy
}

declare interface SoulConverter
{
    BeamClr: number
    Count: number
    CurrModel: number
    FallenToGround: number
    NumReturns: number
    ReturnBldgIdx: ObjectProxy
    ReturnModel: number
    ReturnOwner: number
    SoulManIdx: ObjectProxy
    WoodUnitsToDrop: number
}

declare interface SpellGeneral
{
    ChargePlayer: number
    Shot2StartCoord: Coord3D
    ShotThingIdx: ObjectProxy
    TargetCoord: Coord3D
    TargetThingIdx: ObjectProxy
}

declare interface SpellsTypeInfo
{
    Active: number
    NetworkOnly: number
    Cost: number
    Model: number
    GUIButtonId: number
    CursorSpriteNum: number
    DiscoveryDrawIdx: number
    AvailableSpriteIdx: number
    NotAvailablePriteIdx: number
    ClickedSpriteIdx: number
    ToolTipStrIdx: number
    ToolTipStrIdxLSME: number
    Flags: number
    WorldCoordRange: number
    WorldCoordRangeLSME: number
    OneOffMaximum: number
    LSMEOneOffMaximum: number
    ShieldReboundable: number
    PanelSampleIdx: number
    PanelSampleCount: number
    PanelSampleType: number
    CreateCastMsg: number
    CastMsgTimeout: number
    EncyclPage: number
    OptimalChargeSecs: number
    DrawOffsetX: number
    DrawOffsetY: number
    ShotModels: number[] //length = 2
    EffectModels: number[] //length = 5
}

declare interface SpriteCircles
{
    Colour: number
    Duration: number
    RadiusCurr: number
    RadiusEnd: number
    RadiusIncr: number
    RadiusStart: number
}

declare interface TIDThing
{
    CellResourceValue: number
    GuardianPersonIdx: ObjectProxy
    PersonFightingBldgIdx: ObjectProxy
    TIDIdx: number
    TIDTypeCode: number
    TIDTypeFlags: number
}

declare interface TbSprite
{
    Data: unknown 
    Height: number
    Width: number
}

declare interface Thing
{
    Type: number
    Model: number
    Owner: TribeID
    TimeSlice: number
    ThingNum: number
    AngleXZ: number
    Flags: number
    Flags2: number
    Flags3: number
    LastAttackCountDown: number
    CurrNumAttackers: number
    State: number
    SubState: number
    MoveInfoIdx: number
    DrawInfo: DrawInfo
    Move: Movement
    Pos: ThingPos
    InterpolatePosInc: ThingPos
    InterpolateAngleXZInc: number
    u: ThingTypeData
}

declare interface ThingPos
{
    D2: Coord2D
    D3: Coord3D
    D3Debug: Coord3DDebug
}

declare interface ThingTypeData
{
    AODDrawThing: AODDrawThing
    Beacon: Beacon
    Blast: Blast
    Bldg: Building
    BridgeControl: BridgeControl
    Creature: Creature
    Discovery: Discovery
    DiscoveryMarker: DiscoveryMarker
    DormantTree: DormantTree
    DrawnAtInfo: DrawnAtInfo
    DTBeacon: DTBeacon
    Effect: EffectGeneral
    Fight: Fight
    Formation: Formation
    General: General
    GuardControl: GuardAreaControl
    MedManAttract: MedManAttract
    ObjectInfo: ObjectThingInfo
    ObjFace: ObjectFaceThing
    Pers: Person
    Platform: unknown
    PreFight: PreFight
    Scenery: Scenery
    Shape: Shape
    Shot: ShotGeneral
    SoulConverter: SoulConverter
    SoulMan: unknown
    Spell: SpellGeneral
    SprCircles: SpriteCircles
    TIDThing: TIDThing
    Trigger: Trigger
    Vehicle: Vehicle
    WDC: WoodDistribControl
    Whirlwind: EffectWhirlwind
}

declare interface ThingTypeInfo
{
    Flags: number
    ListFlags: number
    NumModels: number
}

declare interface ThisLevelInfo
{
    Discoveries: DiscoveryDescription[] //length = 3
    PlayerThings: PlayerThings[] //length = 10
    Attribs: ComputerAttributes[] //length = 10
    Allies: number[] //length = 10
    ScriptInfo: unknown[] //length = 10
    ObjectiveData: unknown
}

declare interface Trigger
{
    CellRadius: number
    Counts: number[] //length = 10
    CountToReactive: number
    CreatePlayerOwned: number
    CurrRadius: number
    EditorThingIdx: number[] //length = 10
    Flags: number
    HeadThingIdx: ObjectProxy
    InactiveTime: number
    NumOccurences: number
    NumPlayersCurrPraying: number
    OriginalInactiveTime: number
    PrayCount: number
    PrayTime: number
    RandomValue: number
    ResetCount: number
    StartInactive: number
    TriggerCount: number
    TriggeredPendingCount: number
    TriggeringLastTouchedPlayer: number
    TriggeringPlayer: number
    TriggerType: number
}

declare interface Vehicle
{
    CollideWait: number
    DelayBeforeSendingHome: number
    FightGroup: number
    Flags: number
    LastUserOwner: number
    Life: number
    NextNavRegenCount: number
    NumOccupants: number
    OccupantChangeCount: number
    Occupants: unknown[] //length = 12
    StuckAngleIncr: number
    StuckCount: number
    VerticalSpeed: number
    WaitCount: number
}

declare interface VehicleTypeInfo
{
    DefaultLife: number
    ObjectIdx: number
    ToolTipStrId: number
    MaxNumOccupants: number
    PositionTableIdx: number
    StandState: number
    TravelState: number
    ExitBldgAlt: number
    GroundClearance: number
    BoardingDist: number
    WoodValue: number
    Flags: number
}

declare interface WoodDistribControl
{
    WoodDistribControl: unknown[] //length = 16
}

declare interface lists
{
    FreeList: ObjectList
    TypeList: ObjectList[][] //length = rows:12 cols:96
    UsedList: ObjectList
}