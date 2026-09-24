const deleteTask = (task) => {
    const index = tasks.indexOf(task);

    if (index !== -1) {
        tasks.splice(index, 1);
        console.log("Task deleted: " + task);
    }

    return tasks.length;
};