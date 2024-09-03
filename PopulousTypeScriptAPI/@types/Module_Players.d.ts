/** @noSelfInFile */

declare function computer_set_base_pos(player: Player, x: number, z: number): void

declare function computer_init_player(player: Player): void

declare function set_players_shaman_initial_command(player: Player): void

declare function destroy_reinc(player: Player): void

declare function transfer_tribe_to_another_player(tribe1: TribeID, tribe2: TribeID): void

declare function are_players_allied(tribe1: TribeID, tribe2: TribeID): boolean

declare function set_players_enemies(tribe1: TribeID, tribe2: TribeID): void

declare function set_players_allied(tribe1: TribeID, tribe2: TribeID): void

declare function getPlayer(tribe: TribeID): Player