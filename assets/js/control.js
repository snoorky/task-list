let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('areaLista');
let contador = 0;

function addTarefa() {
    let valorInput = input.value;

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        ++contador;
        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="itemIcon">
            <i id="icone${contador}" class="fi fi-rr-circle"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="itemNome">
            <p>${valorInput}</p>
        </div>
        <div class="itemBotao">
            <button onclick="deletar(${contador})" class="delete"><i class="fi fi-rr-trash"></i></button>
        </div>
    </div>`;

    main.innerHTML += novoItem
    input.value = "";
    input.focus();
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if (classe == "item") {
        item.classList.add('clicado');
        var icone = document.getElementById('icone' + id);
        icone.classList.remove('fi-rr-circle');
        icone.classList.add('fi-rr-check-circle');

        item.parentNode.appendChild(item);
    } else {
        item.classList.remove('clicado');
        var icone = document.getElementById('icone' + id);
        icone.classList.add('fi-rr-circle');
        icone.classList.remove('fi-rr-check-circle');
    }
    
}

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})