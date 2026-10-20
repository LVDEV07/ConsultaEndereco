const btn = document.getElementById('btn-carregar');
const lista = document.getElementById('lista-tarefas');
 
btn.addEventListener('click', carregarDados);
 
async function carregarDados() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const tarefas = await response.json();
 
    lista.innerHTML = "";
 
    tarefas.forEach(tarefa => {
        const linha = document.createElement('li')
        linha.textContent = tarefa.title;
        lista.appendChild(linha)
 
        if (tarefa.completed) {
            linha.style.color = 'red';
        }else {
            linha.style.color = 'green';
        }
    });
       
}
 