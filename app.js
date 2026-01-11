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
let score = 95; // number
let city = "Kolkata"; // string
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
function add(a, b) {
    return a + b;
}
// inferred return type: number
// Inference works BEST for return values,
// NOT for parameters
/* =========================================================
   6. TYPE ANNOTATIONS (WHAT IS IT?)
   ========================================================= */
// Explicitly telling TypeScript the type
let age1 = 21;
let email = "test@mail.com";
let loggedIn = true;
/* =========================================================
   7. WHEN TO USE TYPE ANNOTATIONS
   ========================================================= */
// 1️⃣ When declaring variables without value
let value;
// value = "hi" ❌ error
value = 100;
// 2️⃣ Function parameters (IMPORTANT)
function greet(name) {
    return `Hello ${name}`;
}
// 3️⃣ Function return type (optional but good practice)
function multiply(a, b) {
    return a * b;
}
/* =========================================================
   8. TYPE ANNOTATIONS WITH ARRAYS
   ========================================================= */
let marks = [90, 80, 85];
let names1 = ["A", "B"];
/* =========================================================
   9. TYPE INFERENCE vs TYPE ANNOTATION
   ========================================================= */
// Inference (recommended when obvious)
let total = 50;
// Annotation (when unclear or empty)
let result1;
/*
   Inference → TypeScript guesses
   Annotation → You specify
*/
/* =========================================================
   10. BAD PRACTICE (OVER-ANNOTATION)
   ========================================================= */
// ❌ Redundant
let price1 = 100;
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
//# sourceMappingURL=app.js.map