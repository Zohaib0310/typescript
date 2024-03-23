enum Role {
  ADMIN = "ADMIN",
  AUTHOR = "AUTHOR",
  READ_ONLY = "READ_ONLY",
}

interface Person {
  name: string;
  age: number;
  hobbies: string[];
  gender?: string;
  role: Role;
}
const person: Person = {
  name: "Zohaib Anwar",
  age: 26,
  hobbies: ["Sports", "Travelling"],
  role: Role.ADMIN,
};

console.log(person.name);

const { hobbies = [] } = person;

for (const hobby of hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  const { name, role } = person;
  console.log(`The role of ${name} is ${role} `);
}
