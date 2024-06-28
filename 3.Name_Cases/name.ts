// Task 3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
//uppercase, and titlecase.

let personname = "William James";

// print  person’s name in lowercase, uppercase, and titlecase.

console.log("Lowercase:" + " " + personname.toLocaleLowerCase())
console.log("Uppercase:" + " " + personname.toLocaleUpperCase())
console.log("Titlecase:" + " " + personname.charAt(0).toLocaleUpperCase() + personname.slice(1))
