/* =========================================================
   TYPESCRIPT: INTERFACES & TYPE ALIASES — QUICK NOTES
   ========================================================= */

/* =========================================================
   1. INTERFACES (WHAT & WHY)
   ========================================================= */
// Interface defines the SHAPE of an object
// It is used mainly for objects & classes

interface User {
  id: number;
  name: string;
  isActive: boolean;
}

/* =========================================================
   2. USING INTERFACES TO DEFINE OBJECT SHAPES
   ========================================================= */

const user2: User = {
  id: 1,
  name: "Sayantani",
  isActive: true,
};

// Missing or extra properties ❌ not allowed

/* =========================================================
   3. OPTIONAL PROPERTIES IN INTERFACES
   ========================================================= */

interface Product {
  id: number;
  title: string;
  price?: number; // optional
}

const item: Product = {
  id: 101,
  title: "Book",
};

/* =========================================================
   4. READONLY PROPERTIES
   ========================================================= */

interface Admin {
  readonly id: number;
  role: string;
}

const admin: Admin = {
  id: 1,
  role: "Super Admin",
};

// admin.id = 2 ❌ error (readonly)

/* =========================================================
   5. EXTENDING INTERFACES
   ========================================================= */
// Interface can extend another interface

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

const emp: Employee = {
  name: "A",
  age: 25,
  employeeId: 1001,
};

/* =========================================================
   6. MULTIPLE INTERFACE EXTENSION
   ========================================================= */

interface Logger {
  log(): void;
}

interface Database {
  connect(): void;
}

interface Service extends Logger, Database {}

const service: Service = {
  log() {
    console.log("Logging...");
  },
  connect() {
    console.log("Connected");
  },
};

/* =========================================================
   7. TYPE ALIASES (WHAT & WHY)
   ========================================================= */
// Type alias gives a NAME to a type
// Can represent primitives, objects, unions, tuples

type ID = number | string;

let userId: ID = 101;
userId = "A102";

/* =========================================================
   8. TYPE ALIAS FOR OBJECT SHAPES
   ========================================================= */

type Customer = {
  id: number;
  name: string;
  email: string;
};

const customer1: Customer = {
  id: 1,
  name: "X",
  email: "x@mail.com",
};

/* =========================================================
   9. INTERSECTION TYPES (&)
   ========================================================= */
// Combine multiple types into one

type Address = {
  city: string;
  country: string;
};

type UserProfile = Customer & Address;

const profile: UserProfile = {
  id: 1,
  name: "Y",
  email: "y@mail.com",
  city: "Kolkata",
  country: "India",
};

/* =========================================================
   10. INTERFACE vs TYPE (MENTAL DIFFERENCE)
   ========================================================= */
/*
   Interface:
   - Best for object shapes
   - Supports extension
   - Used in OOP-style code

   Type:
   - More flexible
   - Supports unions & intersections
   - Can represent primitives

   RULE:
   → Objects → Interface
   → Complex combinations → Type
   ========================================================= */
