import jsTPS_Transaction from jsTPS_Transaction;

class ListItemEdit_Transaction extends jsTPS_Transaction{
    constructor(todoList, originalItem, editedItem){
        this.todoList = todoList;
        this.originalItem = originalItem;
        this.editedItem = editedItem;
        this.index = this.todoList.items.indexOf(originalItem);
    }

    doTransaction(){
        this.todoList.items[this.index] = this.editedItem;
    }

    undoTransaction(){
        this.todoList.items[this.index] = this.originalItem;
    }

    toString(){
        return "Edited item: "+this.originalItem;
    }
}