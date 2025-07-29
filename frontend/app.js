const apiBase = "https://<your-function-app>.azurewebsites.net/api";

async function loadTodos() {
    const res = await fetch(`${apiBase}/GetTodos`);
    const todos = await res.json();
    const list = document.getElementById("todoList");
    list.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.innerHTML = `${todo.title} 
            <button onclick="deleteTodo('${todo.rowKey}')">❌</button>`;
        list.appendChild(li);
    });
}

async function addTodo() {
    const title = document.getElementById("todoInput").value;
    await fetch(`${apiBase}/CreateTodo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title })
    });
    loadTodos();
}

async function deleteTodo(id) {
    await fetch(`${apiBase}/DeleteTodo?id=${id}`, { method: "DELETE" });
    loadTodos();
}

loadTodos();
