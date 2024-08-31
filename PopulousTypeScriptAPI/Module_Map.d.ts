/** @noSelfInFile */

declare function MAP_XZ_2_WORLD_XYZ(mapPos: MapPosXZ, coords: Coord3D): Coord3D
declare function MAP_XZ_2_WORLD_XYZ(x: number, z: number): Coord3D

declare function MAP_ELEM_PTR_2_IDX(elem: MapElement): number

declare function ensure_point_on_ground(coords: Coord3D): void

declare function is_map_point_land(coords: Coord2D): cbool

declare function is_sub_cell_walkable_in_direction(x: number, z: number, direction: number): cbool

declare function is_map_cell_a_building_belonging_to_player(cell: number, player: number): cbool

declare function is_map_cell_n_squares_away_from_other_owned_building(arg0: number, arg1: number, arg2: number): cbool

declare function is_map_cell_flat_and_land(cell: number): cbool

declare function is_map_cell_flat(cell: number): cbool

declare function is_map_cell_land(cell: number): cbool

declare function is_map_point_sea(coords: Coord2D): cbool

declare function is_map_cell_near_coast(cell: number, radius: number): cbool

declare function is_map_cell_bldg_markable(player: Player, cell: number, arg2: number, arg3: number, arg4: number, arg5: number): cbool

declare function is_cell_markable_with_near_bldgs_and_markers(cell: number, arg1: number, arg2: number): cbool

declare function are_list_map_elems_flat(elemList: unknown, arg1: number): cbool

declare function are_surround_cells_too_steep_for_building(arg0: number, arg1: number): cbool

declare function are_surround_cells_too_steep_for_wall(arg0: number): cbool

declare function are_surround_cells_all_land(arg0: number): cbool

declare function get_world_dist_xyz(coords1: Coord3D, coords2: Coord3D): number

declare function get_coastline_point(coords: Coord2D, elem: MapElement, arg2: number): number

declare function get_max_and_min_alts_for_cell(cell: Coord2D, max_ptr: number, min_ptr: number): void

declare function get_max_alt_diff_for_coord2d(coords: Coord2D): number

declare function get_shade_from_dir_code(arg0: number): number

declare function get_max_alt_diff_for_cell(cell: number): number

declare function get_map_square_from_map_idxs(square: unknown, arg1: number, arg2: number): number

declare function get_map_elem_list_average_alt(elemList: unknown, arg1: number): number

declare function get_cell_surround_map_element(cell: number, elemId: number): MapElement

declare function get_closest_map_cell_thing_type(arg0: number, arg1: number, coords1: number, coords2: number): Thing

declare function get_world_dist_xz(coords1: Coord2D, coords2: Coord2D): number

declare function get_dist_xz_cell_quick(coords1: number, coords2: number): number

declare function get_world_dist_xz_quick(coords1: Coord2D, coords2: Coord2D): number

declare function get_world_dist_xyz_quick(coords1: Coord3D, coords2: Coord3D): number

declare function get_world_dist_xz_cell(cell1: number, cell2: number): number

declare function get_wrap_dist_1d(arg0: number, arg1: number): number

declare function get_signed_wrap_world_dist_1d(arg0: number, arg1: number): number

declare function world_coord2d_to_map_ptr(coords: Coord2D): MapElement

declare function world_coord3d_to_map_ptr(coords: Coord3D): MapElement

declare function world_coord2d_to_map_idx(coords: Coord2D): number

declare function world_coord3d_to_map_idx(coords: Coord3D): number

declare function map_ptr_to_world_coord2d(elem: MapElement, coords: Coord2D): void

declare function map_ptr_to_world_coord2d_centre(elem: MapElement, coords: Coord2D): void

declare function map_idx_to_world_coord2d(idx: number, coords: Coord2D): void

declare function map_idx_to_world_coord2d_centre(idx: number, coords: Coord2D): void

declare function map_idx_sub_cell_to_world_coord2d_centre(cell: number, coords: Coord2D): void

declare function map_idx_to_world_coord3d(idx: number, coords: Coord3D): void

declare function map_idx_to_world_coord3d_centre(idx: number, coords: Coord3D): void

declare function map_idx_to_world_coord3d_no_alt(idx: number, coords: Coord3D): void

declare function map_idx_to_world_coord3d_centre_no_alt(idx: number, coords: Coord3D): void

declare function map_xz_to_world_coord2d(x: number, z: number, coords: Coord2D): void

declare function world_to_in_cell_position(cell: number): number

declare function world_coord_start_of_cell(cell: number): number

declare function get_map_elem_collide_table_idx(elem: MapElement): number

declare function set_map_elem_collide_table_idx(elem: MapElement, idx: number): void

declare function is_map_elem_warrior_in_drum_tower_flag_set_for_player(elem: MapElement, player: number): cbool

declare function is_map_elem_coast(elem: MapElement): cbool

declare function is_map_elem_all_land(elem: MapElement): cbool

declare function is_map_elem_all_sea(elem: MapElement): cbool

declare function is_map_elem_all_grass(elem: MapElement): cbool

declare function is_map_elem_sea_or_coast(elem: MapElement): cbool

declare function is_map_elem_land_or_coast(elem: MapElement): cbool

declare function is_coord2d_at_cell_centre(coords: Coord2D): cbool

declare function centre_coord_on_block(coords: Coord2D): void

declare function centre_coord3d_on_block(coords: Coord3D): void

declare function zero_coord_on_block(coords: Coord2D): void

declare function randomize_coord_on_block(coords: Coord2D): void

declare function zero_coord3d_on_block(coords: Coord3D): void

declare function is_building_on_map_cell(cell: number): cbool

declare function ensure_thing_on_ground(thing: Thing): void

declare function ensure_point_above_ground(coords: Coord3D): void

declare function is_map_cell_obstacle_free(cell: number): cbool

declare function is_thing_on_ground(thing: Thing): cbool

declare function is_coord_on_ground(coords: Coord3D): cbool

declare function is_point_too_steep_for_moving_thing(coords: Coord2D, thing: Thing): cbool

declare function is_point_steeper_than(coords: Coord2D, arg1: number): cbool

declare function is_cell_too_steep_for_building(cell: number, arg1: number): cbool

declare function is_cell_too_steep_for_building_destroy(cell: number, arg1: number): cbool

declare function coord2D_to_coord3D(srcCoords: Coord2D, dstCoords: Coord3D): void

declare function coord3D_to_coord2D(srcCoords: Coord3D, dstCoords: Coord2D): void

declare function get_four_surround_map_cell_info(coords: Coord2D, elemList: unknown): void

declare function get_four_alt_surround_map_cell_info(arg0: number, elemList: unknown): void

declare function get_nine_surround_map_cell_info(coords: Coord2D, elemList: unknown): void

declare function coord2d_to_jnav_point(coords: Coord2D, waypoint: unknown): void

declare function jnav_point_to_coord2d(waypoint: unknown, coords: Coord2D): void

declare function get_jnav_point_dist_sq(waypoint1: unknown, waypoint2: unknown): number

declare function get_jnav_thing_start_and_end_points(thing: Thing, waypoint1: unknown, waypoint2: unknown): void

declare function are_coords_on_same_map_cell(coords1: Coord2D, coords2: Coord2D): cbool

declare function set_map_elem_owner(elem: MapElement, team: TribeID): void

declare function validate_thing_coord(coords: Coord3D, thing: Thing): void

declare function increment_map_idx_by_orient(pos: MapPosXZ, arg1: number): void

declare function set_map_elem_object_shadow(elem: MapElement, shadow: number): void

declare function get_map_elem_object_shadow(elem: MapElement): number

declare function set_map_elem_lava_num(elem: MapElement, num: number): void

declare function get_map_elem_lava_num(elem: MapElement): number

declare function point_altitude_with_objects(wx: number, wz: number): number

declare function point_altitude(wx: number, wz: number): number

declare function set_square_map_params(arg0: number, arg1: number, arg2: number): void

declare function affect_mapwho_area(arg0: number, arg1: number, arg2: number): void

declare function SearchMapCells(
    shape: SearchShapeType,
    arg1: 0,
    arg2: 0,
    radius: number,
    coord_idx: number,
    action: (this: void, elem: MapElement) => void
): void

declare function SearchMapCellsXZ(
    arg0: number,
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: number,
    action: (elem: MapElement) => void
): void
