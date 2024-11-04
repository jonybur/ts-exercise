import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log("\n--- To-Do List App ---");
  console.log("1. Add a new task");
  console.log("2. View all tasks");
  console.log("3. Exit");
  rl.question("Choose an option: ", handleUserInput);
}

function handleUserInput(input: string) {
  switch (input) {
    case "1":
      console.log("Adding a new task...");
      break;
    case "2":
      console.log("Viewing all tasks...");
      break;
    case "3":
      console.log("Exiting...");
      rl.close();
      break;
    default:
      console.log("Invalid option. Please choose 1, 2, or 3.");
  }
  displayMenu();
}

displayMenu();
