//Array de tarefas
let tasks =['comprar leite','Ler um livro','Estudar JavaScript'];

//Função para atualizar a lista de tarefas na página
function updateTaskList(){
    const taskList = document.getElementById('taskList');
    tasks.forEach(task => {
        const li =document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    
        
    });
}
//função para adicionar uma nova tarefa 
function addTask() {
    const taklnput = document.getElementById('tasklnput');
    const newTask = tasklnput.value.trim()
    if (newTask) {
        tasks.push(newTask);//Adicionar a nova tarefa ao array
        updateTaskList();
}





updateTaskList();
