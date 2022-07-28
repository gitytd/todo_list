let input = prompt("what would you like to do?")
const todos = ["udemy", "speaking", "pray", "exercise"];
while (input !== "quit" && input !== "q") {           // or kullanmadık.. while ! dan dolayı
    if (input === "list") {
        console.log("**********")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}:${todos[i]}`);

        }
        console.log("**********")
    }
    else if (input === "new") {
        const newTodo = prompt("add a new todo");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }
    else if (input === "delete") {
        const index = parseInt(prompt("number of the index to delete"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`${deleted} silindi`);
        }else{
            input = prompt ("enter an index number");
        }

    }
    input = prompt("what would you like to do?")
}
console.log("Quited")