"use strict";
/* =========================================================
   TYPESCRIPT BASIC & PRIMITIVE TYPES — QUICK NOTES
   ========================================================= */
Object.defineProperty(exports, "__esModule", { value: true });
/* ---------- 1. NUMBER ---------- */
// Used for integers, floats, hex, binary
let age = 21;
let price = 99.99;
let hex = 0xff;
/* ---------- 2. STRING ---------- */
// Text values, supports template literals
let firstName = "Sayantani";
let greeting = `Hello, ${firstName}`;
/* ---------- 3. BOOLEAN ---------- */
// true or false
let isLoggedIn = true;
/* =========================================================
   ARRAYS
   ========================================================= */
// Two ways to define arrays
let numbers = [1, 2, 3];
let names = ["A", "B", "C"];
// Mixed types using union
let mixedArray = [1, "hello"];
/* =========================================================
   TUPLES
   ========================================================= */
// Fixed length + fixed type order
let user;
user = [1, "Admin", true];
// Access via index
user[1]; // string
/* =========================================================
   ENUMS
   ========================================================= */
// Set of named constants
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3
})(Direction || (Direction = {}));
let move = Direction.Up;
// String enum
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Failure"] = "FAILURE";
})(Status || (Status = {}));
/* =========================================================
   ANY
   ========================================================= */
// Disables type checking (AVOID if possible)
let randomValue = 10;
randomValue = "text";
randomValue = true;
/* =========================================================
   UNKNOWN
   ========================================================= */
// Safer than any — requires type checking before use
let inputValue = "Hello";
if (typeof inputValue === "string") {
    console.log(inputValue.toUpperCase());
}
/* =========================================================
   VOID
   ========================================================= */
// Function returns nothing
function logMessage(msg) {
    console.log(msg);
}
/* =========================================================
   NULL & UNDEFINED
   ========================================================= */
// null → intentional absence of value
// undefined → value not assigned yet
let emptyValue = null;
let notAssigned = undefined;
// Common real-world usage
let result = null;
/* =========================================================
   NEVER
   ========================================================= */
// Function that NEVER returns
// (throws error or infinite loop)
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) { }
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
//# sourceMappingURL=app.js.map