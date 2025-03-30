const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const listBox = document.getElementById('listBox');

const addTodo = () => {
    const inputText = inputBox.value.trim();
    if (inputText === "") {
        alert("You must write something!");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Create paragraph for task text
    const p = document.createElement("p");
    p.textContent = inputText;
    li.appendChild(p);

    // Create Edit Button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "edit-btn");
    editBtn.addEventListener("click", () => editTask(p));
    li.appendChild(editBtn);

    // Create Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn");
    deleteBtn.addEventListener("click", () => li.remove()); // ✅ Deletes task
    li.appendChild(deleteBtn);

    listBox.appendChild(li);
    inputBox.value = ""; // Clear input
};

// Function to edit a task
const editTask = (taskText) => {
    const newText = prompt("Edit your task:", taskText.textContent);
    if (newText !== null && newText.trim() !== "") {
        taskText.textContent = newText.trim();
    }
};

// Add event listener to "ADD" button
addBtn.addEventListener("click", addTodo);
