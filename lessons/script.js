let tabl = document.querySelector('.tabl')
let plit = document.querySelector('.plit')
let tasks = document.querySelectorAll('.task')
let main = document.querySelector('main')

tabl.onclick = () =>{
    tasks.forEach(task => {
        task.classList.remove('plits')
        task.classList.add('task')
        main.classList.remove('main')
    })
} 
plit.onclick = () => {
    tasks.forEach(task => {
        task.classList.remove('task')
        task.classList.add('plits')
        main.classList.add('main')
    })
}