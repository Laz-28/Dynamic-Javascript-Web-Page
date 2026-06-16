const theString = document.querySelector("#input-area");
const display = document.querySelector(".display-area");
const btn = document.querySelector("#addbtn");

function show(event){
    event.preventDefault();
    const listText = theString.value.trim();

const li =  document.createElement('li');
const textSpan = document.createElement('span');
textSpan.textContent = listText;
li.appendChild(textSpan);

display.appendChild(li);
theString.value = "";

}

btn.addEventListener('click', show);
