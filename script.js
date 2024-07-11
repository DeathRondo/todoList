const inputTarea = document.getElementById('inputTarea');
const addBtnTarea = document.getElementById('addBtn')
const listaTareas = document.getElementById('listaTareas');

let tareas = [];

function addTask(){
  const taskText = inputTarea.value.trim();

  if(taskText !==''){
    const newTask = {
      id: Date.now().toString(),
      text: taskText,
      done: false,
    };
    console.log(newTask.id)
    tareas.push(newTask);
    renderTasks();
    inputTarea.value='';
  }
}

function renderTasks(){
  listaTareas.innerHTML = '';

  
  tareas.forEach(task =>{
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" id="{task.id}" ${task.done ? 'checked' : ''}>
      <label for="${task.id}">${task.text}</label>
      <button class="deleteBtn" data-id="${task.id}">Borrar</button>
    `;
    listaTareas.appendChild(li)

    //event listener para marcar tarea como completada
     const checkbox = li.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', () => {
            task.done = checkbox.checked;
            renderTasks();
        });

    //eliminar trareas
    const deleteBtn = li.querySelector('.deleteBtn')
    deleteBtn.addEventListener('click', ()=>{
      tareas = tareas.filter(t => t.id !== task.id);
      renderTasks();
    })

  })
}

addBtnTarea.addEventListener('click', addTask);

inputTarea.addEventListener('keypress', (e)=>{
  if(e.key ==='Enter'){
    addTask();
  }
});


renderTasks();

// Selección de elementos del DOM
// const taskInput = document.getElementById('taskInput');
// const addTaskBtn = document.getElementById('addTaskBtn');
// const taskList = document.getElementById('taskList');

// // Arreglo para almacenar las tareas
// let tasks = [];

// // Función para añadir una nueva tarea
// function addTask() {
//     const taskText = taskInput.value.trim();
    
//     if (taskText !== '') {
//         const newTask = {
//             id: Date.now().toString(),
//             text: taskText,
//             done: false
//         };

//         tasks.push(newTask);
//         renderTasks();
//         taskInput.value = '';
//     }
// }

// // Función para renderizar las tareas en la lista
// function renderTasks() {
//     taskList.innerHTML = '';

//     tasks.forEach(task => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <input type="checkbox" id="${task.id}" ${task.done ? 'checked' : ''}>
//             <label for="${task.id}">${task.text}</label>
//             <button class="deleteBtn" data-id="${task.id}">Delete</button>
//         `;
//         taskList.appendChild(li);

//         // Event listener para marcar como completada/incompleta una tarea
//         const checkbox = li.querySelector('input[type="checkbox"]');
//         checkbox.addEventListener('change', () => {
//             task.done = checkbox.checked;
//             renderTasks();
//         });

//         // Event listener para eliminar una tarea
//         const deleteBtn = li.querySelector('.deleteBtn');
//         deleteBtn.addEventListener('click', () => {
//             tasks = tasks.filter(t => t.id !== task.id);
//             renderTasks();
//         });
//     });
// }

// // Event listener para el botón "Add Task"
// addTaskBtn.addEventListener('click', addTask);

// // Event listener para añadir una tarea al presionar Enter
// taskInput.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//         addTask();
//     }
// });

// // Función inicial para renderizar las tareas al cargar la página
// renderTasks();