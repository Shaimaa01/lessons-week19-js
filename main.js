/*
lesson =>148
    Constructor Function
*/
class User {
  // Static Property
  static count = 0;
  constructor(id, username, salary) {
    this.i = id;
    this.u = username || "unKnown";
    this.s = salary < 6000 ? salary + 300 : salary;
    this.msg = function () {
      return `Hello ${this.u} your Salary Is ${this.i}`;
    };
    User.count++; // means each time you will create a new object  add one to count
  }

  // Methods
  writeMsg() {
    return `Hello ${this.u} your Salary Is ${this.i}`;
  }

  // Update
  updateName(newName) {
    this.u = newName;
  }

  //   Static Methods
  static sayHello() {
    return `Hello From class`;
  }
  sayBye() {
    return `bye ${this.u}`;
  }

  static countMembers() {
    return `${this.count} Members Created`;
  }
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(100, "", 6000);
let userThree = new User(100, "Sayed", 7000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);

console.log(userTwo.i);
console.log(userTwo.u);
console.log(userTwo.s);

console.log(userThree.i);
console.log(userThree.u);
console.log(userThree.s);
// const userOne = {
//   id: 100,
//   username: "Elzero",
//   salary: 5000,
// };

// const userTwo = {
//   id: 101,
//   username: "Hasan",
//   salary: 6000,
// };

// const userThree = {
//   id: 102,
//   username: "Sayed",
//   salary: 7000,
// };

/*
lesson => 149
    Constructor Fucntion
        New Syntax
*/

console.log(userOne instanceof User);
console.log(userOne.constructor === User);

/*
lesson => 150
    Constructor Function
        Deal With Properties And Methods
*/

console.log(userOne.msg());
console.log(userOne.writeMsg());
console.log(userOne.writeMsg); // Native code

/*
lesson => 151
    Constuctor Function
        Update Properties
        Built In Constructors
*/
userOne.updateName("Osama");
console.log(userOne.u);

let strOne = "Elzero";
let strTwo = new String("Elzero");

// ctrl k i => make the pop appear to explain whatever you are click on

console.log(typeof strOne);
console.log(typeof strTwo);

console.log(strOne instanceof String);
console.log(strTwo instanceof String);

console.log(strOne.constructor === String);
console.log(strTwo.constructor === String);

/*
lesson = 152
    Class
        Static Properties And Methods
*/

console.log(userOne.count); // can not acces
console.log(User.count); // can

// console.log(userOne.sayHello()) //Erorr
console.log(User.sayHello());

console.log(User.countMembers());

/*
lesson => 153
    Class
        Inheritance
*/

// parent class
class User2 {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayBye() {
    return `bye ${this.u}`;
  }
}

// Derived class مستمد يعني هنستمد خواص من مكان تاني
class Admin extends User2 {
  constructor(id, username, permissions) {
    super(id, username);
    this.p = permissions;
  }
}

class Superman extends Admin {
  constructor(id, username, permissions, ability) {
    super(id, username, permissions);
    this.a = ability;
  }
}

let userFour = new User2(100, "Elzero");
let adminOne = new Admin(110, "Mohamoud", 1);

console.log(userFour.u);
console.log(userFour.sayBye());
console.log("########");
console.log(adminOne.i);
console.log(adminOne.u);
console.log(adminOne.sayBye());
console.log(adminOne.p);

/*
lesson => 154
    Encapsulation
        class fields Are public by default
        guards the data against illegal access.
        Helps to achieve the target without revealing its complex details
        will reduce human errors
        make the app more flexible and manageable
        simplifies the app
*/

class User3 {
  #e;
  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    this.#e = eSalary;
  }
  getSalary() {
    return parseInt(this.#e);
  }
}

let userFive = new User3(100, "Elzero", "10000 El");

console.log(userFive.u);
console.log(userFive.getSalary() * 0.3);

/*
lesson => 155
prototype
    introduction
    prototypes are the mechanism by which javascript objects
    inherit features from one another.
*/

class User4 {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayBye() {
    return `bye ${this.u}`;
  }
}

let userSix = new User4(100, "paka");
console.log(userSix.u);

console.log(User4.prototype);

let str = "paka";
console.log(String.prototype);

/*
lesson => 156
Prototype
    Add To prototype chain
    Extend built in constructors features
*/

console.log(userSix);

User4.prototype.sayWelcome = function () {
  return `Welcome ${this.u}`;
};

// Object.prototype.love = "Elzero web school";

String.prototype.addDotBeforeAndAfter = function (val) {
  return `.${this}.`;
};

let myString = "Elzero";

/*
lessons => 157
Object Meta Data And Descriptor
  writable
  enumerable
  configurable [Cannot Delete Or Reconfigure]
*/

const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "c", {
  writable: false, // you can not modifie the value of c
  enumerable: false,
  configurable: true, // prevent you to modifie or delete(false)
  value: 3,
});

//redefine property
Object.defineProperty(myObject, "c", {
  writable: false, // you can not modifie the value of c
  enumerable: false,
  configurable: true, // prevent you to modifie or delete
  value: 100000,
});

myObject.c = 100;

for (let prop in myObject) {
  console.log(prop, myObject[prop]);
}

console.log(delete myObject.c); // true or false

console.log(myObject);

/*
lesson => 158
Object Meta Data And Descriptor
  Define Multiple Properties
  Check Descriptors
*/

Object.defineProperties(myObject, {
  c: {
    configrable: true,
    value: 3,
  },
  d: {
    configrable: true,
    value: 4,
  },
  e: {
    configrable: true,
    value: 5,
  },
});

console.log(myObject);

console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
console.log(Object.getOwnPropertyDescriptors(myObject));
