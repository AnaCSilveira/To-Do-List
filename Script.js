const novaTarefa = [];

function tarefa(nome){
    return{
        nome,
        done: false
    }
};

function clique(){
    const minhaTarefa = document.querySelector("#meuInput");
    const objeto = tarefa(minhaTarefa.value);
    const adicionandoElemento = novaTarefa.push(objeto);
     document.querySelector("ul").innerHTML= novaTarefa.map(novaTarefa => `<li>${novaTarefa.nome}</li>`)

};













