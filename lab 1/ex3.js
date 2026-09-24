let Tasks = ["Work", "Eat", "Study"];

let addTask = (task) => {
    Tasks.push(task);
    console.log(task + " has been added to the Tasks.");
    return Tasks.length;
};

let listAllTask = () => {
    Tasks.forEach((element) => {
        console.log(element);
    });
};

let deleteTask = (task) => {
    let index = Tasks.indexOf(task);

    if (index > -1) {
        Tasks.splice(index, 1);
        console.log(task + " has been deleted from the Tasks list.");
    } else {
        console.log(task + " not found in my Tasks.");
    }

    return Tasks.length;
};

addTask("sleep");
listAllTask();
deleteTask("Eat");