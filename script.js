let tarefas = [];

function adcTarefa(){
    let listaTarefas = document.getElementById("listaTarefas");
    let tarefa = listaTarefas.value.trim();

    if (tarefa === "") {
        alert("Digite alguma tarefa");
        return;
    }

    tarefas.push(tarefa);
    listaTarefas.value = "";

    updateListaTarefas();
}

function removeTarefa(index){
    tarefas.splice(index, 1);
    updateListaTarefas();
}

function updateListaTarefas(){
    let listaTarefas = document.getElementById("listaTarefas");
}