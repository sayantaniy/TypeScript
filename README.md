# TypeScript 


## What is TypeScript?

* Superset of JavaScript
* Adds **static typing**
* Compiles to plain JavaScript
* Helps catch errors at compile time

---

## Basic Types

### Primitive Types

* `number`
* `string`
* `boolean`
* `null`
* `undefined`

```ts
let age: number = 20
let name: string = "TS"
let isActive: boolean = true
```

---

## Arrays

```ts
let nums: number[] = [1, 2, 3]
let names: Array<string> = ["a", "b"]
```

---

## Tuples

* Fixed length & fixed types

```ts
let user: [string, number] = ["Alex", 25]
```

---

## Enums

```ts
enum Status {
  Success,
  Failure,
  Loading
}
```

---

## Any

* Turns off type checking
* Avoid when possible

```ts
let value: any = 10
value = "text"
```

---

## Unknown

* Safer alternative to `any`
* Requires type checking before use

```ts
let data: unknown
```

---

## Void

* Used for functions that return nothing

```ts
function log(): void {}
```

---

## Never

* Function never returns
* Used for errors or infinite loops

```ts
function throwError(): never {
  throw new Error("Error")
}
```

---

## Type Inference

* TypeScript automatically infers types

```ts
let count = 10 // inferred as number
```

---

## Type Annotations

* Explicitly defining types

```ts
let count: number = 10
```

---

## Union Types

* Variable can hold multiple types

```ts
let id: number | string
```

---

## Type Aliases

```ts
type User = {
  name: string
  age: number
}
```

---

## Interfaces

* Used to define object structure

```ts
interface User {
  name: string
  age: number
}
```

---

## Optional Properties

```ts
interface User {
  name: string
  age?: number
}
```

---

## Readonly Properties

```ts
interface User {
  readonly id: number
}
```

---

## Functions

### Function Types

```ts
function add(a: number, b: number): number {
  return a + b
}
```

### Optional Parameters

```ts
function greet(name?: string) {}
```

---

## Type Assertions

```ts
let value: unknown
let strLength = (value as string).length
```

---

## Classes

### Basic Class

```ts
class Person {
  name: string

  constructor(name: string) {
    this.name = name
  }
}
```

---

## Access Modifiers

* `public` (default)
* `private`
* `protected`

```ts
class User {
  public name: string
  private password: string
  protected role: string
}
```

---

## Parameter Properties

* Shorthand property declaration

```ts
class User {
  constructor(public name: string, private age: number) {}
}
```

---

## Getters & Setters

```ts
class User {
  private _name: string

  get name() {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }
}
```

---

## Static Members

* Belong to the class, not instances

```ts
class Utils {
  static PI = 3.14
}
```

---

## Abstract Classes

* Cannot be instantiated
* Can contain abstract methods

```ts
abstract class Shape {
  abstract area(): number
}
```

---

## Inheritance

```ts
class Animal {
  move() {}
}

class Dog extends Animal {
  bark() {}
}
```

---

## Generics

* Reusable, type-safe components

```ts
function identity<T>(value: T): T {
  return value
}
```

---

## Utility Types

* `Partial<T>`
* `Required<T>`
* `Readonly<T>`
* `Pick<T, K>`
* `Omit<T, K>`

---

## Type vs Interface

* `interface` → extendable, preferred for objects
* `type` → more flexible (unions, primitives)

---

## Modules

```ts
export const x = 10
import { x } from "./file"
```

---

## tsconfig.json (Key Options)

* `target`
* `module`
* `strict`
* `rootDir`
* `outDir`

---

## Strict Mode

* Enables strict type checking
* Recommended for all projects

---

## Compilation

```bash
tsc file.ts
tsc --watch
```

---

## Best Practices

* Avoid `any`
* Use strict mode
* Prefer type inference
* Use interfaces for object shapes

---


