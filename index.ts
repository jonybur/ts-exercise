import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function questionAsync(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

async function displayMenu() {
  console.log("\n--- To-Do List App ---");
  console.log("1. Add a new task");
  console.log("2. View all tasks");
  console.log("3. Exit");
  const input = await questionAsync("Choose an option: ");
  await handleUserInput(input);
}

async function handleUserInput(input: string) {
  switch (input) {
    case "1":
      console.log("Should add a new task");
      break;
    case "2":
      console.log("Should view all tasks");
      break;
    case "3":
      console.log("Exits the app");
      rl.close();
      return;
    default:
      console.log("Invalid option. Please choose 1, 2, or 3.");
  }
}

displayMenu().catch(console.error);
