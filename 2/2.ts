/* =======================
   FUNCTION DECLARATION
======================= */
function add(a: number, b: number): number {
  return a + b;
}

/* =======================
   FUNCTION EXPRESSION
======================= */
const multiply = function (a: number, b: number): number {
  return a * b;
};

/* =======================
   ARROW FUNCTION
======================= */
const divide = (a: number, b: number): number => a / b;

/* =======================
   FUNCTION TYPES
======================= */
let calc: (x: number, y: number) => number;

calc = (a, b) => a + b;

/* =======================
   TYPE ALIAS FOR FUNCTION
======================= */
type MathFn = (a: number, b: number) => number;

const subtract: MathFn = (a, b) => a - b;

/* =======================
   OPTIONAL PARAMETERS
======================= */
function greet(name: string, title?: string): string {
  return title ? `${title} ${name}` : name;
}

/* =======================
   DEFAULT PARAMETERS
======================= */
function power(base: number, exp: number = 2): number {
  return base ** exp;
}

/* =======================
   REST PARAMETERS
======================= */
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

/* =======================
   FUNCTION OVERLOADS
======================= */
function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
  return value.toString();
}

/* =======================
   VOID & NEVER
======================= */
function log(msg: string): void {
  console.log(msg);
}

function fail(): never {
  throw new Error("Error");
}

/* =======================
   OPTIONAL + DEFAULT RULE
======================= */
// Optional parameters must come after required ones
// Default parameters are treated as optional
