const input = document.getElementById('task');
const add = document.querySelector('.btn_add');
const clear = document.querySelector('.btn_clear');
const taskList = document.querySelector('.task_list');
const form = document.querySelector('.form');
const area = document.querySelector('.task_area');


let taskValue = [];
function addTask(event){
    event.preventDefault();
    let text = input.value;
    const item = document.createElement('input');
    const label = document.createElement('label');
    label.setAttribute('class','label_task');
    item.type = "checkbox";
    if(text !== ""){
        label.append(text);
        label.appendChild(item);
        taskList.appendChild(label);
        area.style.display = 'none';
        clear.disabled = false;
        taskValue.push(text);
        console.log(label);
        const taskListJSON = JSON.stringify(taskValue);
        window.localStorage.setItem('taskList',taskListJSON);

    }
    input.value="";
    
}

add.addEventListener('click',addTask);


document.addEventListener('DOMContentLoaded',()=>{
  
    let jsonTaskList = JSON.parse(localStorage.getItem('taskList'));
    
   if(jsonTaskList && jsonTaskList.length > 0){
        jsonTaskList.forEach(element => {
           taskList.innerHTML += `<label>${element}<input type="checkbox"><label>`;
           area.style.display = 'none';
        });
    }
});

clear.addEventListener('click',()=>{
    let allLabel = document.querySelectorAll('.label_task');
    if(allLabel){
        allLabel.display = 'none';
     window.localStorage.removeItem('taskList');
    }
    area.display = 'block';
});
