/* =======================
   CONSTRUCTORS
======================= */
class User {
  name: string;

  constructor(name: string) {
    this.name = name; // runs automatically on new User()
  }
}

/* =======================
   ACCESS MODIFIERS
======================= */
class Person {
  public name: string;        // accessible everywhere (default)
  protected age: number;      // accessible in class + subclasses
  private ssn: string;        // accessible only inside this class

  constructor(name: string, age: number, ssn: string) {
    this.name = name;
    this.age = age;
    this.ssn = ssn;
  }
}

/* =======================
   READONLY PROPERTIES
======================= */
class Config {
  readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }
  // this.apiKey = "new"; ❌ not allowed
}

/* =======================
   OPTIONAL PROPERTIES
======================= */
class Profile {
  bio?: string; // may or may not exist
}

const p = new Profile();
p.bio = "Frontend dev";

/* =======================
   PARAMETER PROPERTIES
   (shortcut: declares + assigns)
======================= */
class Product {
  constructor(
    public name: string,
    private price: number,
    readonly id: number
  ) {}
}

/* =======================
   GETTERS & SETTERS
======================= */
class BankAccount {
  private _balance = 0;

  get balance(): number {
    return this._balance;
  }

  set balance(amount: number) {
    if (amount < 0) throw new Error("Invalid amount");
    this._balance = amount;
  }
}

/* =======================
   STATIC MEMBERS
   (belong to class, not instance)
======================= */
class MathUtils {
  static PI = 3.14;

  static square(x: number) {
    return x * x;
  }
}

MathUtils.PI; //no need to make a new obj to access these methods
MathUtils.square(4);

/* =======================
   ABSTRACT CLASSES
======================= */
abstract class Animal {
  abstract makeSound(): void; // must be implemented : example something that already exists as is, like how god made humans now we make ourselves

  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark");
  }
}

/* ❌ Cannot instantiate abstract class */
// new Animal();

/* =======================
   ABSTRACT METHODS
======================= */
// abstract methods have NO body
// child classes MUST implement them
