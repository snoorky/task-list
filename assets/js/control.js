let input = document.getElementById('inputTask');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('listArea');
let counter = 0;

function addTask() {
    let inputValue = input.value;

    if ((inputValue !== "") && (inputValue !== null) && (inputValue !== undefined)) {
        ++counter;
        let newItem = `<div id="${counter}" class="item">
        <div onclick="markerTask(${counter})" class="itemIcon">
            <i id="icon${counter}" class="fi fi-rr-circle"></i>
        </div>
        <div onclick="markerTask(${counter})" class="itemName">
            <p>${inputValue}</p>
        </div>
        <div class="itemButton">
            <button onclick="deleteTask(${counter})" class="delete"><i class="fi fi-rr-trash"></i></button>
        </div>
    </div>`;

    main.innerHTML += newItem
    input.value = "";
    input.focus();
    }
}

function deleteTask(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function markerTask(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if (classe == "item") {
        item.classList.add('active');
        var icone = document.getElementById('icon' + id);
        icone.classList.remove('fi-rr-circle');
        icone.classList.add('fi-rr-check-circle');

        item.parentNode.appendChild(item);
    } else {
        item.classList.remove('active');
        var icone = document.getElementById('icon' + id);
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