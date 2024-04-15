// TASK MANAGER
// Using a Template Literal because it recognizes line breaks
const menu = `TASK MANAGER;
What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;
// Array for storing tasks
const tasks = [
    `Charge MacBook`,
    `Master JavaScript`
]
// For displaying tasks to the user
let showTasks = ``;
// For storing the value of a new task
let newTask;
// For storing the number of the task to be removed
let num;
// For storing the value of the removed task
let removed;
// Displays the menu for the user to select an option. Also, sets the user's response to the userInput variable
let userInput = prompt(menu)
// Loops and continues to display the menu until the user ends/closes the Task Manager (Until the user enters CLOSE)
while(userInput!== "CLOSE"){
    // If the user enters TASKS, the tasks are displayed to the user
    if(userInput === "TASKS"){
        // Loops through the tasks array and displays them to the user
        for(let i = 1; i < tasks.length; i++){
            showTasks += `${i}: ${tasks[i]}\n`;
            
        }
        // Alerts the user that the tasks have been displayed
        alert(`Here are the tasks: ${showTasks}`);
        showTasks = ""; // Clear the showTasks variable after displaying the tasks
    }
    if(userInput === "NEW"){
        newTask = prompt("Enter the new task:");
        tasks.push(newTask); 
        // Alerts the user that the task has been added
        alert(` ${newTask} task has been added successfully!`);
    }
    if(userInput === "REMOVE"){
        num = prompt(`${showTasks}Enter the number of the task to be removed: `);
        // Checks if the number entered is valid
        if(num > 0 && num < tasks.length){
            removed = tasks[num];
            tasks.splice(num, 1);
            // Alerts the user that the task has been removed
            alert(`Task ${removed} has been removed successfully!`);
        } else {
            // Alerts the user that the number is invalid
            alert(`Invalid number. Please enter a number between 1 and ${tasks.length - 1}.`);
        }
    }
    userInput = prompt(menu); // Move this line to the end of the while loop
}
// Alerts the user that they have closed the program
alert(`Thank you for using Task Manager`)