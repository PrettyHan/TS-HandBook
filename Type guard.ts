interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: "Olive", age: 26, skill: "TypeScript" };
}

let Olive = introduce();
// console.log(Olive.skill); skill err

// if use type assertions
if ((Olive as Developer).skill) {
  let skill = (Olive as Developer).skill;
  console.log(skill); // result TypeScript
} else if ((Olive as Person).age) {
  // else if -> if => TypeScript 26
  let age = (Olive as Person).age;
  console.log(age);
}

// if use type guard

function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(Olive)) {
  Olive.skill;
} else {
  Olive.age;
}
