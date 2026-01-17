/* =======================
   GENERICS — QUICK NOTES
======================= */

/* Generic Function */
function identity<T>(value: T): T {
  return value;
}

/* Multiple Generics */
function pair<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

/* Generic Type Inference */
identity(10);
identity("text");

/* Generic Constraint */
function len<T extends { length: number }>(v: T): number {
  return v.length;
}

/* keyof with Generics */
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

/* Default Generic */
type Response<T = string> = {
  data: T;
};

/* Generic Interface */
interface Box<T> {
  value: T;
}

/* Generic Function Interface */
interface Fn<T> {
  (value: T): T;
}

/* Generic Class */
class Store<T> {
  private items: T[] = [];
  add(item: T): void {
    this.items.push(item);
  }
}

/* Generic Class Constraint */
class Logger<T extends { id: number }> {
  log(item: T): void {
    console.log(item.id);
  }
}

/* Inheritance with Generics */
class Base<T> {
  value!: T;
}
class Child extends Base<string> {}

/* Static + Generics */
class Utils {
  static id<T>(v: T): T {
    return v;
  }
}

/* Generic Arrow Function */
const arrowFn = <T>(v: T): T => v;

/* Generics vs Union */
function g<T>(v: T): T {
  return v;
}
function u(v: string | number) {
  return v;
}

/* Utility Generic Types */
type P = Partial<{ a: number; b: number }>;
type R = Readonly<{ a: number; b: number }>;
type K = Pick<{ a: number; b: number }, "a">;
type O = Omit<{ a: number; b: number }, "b">;
