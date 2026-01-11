/* =========================================================
   TYPESCRIPT BASIC & PRIMITIVE TYPES — QUICK NOTES
   ========================================================= */

/* ---------- 1. NUMBER ---------- */
// Used for integers, floats, hex, binary
let age: number = 21;
let price: number = 99.99;
let hex: number = 0xff;

/* ---------- 2. STRING ---------- */
// Text values, supports template literals
let firstName: string = "Sayantani";
let greeting: string = `Hello, ${firstName}`;

/* ---------- 3. BOOLEAN ---------- */
// true or false
let isLoggedIn: boolean = true;

/* =========================================================
   ARRAYS
   ========================================================= */
// Two ways to define arrays

let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["A", "B", "C"];

// Mixed types using union
let mixedArray: (number | string)[] = [1, "hello"];

/* =========================================================
   TUPLES
   ========================================================= */
// Fixed length + fixed type order
let user: [number, string, boolean];
user = [1, "Admin", true];

// Access via index
user[1]; // string

/* =========================================================
   ENUMS
   ========================================================= */
// Set of named constants

enum Direction {
  Up,      // 0
  Down,    // 1
  Left,    // 2
  Right    // 3
}

let move: Direction = Direction.Up;

// String enum
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE"
}

/* =========================================================
   ANY
   ========================================================= */
// Disables type checking (AVOID if possible)
let randomValue: any = 10;
randomValue = "text";
randomValue = true;

/* =========================================================
   UNKNOWN
   ========================================================= */
// Safer than any — requires type checking before use
let inputValue: unknown = "Hello";

if (typeof inputValue === "string") {
  console.log(inputValue.toUpperCase());
}

/* =========================================================
   VOID
   ========================================================= */
// Function returns nothing
function logMessage(msg: string): void {
  console.log(msg);
}

/* =========================================================
   NULL & UNDEFINED
   ========================================================= */
// null → intentional absence of value
// undefined → value not assigned yet

let emptyValue: null = null;
let notAssigned: undefined = undefined;

// Common real-world usage
let result: string | null = null;

/* =========================================================
   NEVER
   ========================================================= */
// Function that NEVER returns
// (throws error or infinite loop)

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

/* =========================================================
   SUMMARY (MENTAL MAP)
   =========================================================
   number      → numeric values
   string      → text
   boolean     → true / false
   array       → list of values
   tuple       → fixed-size array
   enum        → named constants
   any         → no type safety
   unknown     → safe any
   void        → no return
   null        → empty value
   undefined   → not initialized
   never       → no possible value
   ========================================================= */

   /* =========================================================
   TYPESCRIPT: TYPE INFERENCE & TYPE ANNOTATIONS
   ========================================================= */

/* =========================================================
   1. TYPE INFERENCE (WHAT IS IT?)
   ========================================================= */
// TypeScript automatically guesses the type
// based on the assigned value.

let count = 10;
// inferred as: number
// count = "ten" ❌ error

let username = "Sayantani";
// inferred as: string

let isAdmin = false;
// inferred as: boolean

/* =========================================================
   2. WHY TYPE INFERENCE IS IMPORTANT
   ========================================================= */
// Less code, still type-safe
// Cleaner & readable
// Avoids unnecessary annotations

let score = 95;        // number
let city = "Kolkata";  // string

/* =========================================================
   3. TYPE INFERENCE WITH ARRAYS
   ========================================================= */

let nums = [1, 2, 3];
// inferred as: number[]

let mixed = [1, "hello", true];
// inferred as: (number | string | boolean)[]

/* =========================================================
   4. TYPE INFERENCE WITH OBJECTS
   ========================================================= */

let user1 = {
  id: 1,
  name: "Admin",
  isActive: true
};
// inferred shape:
// {
//   id: number;
//   name: string;
//   isActive: boolean;
// }

// user.id = "one" ❌ error

/* =========================================================
   5. TYPE INFERENCE WITH FUNCTIONS
   ========================================================= */

// Return type inferred automatically
function add(a: number, b: number) {
  return a + b;
}
// inferred return type: number

// Inference works BEST for return values,
// NOT for parameters

/* =========================================================
   6. TYPE ANNOTATIONS (WHAT IS IT?)
   ========================================================= */
// Explicitly telling TypeScript the type

let age1: number = 21;
let email: string = "test@mail.com";
let loggedIn: boolean = true;

/* =========================================================
   7. WHEN TO USE TYPE ANNOTATIONS
   ========================================================= */

// 1️⃣ When declaring variables without value
let value: number;
// value = "hi" ❌ error
value = 100;

// 2️⃣ Function parameters (IMPORTANT)
function greet(name: string) {
  return `Hello ${name}`;
}

// 3️⃣ Function return type (optional but good practice)
function multiply(a: number, b: number): number {
  return a * b;
}

/* =========================================================
   8. TYPE ANNOTATIONS WITH ARRAYS
   ========================================================= */

let marks: number[] = [90, 80, 85];
let names1: Array<string> = ["A", "B"];

/* =========================================================
   9. TYPE INFERENCE vs TYPE ANNOTATION
   ========================================================= */

// Inference (recommended when obvious)
let total = 50;

// Annotation (when unclear or empty)
let result1: number;

/*
   Inference → TypeScript guesses
   Annotation → You specify
*/

/* =========================================================
   10. BAD PRACTICE (OVER-ANNOTATION)
   ========================================================= */

// ❌ Redundant
let price1: number = 100;

// ✅ Better
let price2 = 100;

/* =========================================================
   SUMMARY (EXAM / INTERVIEW READY)
   =========================================================
   Type Inference:
   - TS automatically assigns types
   - Happens during initialization
   - Makes code shorter & safer

   Type Annotation:
   - Manually defining types
   - Needed for function params
   - Needed when value is undefined

   RULE:
   → Let TS infer when possible
   → Annotate when necessary
   ========================================================= */
