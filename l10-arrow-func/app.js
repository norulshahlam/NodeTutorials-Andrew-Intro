// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script
// 4. conver to use arrow function

const tasks = {
  tasks: [
    {
      text: "Grocery shopping",
      completed: true,
    },
    {
      text: "Clean yard",
      completed: false,
    },
    {
      text: "Film course",
      completed: false,
    },
  ],
  // getTaskTodO() {
  //   const tasksToDo = this.tasks.filter((task) => {
  //     return task.completed === false;
  //   });
  //   return tasksToDo;
  // },
  //above is the longer n traditional way
  getTaskTodO() {
    return this.tasks.filter((task) => task.completed === false);
  },
};

console.log(tasks.getTaskTodO());
