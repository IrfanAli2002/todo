var li = document.getElementById('list')
var todoInput = document.getElementById('todoInp')

function addtodo() {

    var textinp = todoInp.value
    var todotextNode = document.createTextNode(textinp)
    var list = document.createElement('li')
    list.setAttribute('class', 'todoList')
    list.appendChild(todotextNode)
    li.appendChild(list)
    
    var editBtn = document.createElement('button')
    editBtn.setAttribute('onclick', 'editTodo(this)')
    var editText = document.createTextNode('edit')
    editBtn.appendChild(editText)
    list.appendChild(editBtn)
 
    var delBtn = document.createElement('button')
    delBtn.setAttribute('onclick', 'delTodo(this)')
    var delTextNote = document.createTextNode('Delete')
    delBtn.appendChild(delTextNote)
    list.appendChild(delBtn)


}

function editTodo(element) {
    element.parentNode.firstChild.nodeValue = prompt('editValue', element.parentNode.firstChild.nodeValue)
    console.log(element.parentNode.childNodes[0])
}
function delTodo(element) {
    element.parentNode.remove()
    console.log(element)
}
function delAll() {
    li.innerHTML = ''
}