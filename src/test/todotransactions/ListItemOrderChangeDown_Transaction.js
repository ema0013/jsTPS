import jsTPS_Transaction from jsTPS_Transaction;

class ListItemOrderChangeDown_Transaction extends jsTPS_Transaction{
    constructor(todoList,item){
        this.todoList = todoList;
        this.item = item;
        this.originalIndex = this.todoList.items.indexOf(this.item);
    }

    doTransaction(){
        let cup = this.todoList.items[originalIndex + 1];
        this.todoList.items[originalIndex+1] = this.item;
        this.todoList.items[originalIndex] = cup;
    }

    undoTransaction(){
        let cup = this.todoList.items[originalIndex];
        this.todoList.items[originalIndex] = this.item;
        this.todoList.items[originalIndex+1] = cup;
    }

    toString(){
        return "item moved down: "+this.todoList.item;
    }


}