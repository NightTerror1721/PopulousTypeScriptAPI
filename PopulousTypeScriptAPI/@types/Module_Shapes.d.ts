/** @noSelfInFile */

/** @compileMembersOnly  */
declare enum SearchShapeType
{
    SQUARE,
    CIRCULAR
}

declare function process_shape_map_elements(map_cell_data: number, building_model: number, orient: number, tribe: number, mode: number): void

declare function is_shape_valid_at_map_pos(map_cell_data: number, building_model: number, orient: number, tribe: number): number