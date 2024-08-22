let show = document.getElementById("show");
let historyList = document.getElementById("add-history");
let currentInput = "";

function resultDisplay(value) {
    if (value === '1/x') {
        currentInput = "1/"+currentInput;
        show.value = currentInput;
    } else if (value === 'x²') {
        currentInput += '**2';
        show.value = currentInput;
    } else if (value === '²√x') {
        currentInput = Math.sqrt(currentInput);
        show.value = currentInput;
    } else if (value === '+/-') {
        currentInput = -1*(currentInput);
        show.value = currentInput;
    } else {
        currentInput += value;
        show.value = currentInput;
    }
}

function clearScreen() {
    show.value = '';
    currentInput = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    show.value = currentInput;
}

function calculateResult() {
    
        let result = eval(currentInput);
        show.value = result;
        addHistory(currentInput + " = " + result);
        currentInput = result.toString();
   
}

function addHistory(data) {
    let list = document.createElement("li");
    list.className = "list-group-item";
    list.textContent = data;
    historyList.appendChild(list);
}
