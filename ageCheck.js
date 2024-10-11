let age = parseInt(prompt("Enter your age:"));

if (isNaN(age)) {
  console.log("Please enter a valid number.");
} else if (age < 13) {
  console.log("You are a child.");
} else if (age <= 19) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}
