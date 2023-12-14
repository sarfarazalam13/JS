const todo=[];
function addtodo()
{
const inpelem=document.querySelector('.inp')
const name=inpelem.value;
todo.push(name);
console.log(todo);
inpelem.value='';
}