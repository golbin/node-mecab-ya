declare interface callback {
    (error: Error | undefined, result: Array<object> | undefined): void;
}

/**
 *
 * @param {string} text
 * @param {callback} callback
 */
export declare function pos(
    text: string,
    callback: (
        error: Error | undefined,
        result: Array<object> | undefined
    ) => void
): void;

/**
 *
 * @param {string} text
 * @param {callback} callback
 */
export declare function morphs(
    text: string,
    callback: (
        error: Error | undefined,
        result: Array<object> | undefined
    ) => void
): void;

/**
 *
 * @param {string} text
 * @param {callback} callback
 */
export declare function nouns(
    text: string,
    callback: (
        error: Error | undefined,
        result: Array<object> | undefined
    ) => void
): void;

/**
 *
 * @param {string} text
 * @param {callback} callback
 */
export declare function all(
    text: string,
    callback: (
        error: Error | undefined,
        result: Array<object> | undefined
    ) => void
): void;

/**
 *
 * @param {string} text
 * @returns {Array<object>}
 */
export declare function posSync(text: string): Array<object>;

/**
 *
 * @param {string} text
 * @returns {Array<object>}
 */
export declare function morphsSync(text: string): Array<object>;

/**
 *
 * @param {string} text
 * @returns {Array<object>}
 */
export declare function nounsSync(text: string): Array<object>;

/**
 *
 * @param {string} text
 * @returns {Array<object>}
 */
export declare function allSync(text: string): Array<object>;
