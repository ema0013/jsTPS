
class OrMask_Transaction extends jsTPS_Transaction{

    constructor(initNum,initIntNum,initMask){
        this.num = initNum;
        this.intNum = initIntNum;
        this.initMask = initMask;
    }

    doTransaction(){
        this.num.orMask(this.mask);
    }

    undoTransaction(){
        this.num.setNum(this.intNum);
    }

    toString(){
        return "Or Mask: "+this.mask;
    }
}