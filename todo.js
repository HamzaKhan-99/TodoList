// create close btn for all list items 

const liList = document.querySelectorAll('li');
for (let i = 0; i < liList.length; i++) {
    let span = document.createElement('span');
    let txt = document.createTextNode('\u00D7');
    span.className = 'close'
    span.appendChild(txt);
    liList[i].appendChild(span);
    // console.log(liList[i]);
}


// add funtionality of close btn 
const closes = document.getElementsByClassName('close');
for (let i = 0; i < closes.length; i++) {
    closes[i].addEventListener("click", function () {
        let div = this.parentElement;
        div.style.display = 'none'
    })
}

// add checked symbol and decoration when click 
let list=document.querySelector('#myUL')
    list.addEventListener('click',function (e){
        if(e.target.tagName==='LI'){
            e.target.classList.toggle('checked');
        }
    })
// create add funtion for input tasks

function newElement() {
    let inputValue = document.getElementById("taskInput").value;
    let li = document.createElement('LI');
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("you must writen something!");
    } else {
        document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('taskInput').value = '';

    let span = document.createElement('span');
    let txt = document.createTextNode('\u00D7');
    span.className = 'close'
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < closes.length; i++) {
        closes[i].addEventListener("click", function () {
            let div = this.parentElement;
            div.style.display = 'none'
        })
    }
}
