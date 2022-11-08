let users2 = [
  {
    firstName: "Hussam",
    lastName: "Bawwab",
    age: 28,
    address: "Irbid",
    phoneNumber: "7981323312",
    jobDescription: {
      title: "Frontend",
      salary: 132123,
    },
    childreen: [
      {
        firstName: "Samer",
        lastName: "Bawwab",
        age: 3,
      },
      {
        firstName: "Bilal",
        lastName: "Bawwab",
        age: 6,
      },
      {
        firstName: "Mariam",
        lastName: "Bawwab",
        age: 8,
      },
    ],
  },
  {
    firstName: "Sara",
    lastName: "Lobani",
    age: 22,
    address: "Amman",
    phoneNumber: "7213454654",
    jobDescription: {
      title: "Frontend",
      salary: 2133,
    },
    childreen: [
      {
        firstName: "Ali",
        lastName: "Lobani",
        age: 13,
      },
      {
        firstName: "Lobna",
        lastName: "Lobani",
        age: 16,
      },
      {
        firstName: "Zaid",
        lastName: "Lobani",
        age: 1,
      },
    ],
  },
  {
    firstName: "Ezz",
    lastName: "Ashore",
    age: 25,
    address: "Amman",
    phoneNumber: "79823216",
    jobDescription: {
      title: "Frontend",
      salary: 2133,
    },
    childreen: [
      {
        firstName: "Rami",
        lastName: "Lobani",
        age: 20,
      },
      {
        firstName: "Omar",
        lastName: "Lobani",
        age: 9,
      },
    ],
  },
  {
    firstName: "Mohammad",
    lastName: "Damra",
    age: 30,
    address: "Amman",
    phoneNumber: "79898798465",
    jobDescription: {
      title: "Frontend",
      salary: 1133,
    },
    childreen: [
      {
        firstName: "Laith",
        lastName: "Damra",
        age: 1,
      },
      {
        firstName: "Ahmad",
        lastName: "Damra",
        age: 8,
      },
    ],
  },
];
// function salaryTax(ArrObj) {
//   let tax = 0.075;
//   let usersAfterEdit = [];
//   let userName = "";
//   let salaryTaxed = 0;
//   for (let i = 0; i < ArrObj.length; i++) {
//     userName = ArrObj[i].firstName + " " + ArrObj[i].lastName;
//     salaryTaxed =
//       ArrObj[i].jobDescription.salary - ArrObj[i].jobDescription.salary * tax;
//     let obj = {
//       userName: userName,
//       age: ArrObj[i].age,
//       salaryAfterTax: salaryTaxed,
//     };
//     usersAfterEdit.push(obj);
//   }
//   return usersAfterEdit;
// }
// console.log(salaryTax(users));
let users1 = [
  {
    userid: 1,
    firstname: "Krish",
    lastname: "Lee",
    phonenumber: "123456",
    emailaddress: "krish.lee@learningcontainer.com",
  },
  {
    userid: 2,
    firstname: "racks",
    lastname: "jacson",
    phonenumber: "123456",
    emailaddress: "racks.jacson@learningcontainer.com",
  },
  {
    userid: 3,
    firstname: "denial",
    lastname: "roast",
    phonenumber: "21312312",
    emailaddress: "denial.roast@learningcontainer.com",
  },
  {
    userid: 4,
    firstname: "devid",
    lastname: "neo",
    phonenumber: "8975343",
    emailaddress: "devid.neo@learningcontainer.com",
  },
  {
    userid: 5,
    firstname: "jone",
    lastname: "mac",
    phonenumber: "3254667",
    emailaddress: "jone.mac@learningcontainer.com",
  },
];
//Question 1
function getIdByFirstName(fName) {
  for (let i = 0; i < users1.length; i++) {
    if (users1[i].firstname == fName) {
      return users1[i].userid;
    }
  }
}
console.log(getIdByFirstName("denial"));

//Question 2
function getIdByLastName(LName) {
  for (let i = 0; i < users1.length; i++) {
    if (users1[i].lastname == LName) {
      return users1[i].userid;
    }
  }
}
console.log(getIdByLastName("Lee"));

//Question 3
function getFullNameByNumber(number) {
  for (let i = 0; i < users1.length; i++) {
    if (users1[i].phonenumber == number) {
      return users1[i].firstname + " " + users1[i].lastname;
    }
  }
}
console.log(getFullNameByNumber("3254667"));

//Question 4

function getUsersByAgeUp(users) {
  let usersUp25 = users.filter((element) => element.age >= 25);
  return { usersUp25: usersUp25 };
}

console.log(getUsersByAgeUp(users2));

//Question 5

function getUsersByAgeLess(users) {
  let usersLess25 = users.filter((element) => element.age < 25);
  return { usersLess25: usersLess25 };
}

console.log(getUsersByAgeLess(users2));

//Question 6

function salaryTax(users) {
  let tax = 0.7;
  let usersAfterEdit = [];
  let userName = "";
  let salaryTaxed = 0;
  let jobTitle = "";
  for (let i = 0; i < users.length; i++) {
    userName = users[i].firstName + " " + users[i].lastName;
    jobTitle = users[i].jobDescription.title;
    salaryTaxed =
      users[i].jobDescription.salary - users[i].jobDescription.salary * tax;
    let obj = {
      userName: userName,
      jobTitle: jobTitle,
      salaryAfterTax: salaryTaxed,
    };
    usersAfterEdit.push(obj);
  }
  return usersAfterEdit;
}
console.log(salaryTax(users2));

//Question 7

function getUsersByAddress(users, address) {
  let usersAdd = users.filter((element) => element.address == address);
  return { users: usersAdd };
}

console.log(getUsersByAddress(users2, "Amman"));

//Question 8

function getUsersByChildren(users) {
  let usersChilds = users.filter((element) => element.childreen.length > 2);
  return { users: usersChilds };
}

console.log(getUsersByChildren(users2));

//Question 9

function getUsersBySalary(users) {
  let bonus = 0.05;
  let salaryBonused = 0;
  let usersSalary = users.filter(
    (element) => element.jobDescription.salary < 1500
  );
  for (let i = 0; i < usersSalary.length; i++) {
    salaryBonused =
      usersSalary[i].jobDescription.salary +
      usersSalary[i].jobDescription.salary * 0.05;
    usersSalary[i].jobDescription.salary = salaryBonused;
  }
  return { usersSalaryLess1500: usersSalary };
}

console.log(getUsersBySalary(users2));

//Question 10

console.log("Mohammad damra");
