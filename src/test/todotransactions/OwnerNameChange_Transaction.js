import jsTPS_Transaction from jsTPS_Transaction;

class OwnerNameChange_Transaction extends jsTPS_Transaction{
    constructor(todoList,newOwner){
        this.newOwner = newOwner;
        this.todoList = todoList;
        this.oldOwner = this.todoList.owner;
    }

    doTransaction(){
        this.todoList.owner = this.newOwner;
    }

    undoTransaction(){
        this.todoList.owner = this.oldOwner;
    }

    toString(){
        return "New Owner: "+this.newOwner;
    }
}