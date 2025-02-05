# TypeScript Type 'void' is not assignable to type 'number' Bug

This repository demonstrates a common TypeScript error: 'Type 'void' is not assignable to type 'number'. This error occurs when a function is declared to return a number, but the function's implementation does not return a value in all code paths.  The compiler infers the return type as 'void' in the for loop, which conflicts with the function's declared return type of 'number'.

## How to Reproduce

1. Clone this repository.
2. Open `bug.ts`.
3. Run `tsc bug.ts` to compile the code. You'll see the compiler error.

## Solution

The solution is to ensure that the function returns a number in all code paths.  This can be done by adding a return statement that returns a number after the for loop.  See `bugSolution.ts` for a corrected version of the code.

## Additional Notes

This error highlights the importance of specifying and consistently adhering to the return types of functions in TypeScript. TypeScript's type system helps catch such errors during development, preventing runtime surprises.