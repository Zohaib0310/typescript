var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["AUTHOR"] = "AUTHOR";
    Role["READ_ONLY"] = "READ_ONLY";
})(Role || (Role = {}));
var person = {
    name: "Zohaib Anwar",
    age: 26,
    hobbies: ["Sports", "Travelling"],
    role: Role.ADMIN,
};
console.log(person.name);
var _a = person.hobbies, hobbies = _a === void 0 ? [] : _a;
for (var _i = 0, hobbies_1 = hobbies; _i < hobbies_1.length; _i++) {
    var hobby = hobbies_1[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    var name_1 = person.name, role = person.role;
    console.log("The role of ".concat(name_1, " is ").concat(role, " "));
}
