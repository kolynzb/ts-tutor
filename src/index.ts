//Basic types
let id: number = 5;
let company: string = "Atuhaire Collins";
let isHot: boolean = true;
let x: any = "Hello"; //can be anything

let ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

//tuple
let person: [number, string, boolean] = [1, "gsgsgs", true];
//tuple array
let employee: [number, string, boolean][] = [
  [1, "sss", true],
  [1, "gsgsgs", true],
  [1, "gsgsgs", true],
];

//union

let pid: string | number;
pid = "22";
pid = 22;

//enum
enum Dirctions {
  Up, //
  Down,
  Left,
  Right,
}

console.log(Dirctions.Up);

enum Dirctions1 {
  Up = 1, //
  Down,
  Left,
  Right,
}

console.log(Dirctions1.Up);

enum Dirctions2 {
  Up = "Up", //
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Dirctions2.Up);

//objects
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "john",
};

//or
type Product = { id: number; name: string };

const product: Product = {
  id: 1,
  name: "john",
};

//type assertion
let cid: any = 1;
let customerId = <number>cid;
let customerId1 = cid as number;

//functions
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

//interface
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number; //optional
}

const user1: UserInterface = {
  id: 1,
  name: "John",
  age: 36,
};

type Point = number | string;

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;

//classes

interface PersonInterface {
  id: number;
  name: string;
  age: number;
  register(): string;
}

class Personn implements PersonInterface {
  id: number;
  name: string;
  age: number;
  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  register() {
    return `${this.name} is registered`;
  }
}

class Person {
  private id: number;
  name: string;
  protected age: number;
  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  register() {
    return `${this.name} is registered`;
  }
}

const brad = new Person(2, "bradd", 43);

class Employee extends Personn {
  position: string;
  constructor(id: number, name: string, age: number, position: string) {
    super(id, name, age);
    this.position = position;
  }
}

//generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
