import jsTPS_Transaction from jsTPS_Transaction;

class ListItemRemoval_Transaction extends jsTPS_Transaction{
    constructor(todoList,item){
        this.todoList = todoList;
        this.item = item;
        this.originalIndex = this.todoList.items.indexOf(this.item);
    }

    doTransaction(){
        this.todoList.items.splice(this.originalIndex,1);
    }

    undoTransaction(){
        this.todoList.items.splice(this.originalIndex,0,this.item);
    }

    toString(){
        return "deleted item: "+this.item;
    }
}