const novaTarefa = [];


function tarefa(nome){
    return{
        nome,
        done: false
       
    }
};
function grita (i){
    novaTarefa[i].done = true
    renderList();
  
};                
function  renderList(){
    document.querySelector("ul").innerHTML= novaTarefa.map((novaTarefa,i) => `<li class="${ novaTarefa.done ? 'done' : 'todo'}">${novaTarefa.nome}</li><button onclick="grita(${i})">Done</button>`)
    
};
function clique(){
    const minhaTarefa = document.querySelector("#meuInput");
    const objeto = tarefa(minhaTarefa.value);
    const adicionandoElemento = novaTarefa.push(objeto);
    renderList()
};