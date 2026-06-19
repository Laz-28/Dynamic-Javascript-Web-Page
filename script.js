const theString = document.querySelector("#input-area");
const display = document.querySelector(".display-area");
const btn = document.querySelector("#addbtn");

function show(event){
    event.preventDefault();
    const listText = theString.value.trim();

    if(listText === '') return;

const li =  document.createElement('li');
const textSpan = document.createElement('span');
textSpan.textContent = listText;
li.appendChild(textSpan);

const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.classList.add('delete-btn');

deleteBtn.addEventListener('click', function(){
    li.remove();
});

li.appendChild(deleteBtn);


display.appendChild(li);
theString.value = "";

}

btn.addEventListener('click', show);
