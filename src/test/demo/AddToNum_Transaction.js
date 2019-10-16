
class AddToNum_Transaction extends jsTPS_Transaction{
    constructor(initNum, initAmountToAdd){
        super();
        this.num = initNum;
        this.amountToAdd = initAmountToAdd;
    }

    doTransaction(){
        var oldNum = this.num.getNum();
        var newNum = oldNum + this.amountToAdd;
        this.num.setNum(newNum);
    }

    undoTransaction(){
        var oldNum = this.num.getNum();
        var newNum = oldNum - this.amountToAdd;
        this.num.setNum(newNum);
    }

    toString(){
        return "Amount to add: "+this.amountToAdd;
    }
}