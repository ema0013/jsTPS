
class AndMask_Transaction extends jsTPS_Transaction{

    constructor(initNum,initIntNum,initMask){
        super();
        this.num = initNum;
        this.intNum = initIntNum;
        this.initMask = initMask;
    }

    doTransaction(){
        this.num.andMask(this.mask);
    }

    undoTransaction(){
        this.num.setNum(this.intNum);
    }

    toString(){
        return "And Mask: "+this.mask;
    }
}