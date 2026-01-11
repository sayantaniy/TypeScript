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
