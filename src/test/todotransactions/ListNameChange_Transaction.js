import jsTPS_Transaction from jsTPS_Transaction;

class ListNameChange_Transaction extends jsTPS_Transaction{
    constructor(todoList,newName){
        this.newName = newName;
        this.todoList = todoList;
        this.oldName = todoList.name;
    }

    doTransaction(){
        this.todoList.name = this.newName;
    }

    undoTransaction(){
        this.todoList.name = this.oldName;
    }

    toString(){
        return "New Name: "+this.newName;
    }

}

