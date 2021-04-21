//calendario
instance = new dtsel.DTS('input[name="dateTimePicker"]');

//lista de tarefas
function adicionarTarefa() {
    var nomeTarefa = document.getElementById("nomeTarefa").value;
    var dataTarefa = document.getElementById("calendario").value;

    console.log(nomeTarefa);
    console.log(dataTarefa);

    var novaTarefa = document.createElement("p");//'$(nomeTarefa) $(dataTarefa)';
    novaTarefa.className = "novaTarefa";
    novaTarefa.innerHTML = nomeTarefa + '(' + dataTarefa + ')';
    document.getElementById("tarefas").appendChild(novaTarefa);

    var removerBotao = document.createElement("button");
    removerBotao.innerText = "remover";
    document.getElementById("tarefas").insertBefore(
        removerBotao, document.getElementById("tarefas").lastChild.nextSibling);
    removerBotao.addEventListener("click", function () { removerTarefa(this, novaTarefa) });


}

document.getElementById("botao").addEventListener("click", adicionarTarefa);


function removerTarefa(botaoObj, tarefaObj) {
    botaoObj.remove();
    tarefaObj.remove();
}