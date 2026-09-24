const addTask = (task) => {
    tasks.push(task);
    console.log("Task added: " + task);
    return tasks.length;
};