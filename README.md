# To-Do List Interview Task (Node.js & TypeScript)

## Objective

The goal of this task is to assess your proficiency with Node.js, TypeScript, and problem-solving skills by building a small command-line to-do list application. You will create a to-do list with progressively more complex features, testing different aspects of your TypeScript and Node.js knowledge.

## Task Breakdown

### Level A: Basic To-Do List with Sorting

1. **Objective**: Create a basic to-do list that allows users to add tasks and display them in the console.
2. **Requirements**:
   - Users should be able to add new tasks via command-line input.
   - Display tasks in the order they are added.
   - Users can delete tasks from the list.
   - Implement a command to toggle between sorting tasks alphabetically or by the time they were added.
   - Define appropriate TypeScript types/interfaces for tasks and ensure type safety.

### Level B: Task Priority and Search

1. **Objective**: Enhance the to-do list with task priority and search functionality.
2. **Requirements**:
   - Users should be able to assign a priority (high, medium, low) to tasks when adding them.
   - Add the ability to filter tasks by priority.
   - Implement a search command to filter tasks based on text input.
   - Users should be able to mark tasks as complete or incomplete.
   - Ensure type safety when adding features like task status and priority.

### Level C: Optimized Search and Persistence

1. **Objective**: Add performance optimizations and data persistence.
2. **Requirements**:
   - Delay filtering until the user stops typing by implementing a debounced function.
   - Persist tasks in a local JSON file to maintain the list across application restarts.
   - Use TypeScript to create utility types or functions if needed (e.g., for debouncing).

## Instructions

1. Set up the project as a basic Node.js application with TypeScript.
2. You can start building your solution directly in `index.ts` or split it into multiple files as needed.
3. Follow the progression from Level A to Level C, implementing the required features.
4. Use TypeScript features such as interfaces, union types, and optional properties to ensure type safety throughout the application.

## Setup

1. Initialize the project:

   ```bash
   npm init -y
   npm install typescript @types/node
   npx tsc --init
   ```
