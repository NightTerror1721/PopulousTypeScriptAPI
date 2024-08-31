/** @noSelfInFile */

declare function is_person_selectable(person: Thing, tribe: TribeID): boolean

declare function is_aod2_post_swoop_path_valid(thing: Thing, arg1: number): boolean

declare function is_spy_in_process_of_disguising(spy: Thing): boolean

declare function is_person_a_spy_disguised_as_me(thing: Thing, arg1: number): boolean

declare function is_person_guarding(person: Thing): boolean

declare function is_person_preaching(person: Thing): boolean

declare function is_person_currently_praying_at_head(person: Thing): boolean

declare function is_person_currently_attacking_a_building(person: Thing): boolean

declare function is_aod2_swoop_path_valid(thing1: Thing, thing2: Thing): boolean

declare function is_person_currently_watching_a_fight(person: Thing): boolean

declare function is_person_guarding_map_idx(person: Thing, map_idx: number): boolean

declare function is_a_new_wild_man_allowed(): boolean

declare function is_person_available_for_auto_employment(person: Thing): boolean

declare function is_map_elem_waitable_on(elem: MapElement): boolean

declare function is_free_space_point_waitable_on(freeThingInfo: unknown, thing: Thing): boolean

declare function is_target_an_ally(thing1: Thing, thing2: Thing): boolean

declare function is_person_in_any_vehicle(person: Thing): boolean

declare function is_person_in_drum_tower(person: Thing): boolean

declare function is_person_in_bldg_training(person: Thing): boolean

declare function is_person_in_training_bldg(person: Thing): boolean

declare function is_thing_targetable(thing: Thing): boolean

declare function is_person_valid_fight_target(person: Thing, target: Thing): boolean

declare function is_person_valid_fight_target_for_person_type(person: Thing, target: Thing): boolean

declare function is_person_airborne_valid_fight_target(person: Thing, target: Thing): boolean

declare function is_person_in_fight_targetable_state(person: Thing): boolean

declare function is_person_in_bldg_valid_preacher_target(person: Thing): boolean

declare function is_fighter_in_valid_state(fighter: Thing): boolean

declare function is_person_on_a_shape(person: Thing): boolean

declare function is_person_on_a_building(person: Thing): boolean

declare function is_person_on_a_shape_or_building(person: Thing): boolean

declare function is_person_stationery(person: Thing): boolean

declare function is_person_accepting_commands(person: Thing): boolean

declare function is_person_in_boat(person: Thing): boolean

declare function is_person_in_airship(person: Thing): boolean

declare function is_person_driver_in_any_vehicle(person: Thing): boolean

declare function does_vehicle_contain_given_person_model(vehicle: Thing, person_model: number): boolean

declare function get_person_unemployed_state(person: Thing): number

declare function get_final_spy_disguise_owner(spy: Thing): number

declare function get_spy_disguise_owner(spy: Thing): number

declare function get_aod2_path_info(aod: Thing, arg1: number, arg2: number, coords: Coord2D): void

declare function get_first_person_using_guard_beacon(thing: Thing, arg1: number): Thing

declare function get_nearest_valid_person_base_coord(person: Thing, out_coords: Coord2D): boolean

declare function get_person_top_state(person: Thing): number

declare function set_near_people_suprised_by_player_event(arg0: number, coords: Coord2D, arg2: number): void

declare function set_aod2_draw_info(aod: Thing, arg1: number, arg2: number): void

declare function set_final_spy_disguise_owner(spy: Thing, disguise_owner: number): void

declare function set_spy_in_process_of_disguising(spy: Thing, process: number): void

declare function set_spy_disguise_owner(spy: Thing, disguise_owner: number): void

declare function set_shamans_base_pos_toward_players_camera(arg0: number): void

declare function set_person_draw_info_by_ptai_with_airborne_checking(person: Thing, arg1: number): void

declare function set_person_varied_stand_or_cheer_anim(person: Thing, arg1: number): void

declare function set_person_cheering_speed_and_anim(person: Thing): void

declare function set_all_players_people_flag(arg0: number, arg1: number): void

declare function set_person_standing_speed_and_anim(person: Thing): void

declare function set_person_drowning_speed_and_anim(person: Thing): void

declare function set_person_running_speed_and_anim(person: Thing): void

declare function set_person_attacking_speed_and_anim(person: Thing): void

declare function set_person_working_speed_and_anim(person: Thing): void

declare function set_person_last_damaging_player(person: Thing, tribe: number): void

declare function set_preacher_preaching(preacher: Thing): void

declare function set_selected_status_of_all_in_vehicle(thing: Thing, arg1: number, thing_out: Thing): number

declare function set_person_top_state(person: Thing): boolean

declare function set_person_new_state(person: Thing, state: number): boolean

declare function set_person_lost_control(person: Thing): void

declare function set_person_fast_self_power_speed(person: Thing): void

declare function set_person_standing_anim(person: Thing): void

declare function set_person_drowning_anim(person: Thing): void

declare function set_person_running_anim(person: Thing): void

declare function set_person_fleeing_anim(person: Thing): void

declare function set_person_flying_anim(person: Thing): void

declare function set_person_working_anim(person: Thing): void

declare function set_person_jumping_anim(person: Thing): boolean

declare function set_person_punching_anim(person: Thing): void

declare function set_person_flinching_anim(person: Thing): void

declare function set_person_pushing_anim(person: Thing): void

declare function set_person_pushed_anim(person: Thing): void

declare function set_person_sitting_anim(person: Thing): number

declare function set_person_kicking_anim(person: Thing): void

declare function set_special_person_fire_missile_anim(person: Thing): void

declare function set_person_valid_curr_base_coord(person: Thing, coords: Coord2D): void

declare function set_special_move_case_flag(person: Thing, flags: number): void

declare function set_person_failed_navigation(person: Thing): void

declare function unmask_spy(spy: Thing): void

declare function explode_angel_of_death(aod: Thing): void

declare function people_see_if_should_help_build_house(thing: Thing): number

declare function convert_wild_man_into_brave(wildman: Thing, tribe: TribeID, coords: Coord2D): Thing

declare function check_enemy_presence_alert_triggering(enemy: Thing): boolean

declare function create_wild_man_converted_effect(wildman_converted_effect: Thing, coords: Coord2D): void

declare function check_moving_thing_in_control(thing: Thing): boolean

declare function search_map_for_drinking_point(coords1: Coord2D, coords2: Coord2D, arg2: number, arg3: number): boolean

declare function search_map_food_for_person(thing: Thing, arg1: number): Thing

declare function change_persons_bldg_dwelling_status(person: Thing, status: number): void

declare function change_persons_vehicle_occupancy_status(person: Thing, status: number): void

declare function person_drop_carrying_wood(person: Thing, flag: boolean): void

declare function damage_person(victim: Thing, damaging_tribe: TribeID, damage_value: number, ignore_shield: cbool|boolean): void

declare function validate_any_return_fire_target(target: Thing): void

declare function create_brave_person_thing(tribe: number, coords: Coord3D): Thing

declare function person_goto_point(person: Thing, arg1: boolean, point: Coord2D): void
