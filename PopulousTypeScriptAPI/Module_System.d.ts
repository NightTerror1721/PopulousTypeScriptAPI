/** @noSelfInFile */

declare function assertmsg(test: boolean, message: string): void

declare function assert(test: boolean): void

declare function load_script(script_path: string): boolean

declare function remove_script(script_path: string): void

declare function OBJECT_BREAK(): void

declare function __save_script_header(script_path: string, header_path?: string): void

declare function get_script_filepath(script: string): string

declare function fatalError(error_message: string): void

declare function log(message: string): void
