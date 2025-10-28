//Documenting code using comments was discussed earlier
//It’s possible to use structured comments to create high quality documentation that can also be utilised by the IDE
/**
 * Applies a callback function to each element of an array and returns a new array with the results.
 *
 * @template T - The type of elements in the input array.
 * @template U - The type of elements in the output array.
 * @param items - The array to iterate over.
 * @param fn - A callback function that takes an element of type `T` and returns a value of type `U`.
 * @returns A new array containing the results of applying the callback function to each element of the input array.
 *
 * @example
 * ```typescript
 * const numbers = [1, 2, 3];
 * const doubled = map(numbers, (x) => x * 2);
 * console.log(doubled); // [2, 4, 6]
 * ```
 */
function map<T, U>(items: T[], fn: (item: T) => U): U[] {
    let result: U[] = [];
    for (let item of items) {
        result.push(fn(item));
    }
    return result;
}

console.log(map([1, 2, 3], (x) => x * 2)); // [2,4,6]

//to see it working, type console.log(map( in the editor))

// VS Code will display detailed documentation, based on the TSDoccomment, whenever you use this function in your application
// Comments in TS can be extracted to HTML documentation using TypeDoc(https://typedoc.org)
// Using TSDoc comments over standard comments will improve the quality of this external documentation


