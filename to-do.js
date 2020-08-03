const form = document.querySelector('#add-form');
const addTask = document.querySelector('#add-task');
const list = document.querySelector('#list');

// adding to dos
form.addEventListener('submit', (e) => {
    const li = document.createElement('li');
    li.classList.add('list-item');

    const taskInput = document.querySelector('#task').value;
    if(taskInput === ''){
       alert('please input a task');
    }else{
        li.innerHTML = `<a href="#">${taskInput}</a> <p class="delete">X</p>`;
        newTask = list.appendChild(li);
        e.preventDefault();
    }

    document.querySelector('#task').value = '';
})


// deleting to dos

document.querySelector('#list').addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

// delete all items

document.querySelector('#clear-task').addEventListener('click', (e) => {
    list.remove();
})

// search for a task

const search = document.querySelector('.search');
search.addEventListener('keyup', filterList);
//     search = document.querySelector('.search').value.toUpperCase();
//     ul = document.querySelector('#list');
//     li = ul.querySelectorAll('li.list-item');

//     // li.forEach(element => {
//     //     let links = li[element].getElementByTagName('a')[0];
//     //     if(links.innerHTML.toUpperCase().indexOf(searchInput) > -1){
//     //         li[element].style.display = '';
//     //     }else{
//     //         li[element].style.display ='none';
//     //     }
//     // });
//     for(let i = 0; i < li.lenght; i++){
//         let links = li[i].getElementByTagName('a')[0];

//         if(links.innerHTML.toUpperCase().indexOf(search) > -1){
//             li[i].style.display = '';
//         }else{
//             li[i].style.display = 'none';
//         }
//     }
// })

function filterList(){
    let search = document.querySelector('.search').value.toUpperCase();

    let ul = document.querySelector('#list');
    let li = ul.querySelectorAll('li.list-item');

    for(let i = 0; i < li.lenght; i++){
        let a = li[i].getElementByTagName('a')[0];
        
        if(a.innerHTML.toUpperCase().indexOf(search) > -1){
            li[i].style.display = '';
        }else{
            li[i].style.display = 'none';
        }
    }
    console.log(12334);
}
