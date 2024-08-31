/** @noSelfInFile */

declare function is_cmd_relevant_for_person_model(arg0: number, arg1: number): boolean

declare function is_pray_coord_occupied_by_another(pray: Thing, coord: Coord2D): boolean

declare function is_guard_area_point_valid(coord: Coord2D): boolean

declare function is_person_at_cmd_point_dest_exact(person: Thing, commands: Commands): boolean

declare function is_person_at_cmd_point_dest(person: Thing, commands: Commands): boolean

declare function is_flatten_cmd_area_valid(coord: Coord2D): boolean

declare function is_cmd_relevant_for_person(person: Thing, commandId: number): boolean

declare function is_coord_valid_for_reincarnation_site(coord: Coord2D, tribeId: TribeID): boolean

declare function is_person_near_cmd_area(person: Thing, commands: Commands): boolean

declare function is_person_ready_near_attack_area(person: Thing, commands: Commands): boolean

declare function get_thing_curr_cmd_list_ptr(thing: Thing): Commands

declare function set_non_context_sensitive_cmd_menu_cmd_command_type(): void

declare function set_players_awaiting_peoples_commands_of_type(player: Player, arg1: number, arg2: number, arg3: number): number

declare function set_persons_current_command_complete(thing: Thing): void

declare function set_persons_command_complete(thing: Thing, commandId: number): void

declare function set_persons_next_command(thing: Thing): number

declare function set_my_players_context_commands_info(arg0: number): void

declare function set_persons_post_command_base_pos(thing: Thing, commands: Commands): void

declare function set_cmd_menu_hilite_item_from_coord(x: number, z: number): void

declare function set_cmd_accept_menu_info(): void

declare function set_curr_cmd_menu_item_by_cmd_type(cmd_type: number): void

declare function set_cmd_menu_dflt_drag_area_sizes(): void

declare function set_players_people_last_group_flag(player: Player): void

declare function update_cmd_list_entry(commands: Commands, arg1: number, cmdInfo: CmdTargetInfo, arg3: number): void

declare function remove_all_persons_commands(thing: Thing): void

declare function add_persons_command(thing: Thing, commands: Commands, arg2: number): void

/**Command the person to go somewhere. */
declare function command_person_go_to_coord2d(person: Thing, coords: Coord2D): void

/**Command the person to enter a building. */
declare function command_person_go_into_building(person: Thing, building: Thing): number

/**Command the person to help construct a building. */
declare function command_person_build_building(person: Thing, building: Thing): number

/**Command the person to follow another person. */
declare function command_person_follow_person_idx(person: Thing, person_idx: number): number

/**Command the person to enter a vehicle. */
declare function command_person_enter_vehicle(person: Thing, vehicle: Thing): number

/**Command the person to burn a building. */
declare function command_person_sabotage_bldg_ptr(person: Thing, vehicle: Thing): number
