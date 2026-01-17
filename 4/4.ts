/* ===============================
   TYPE ASSERTION
   =============================== */

// Telling TypeScript to treat a value as a specific type
let value: unknown = "Hello";

let len1: number = (value as string).length; // preferred
let len2: number = (<string>value).length;   // not used in .tsx


/* ===============================
   TYPE CASTING (JS-style)
   =============================== */

// Runtime conversion (not TypeScript-specific)
let numStr = "42";

let num1 = Number(numStr); // number
let num2 = parseInt(numStr);


/* ===============================
   NON-NULL ASSERTION OPERATOR (!)
   =============================== */

// Tells TS: "this value is NOT null or undefined"
let input = document.getElementById("app")!;

input.innerHTML = "Hello";

/* Use carefully — no runtime check */


/* ===============================
   MODULES
   =============================== */

// Any file with export/import is a module
// Each file has its own scope


/* ===============================
   EXPORTING
   =============================== */

// Named export
export const PI = 3.14;
export function add(a: number, b: number) {
  return a + b;
}

// Export at bottom
const name = "TS";
export { name };


/* ===============================
   IMPORTING
   =============================== */

// Named import
import { PI, add } from "./math";

// Rename import
import { PI as CirclePI } from "./math";


/* ===============================
   DEFAULT EXPORT
   =============================== */

// Only ONE default export per file
export default function greet() {
  console.log("Hello");
}

// OR
const user = "Sayantani";
export default user;


/* ===============================
   DEFAULT IMPORT
   =============================== */

import greet from "./greet";
import user from "./user";
