"use strict";
/* =========================================================
   TYPESCRIPT: INTERFACES & TYPE ALIASES — QUICK NOTES
   ========================================================= */
Object.defineProperty(exports, "__esModule", { value: true });
/* =========================================================
   2. USING INTERFACES TO DEFINE OBJECT SHAPES
   ========================================================= */
const user2 = {
    id: 1,
    name: "Sayantani",
    isActive: true,
};
const item = {
    id: 101,
    title: "Book",
};
const admin = {
    id: 1,
    role: "Super Admin",
};
const emp = {
    name: "A",
    age: 25,
    employeeId: 1001,
};
const service = {
    log() {
        console.log("Logging...");
    },
    connect() {
        console.log("Connected");
    },
};
let userId = 101;
userId = "A102";
const customer1 = {
    id: 1,
    name: "X",
    email: "x@mail.com",
};
const profile = {
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
//# sourceMappingURL=script.js.map