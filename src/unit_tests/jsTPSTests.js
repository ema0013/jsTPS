
class jsTPSTests{

    constructor(){

    }

    testAdd(){
        var tps = new jsTPS();
        var num = new Num();
        var results = "testing add to num: <br/>";

        if(num.getNum() === 0){
            results +="num initialized as 0 <br/>";
        }
        else{
            results +="number is not initialized as  <br/>";
        }

        tps.addTransaction(new AddToNum_Transaction(num,5));
        results +="adding addtransaction  <br/>"
        if(num.getNum() === 5){
            results +="after addtransaction, num = 5 <br/>";
        }
        else{
            results +="after addtransaction, num is not 5 <br/>";
        }
        if(tps.getSize() === 1){
            results +="after addtransaction, tps size is now 1 <br/>";
        }
        else{
            results +="after addtransaction, tps size is not 1 <br/>";
        }
        if(tps.getRedoSize() === 0){
            results +="after addtransaction, tps redosize is now 0 <br/>";
        }
        else{
            results +="after addtransaction, tps redosize is not 0 <br/>";
        }
        if(tps.getUndoSize() === 1){
            results +="after addtransaction, tps undosize is now 1 <br/>";
        }
        else{
            results +="after addtransaction, tps undosize is not 1 <br/>";
        }
        results +="adding addtransaction 1 <br/>"
        tps.addTransaction(new AddToNum_Transaction(num,10));
        if(num.getNum() === 15){
            results +="after addtransaction, num = 15 <br/>";
        }
        else{
            results +="after addtransaction, num is not 15 <br/>";
        }
        if(tps.getSize() === 2){
            results +="after addtransaction, tps size is now 2 <br/>";
        }
        else{
            results +="after addtransaction, tps size is not 2 <br/>";
        }
        if(tps.getRedoSize() === 0){
            results +="after addtransaction, tps redosize is now 0 <br/>";
        }
        else{
            results +="after addtransaction, tps redosize is not 0 <br/>";
        }
        if(tps.getUndoSize() === 2){
            results +="after addtransaction, tps undosize is now 2 <br/>";
        }
        else{
            results +="after addtransaction, tps undosize is not 2 <br/>";
        }
        results +="adding addtransaction 2 <br/>"
        tps.addTransaction(new AddToNum_Transaction(num,20));
        if(num.getNum() === 35){
            results +="after addtransaction, num = 35 <br/>";
        }
        else{
            results +="after addtransaction, num is not 35 <br/>";
        }
        if(tps.getSize() === 2){
            results +="after addtransaction, tps size is now 3 <br/>";
        }
        else{
            results +="after addtransaction, tps size is not 3 <br/>";
        }
        if(tps.getRedoSize() === 0){
            results +="after addtransaction, tps redosize is now 0 <br/>";
        }
        else{
            results +="after addtransaction, tps redosize is not 0 <br/>";
        }
        if(tps.getUndoSize() === 2){
            results +="after addtransaction, tps undosize is now 2 <br/>";
        }
        else{
            results +="after addtransaction, tps undosize is not 2 <br/>";
        } 
        return results;       
    }

    testAndMask(){
        var tps = new jsTPS();
        var num = new Num();
        var results = "testing andmask: <br/>";

        if(num.getNum() === 0){
            results +="num initialized as 0 <br/>";
        }
        else{
            results +="number is not initialized as  <br/>";
        }

        tps.addTransaction(new AddToNum_Transaction(num,12));
        tps.addTransaction(new AndMask_Transaction(num,num.getNum(),4));
        if(num.getNum() === 4){
            results +="num is 4 <br/>";
        }
        else{
            results +="num is not 4 <br/>";
        }
        if(tps.getSize() === 2){
            results +="tps size is 2 <br/>";
        }
        else{
            results +="tps size is not 2 <br/>";
        }
        tps.undoTransaction();
        results += "undoing andmask transaction <br/>";
        if(num.getNum() === 12){
            results +="num is now 12 <br/>";
        }
        else{
            results +="num is not 12 <br/>";
        }
        if(tps.getSize() === 2){
            results +="tps size is now 2 <br/>";
        }
        else{
            results +="tps size is not 2 <br/>";
        }
        if(tps.getRedoSize() === 1){
            results +="tps redosize is 1 <br/>";
        }
        else{
            results +="tps redosize is not 1 <br/>";
        }
        if(tps.getUndoSize() === 1){
            results +="tps undosize is 1 <br/>";
        }
        else{
            results+="tps undosize is not 1 <br/>";
        }
        return results;
    }

    testUndo(){
        var tps = new jsTPS();
        var num = new Num();
        var results = "testing undo: <br/>";
        if(!tps.hasTransactionToUndo()){
            results +="tps has no transactions to undo <br/>";
        }
        else{
            results +="tps has transactions to undo <br/>";
        }
        if(!tps.hasTransactionToRedo()){
            results +="tps has no transactions to redo <br/>";
        }
        else{
            results +="tps has transactions to redo <br/>";
        }
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        results +="adding add 5 transaction <br/>";
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        results +="adding add 10 transaction <br/>";
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        results +="adding add 20 transaction <br/>";
        if(tps.hasTransactionToUndo()){
            results +="tps has transactions to undo <br/>";
        }
        else{
            results +="tps has no transactions to undo <br/>";
        }
        if(!tps.hasTransactionToRedo()){
            results +="tps has no transactions to redo <br/>";
        }
        else{
            results +="tps has transactions to redo <br/>";
        }
        if(num.getNum() === 35){
            results +="num is now 35 <br/>";
        }
        else{
            results +="num is not 35 <br/>";
        }
        if(tps.hasTransactionToUndo()){
            results +="tps has transactions to undo <br/>";
        }
        else{
            results +="tps has no transactions to undo <br/>";
        }
        if(tps.getSize() === 3){
            results+="tps size is 3 <br/>";
        }
        else{
            results+="tps size is not 3 <br/>";
        }
        if(tps.getRedoSize() === 0){
            results +="after addtransaction, tps redosize is now 0 <br/>";
        }
        else{
            results +="after addtransaction, tps redosize is not 0 <br/>";
        }
        if(tps.getUndoSize() === 3){
            results +="after addtransaction, tps undosize is now 3 <br/>";
        }
        else{
            results +="after addtransaction, tps undosize is not 3 <br/>";
        }

        tps.undoTransaction();
        results +="undoing transaction <br/>";
        if(tps.hasTransactionToUndo()){
            results +="tps has transactions to undo <br/>";
        }
        else{
            results +="tps has no transactions to undo <br/>";
        }
        if(tps.hasTransactionToRedo()){
            results +="tps has transactions to redo <br/>";
        }
        else{
            results +="tps has no transactions to redo <br/>";
        }
        if(num.getNum() === 15){
            results +="num is now 15 <br/>";
        }
        else{
            results +="num is not 15 <br/>";
        }
        if(tps.getSize() === 3){
            results+="tps size is 3 <br/>";
        }
        else{
            results+="tps size is not 3 <br/>";
        }
        if(tps.getRedoSize() === 1){
            results +="after addtransaction, tps redosize is now 1 <br/>";
        }
        else{
            results +="after addtransaction, tps redosize is not 1 <br/>";
        }
        if(tps.getUndoSize() === 2){
            results +="after addtransaction, tps undosize is now 2 <br/>";
        }
        else{
            results +="after addtransaction, tps undosize is not 2 <br/>";
        }

        tps.undoTransaction();
        results +="undoing transaction <br/>";
        if(tps.hasTransactionToUndo()){
            results +="tps has transactions to undo <br/>";
        }
        else{
            results +="tps has no transactions to undo <br/>";
        }
        if(tps.hasTransactionToRedo()){
            results +="tps has transactions to redo <br/>";
        }
        else{
            results +="tps has no transactions to redo <br/>";
        }
        if(num.getNum() === 5){
            results +="num is now 5 <br/>";
        }
        else{
            results +="num is not 5 <br/>";
        }
        if(tps.getSize() === 3){
            results+="tps size is 3 <br/>";
        }
        else{
            results+="tps size is not 3 <br/>";
        }
        if(tps.getRedoSize() === 2){
            results +="after addtransaction, tps redosize is now 2 <br/>";
        }
        else{
            results +="after addtransaction, tps redosize is not 2 <br/>";
        }
        if(tps.getUndoSize() === 1){
            results +="after addtransaction, tps undosize is now 1 <br/>";
        }
        else{
            results +="after addtransaction, tps undosize is not 1 <br/>";
        }

        tps.undoTransaction();
        results +="undoing transaction <br/>";
        if(!tps.hasTransactionToUndo()){
            results +="tps has no transactions to undo <br/>";
        }
        else{
            results +="tps has transactions to undo <br/>";
        }
        if(tps.hasTransactionToRedo()){
            results +="tps has transactions to redo <br/>";
        }
        else{
            results +="tps has no transactions to redo <br/>";
        }
        if(num.getNum() === 0){
            results +="num is now 0 <br/>";
        }
        else{
            results +="num is not 0 <br/>";
        }
        if(tps.getSize() === 3){
            results+="tps size is 3 <br/>";
        }
        else{
            results+="tps size is not 3 <br/>";
        }
        if(tps.getRedoSize() === 3){
            results +="after addtransaction, tps redosize is now 3 <br/>";
        }
        else{
            results +="after addtransaction, tps redosize is not 3 <br/>";
        }
        if(tps.getUndoSize() === 0){
            results +="after addtransaction, tps undosize is now 0 <br/>";
        }
        else{
            results +="after addtransaction, tps undosize is not 0 <br/>";
        }

        tps.undoTransaction();
        results +="No more transactions to undo <br/>";
        if(!tps.hasTransactionToUndo()){
            results +="tps has no transactions to undo <br/>";
        }
        else{
            results +="tps has transactions to undo <br/>";
        }
        if(tps.hasTransactionToRedo()){
            results +="tps has transactions to redo <br/>";
        }
        else{
            results +="tps has no transactions to redo <br/>";
        }
        if(num.getNum() === 0){
            results +="num is now 0 <br/>";
        }
        else{
            results +="num is not 0 <br/>";
        }
        if(tps.getSize() === 3){
            results+="tps size is 3 <br/>";
        }
        else{
            results+="tps size is not 3 <br/>";
        }
        if(tps.getRedoSize() === 3){
            results +="after addtransaction, tps redosize is now 3 <br/>";
        }
        else{
            results +="after addtransaction, tps redosize is not 3 <br/>";
        }
        if(tps.getUndoSize() === 0){
            results +="after addtransaction, tps undosize is now 0 <br/>";
        }
        else{
            results +="after addtransaction, tps undosize is not 0 <br/>";
        }
        return results;
    }

    testRedo(){
        var tps = new jsTPS();
        var num = new Num();
        var results = "testing redo: <br/>";
        if(!tps.hasTransactionToUndo()){
            results +="tps has no transactions to undo <br/>";
        }
        else{
            results +="tps has transactions to undo <br/>";
        }
        if(!tps.hasTransactionToRedo()){
            results +="tps has no transactions to redo <br/>";
        }
        else{
            results +="tps has transactions to redo <br/>";
        }
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        results +="adding add 5 transaction <br/>";
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        results +="adding add 10 transaction <br/>";
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        results +="adding add 20 transaction <br/>";
        if(tps.hasTransactionToUndo()){
            results +="tps has transactions to undo <br/>";
        }
        else{
            results +="tps has no transactions to undo <br/>";
        }
        if(!tps.hasTransactionToRedo()){
            results +="tps has no transactions to redo <br/>";
        }
        else{
            results +="tps has transactions to redo <br/>";
        }
        if(num.getNum() === 35){
            results +="num is now 35 <br/>";
        }
        else{
            results +="num is not 35 <br/>";
        }
        if(tps.hasTransactionToUndo()){
            results +="tps has transactions to undo <br/>";
        }
        else{
            results +="tps has no transactions to undo <br/>";
        }
        if(tps.getSize() === 3){
            results+="tps size is 3 <br/>";
        }
        else{
            results+="tps size is not 3 <br/>";
        }
        if(tps.getRedoSize() === 0){
            results +="after addtransaction, tps redosize is now 0 <br/>";
        }
        else{
            results +="after addtransaction, tps redosize is not 0 <br/>";
        }
        if(tps.getUndoSize() === 3){
            results +="after addtransaction, tps undosize is now 3 <br/>";
        }
        else{
            results +="after addtransaction, tps undosize is not 3 <br/>";
        }

        results +="undoing and redoing 1 transacition <br/>"
        tps.undoTransaction();
        tps.doTransaction();
        if(tps.hasTransactionToUndo()){
            results +="tps has transactions to undo <br/>";
        }
        else{
            results +="tps has no transactions to undo <br/>";
        }
        if(!tps.hasTransactionToRedo()){
            results +="tps has no transactions to redo <br/>";
        }
        else{
            results +="tps has transactions to redo <br/>";
        }
        if(num.getNum() === 35){
            results +="num is now 35 <br/>";
        }
        else{
            results +="num is not 35 <br/>";
        }
        if(tps.hasTransactionToUndo()){
            results +="tps has transactions to undo <br/>";
        }
        else{
            results +="tps has no transactions to undo <br/>";
        }
        if(tps.getSize() === 3){
            results+="tps size is 3 <br/>";
        }
        else{
            results+="tps size is not 3 <br/>";
        }
        if(tps.getRedoSize() === 0){
            results +="after addtransaction, tps redosize is now 0 <br/>";
        }
        else{
            results +="after addtransaction, tps redosize is not 0 <br/>";
        }
        if(tps.getUndoSize() === 3){
            results +="after addtransaction, tps undosize is now 3 <br/>";
        }
        else{
            results +="after addtransaction, tps undosize is not 3 <br/>";
        }

        results +="undoing first two and redoing first two <br/>";
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        if(tps.hasTransactionToUndo()){
            results +="tps has transactions to undo <br/>";
        }
        else{
            results +="tps has no transactions to undo <br/>";
        }
        if(!tps.hasTransactionToRedo()){
            results +="tps has no transactions to redo <br/>";
        }
        else{
            results +="tps has transactions to redo <br/>";
        }
        if(num.getNum() === 35){
            results +="num is now 35 <br/>";
        }
        else{
            results +="num is not 35 <br/>";
        }
        if(tps.hasTransactionToUndo()){
            results +="tps has transactions to undo <br/>";
        }
        else{
            results +="tps has no transactions to undo <br/>";
        }
        if(tps.getSize() === 3){
            results+="tps size is 3 <br/>";
        }
        else{
            results+="tps size is not 3 <br/>";
        }
        if(tps.getRedoSize() === 0){
            results +="after addtransaction, tps redosize is now 0 <br/>";
        }
        else{
            results +="after addtransaction, tps redosize is not 0 <br/>";
        }
        if(tps.getUndoSize() === 3){
            results +="after addtransaction, tps undosize is now 3 <br/>";
        }
        else{
            results +="after addtransaction, tps undosize is not 3 <br/>";
        }

        results +="undoing and redoing all 3 transactions <br/>";
        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        if(tps.hasTransactionToUndo()){
            results +="tps has transactions to undo <br/>";
        }
        else{
            results +="tps has no transactions to undo <br/>";
        }
        if(!tps.hasTransactionToRedo()){
            results +="tps has no transactions to redo <br/>";
        }
        else{
            results +="tps has transactions to redo <br/>";
        }
        if(num.getNum() === 35){
            results +="num is now 35 <br/>";
        }
        else{
            results +="num is not 35 <br/>";
        }
        if(tps.hasTransactionToUndo()){
            results +="tps has transactions to undo <br/>";
        }
        else{
            results +="tps has no transactions to undo <br/>";
        }
        if(tps.getSize() === 3){
            results+="tps size is 3 <br/>";
        }
        else{
            results+="tps size is not 3 <br/>";
        }
        if(tps.getRedoSize() === 0){
            results +="after addtransaction, tps redosize is now 0 <br/>";
        }
        else{
            results +="after addtransaction, tps redosize is not 0 <br/>";
        }
        if(tps.getUndoSize() === 3){
            results +="after addtransaction, tps undosize is now 3 <br/>";
        }
        else{
            results +="after addtransaction, tps undosize is not 3 <br/>";
        }

        results +="undo three and redo two transactions <br/>";
        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        if(tps.hasTransactionToUndo()){
            results +="tps has transactions to undo <br/>";
        }
        else{
            results +="tps has no transactions to undo <br/>";
        }
        if(tps.hasTransactionToRedo()){
            results +="tps has transactions to redo <br/>";
        }
        else{
            results +="tps has no transactions to redo <br/>";
        }
        if(num.getNum() === 15){
            results +="num is now 15 <br/>";
        }
        else{
            results +="num is not 15 <br/>";
        }
        if(tps.hasTransactionToUndo()){
            results +="tps has transactions to undo <br/>";
        }
        else{
            results +="tps has no transactions to undo <br/>";
        }
        if(tps.getSize() === 3){
            results+="tps size is 3 <br/>";
        }
        else{
            results+="tps size is not 3 <br/>";
        }
        if(tps.getRedoSize() === 1){
            results +="after addtransaction, tps redosize is now 1 <br/>";
        }
        else{
            results +="after addtransaction, tps redosize is not 1 <br/>";
        }
        if(tps.getUndoSize() === 2){
            results +="after addtransaction, tps undosize is now 2 <br/>";
        }
        else{
            results +="after addtransaction, tps undosize is not 2 <br/>";
        }

        results +="undo all 3 and redo 4 transactions <br/>";
        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        if(tps.hasTransactionToUndo()){
            results +="tps has transactions to undo <br/>";
        }
        else{
            results +="tps has no transactions to undo <br/>";
        }
        if(!tps.hasTransactionToRedo()){
            results +="tps has no transactions to redo <br/>";
        }
        else{
            results +="tps has transactions to redo <br/>";
        }
        if(num.getNum() === 35){
            results +="num is now 35 <br/>";
        }
        else{
            results +="num is not 35 <br/>";
        }
        if(tps.hasTransactionToUndo()){
            results +="tps has transactions to undo <br/>";
        }
        else{
            results +="tps has no transactions to undo <br/>";
        }
        if(tps.getSize() === 3){
            results+="tps size is 3 <br/>";
        }
        else{
            results+="tps size is not 3 <br/>";
        }
        if(tps.getRedoSize() === 0){
            results +="after addtransaction, tps redosize is now 0 <br/>";
        }
        else{
            results +="after addtransaction, tps redosize is not 0 <br/>";
        }
        if(tps.getUndoSize() === 3){
            results +="after addtransaction, tps undosize is now 3 <br/>";
        }
        else{
            results +="after addtransaction, tps undosize is not 3 <br/>";
        }
        return results;

    }

    testClear(){
        var tps = new jsTPS();
        var num = new Num();
        var results = "testing clear: <br/>";
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        results +="adding add 5 transaction <br/>";
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        results +="adding add 10 transaction <br/>";
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        results +="adding add 20 transaction <br/>";
        if(num.getNum() === 35){
            results+="num is now 35 <br/>";
        }
        else{
            results+="num is not 35 <br/>";
        }
        if(tps.getSize() === 3){
            results+="tps size is 3 <br/>";
        }
        else{
            results+="tps size is not 3 <br/>";
        }
        if(tps.getRedoSize() === 0){
            results +="after addtransaction, tps redosize is now 0 <br/>";
        }
        else{
            results +="after addtransaction, tps redosize is not 0 <br/>";
        }
        if(tps.getUndoSize() === 3){
            results +="after addtransaction, tps undosize is now 3 <br/>";
        }
        else{
            results +="after addtransaction, tps undosize is not 3 <br/>";
        }
        results+="clearing transactions <br/>"
        tps.clearAllTransactions();
        if(num.getNum() === 35){
            results+="num is now 35 <br/>";
        }
        else{
            results+="num is not 35 <br/>";
        }
        if(tps.getSize() === 0){
            results+="tps size is 0 <br/>";
        }
        else{
            results+="tps size is not 0 <br/>";
        }
        if(tps.getRedoSize() === 0){
            results +="after addtransaction, tps redosize is now 0 <br/>";
        }
        else{
            results +="after addtransaction, tps redosize is not 0 <br/>";
        }
        if(tps.getUndoSize() === 0){
            results +="after addtransaction, tps undosize is now 0 <br/>";
        }
        else{
            results +="after addtransaction, tps undosize is not 0 <br/>";
        }
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        results +="adding add 5 transaction <br/>";
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        results +="adding add 10 transaction <br/>";
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        results +="adding add 20 transaction <br/>";
        if(num.getNum() === 70){
            results+="num is now 70 <br/>";
        }
        else{
            results+="num is not 70 <br/>";
        }
        if(tps.getSize() === 3){
            results+="tps size is 3 <br/>";
        }
        else{
            results+="tps size is not 3 <br/>";
        }
        if(tps.getRedoSize() === 0){
            results +="after addtransaction, tps redosize is now 0 <br/>";
        }
        else{
            results +="after addtransaction, tps redosize is not 0 <br/>";
        }
        if(tps.getUndoSize() === 3){
            results +="after addtransaction, tps undosize is now 3 <br/>";
        }
        else{
            results +="after addtransaction, tps undosize is not 3 <br/>";
        }
        results+="clearing transactions <br/>"
        tps.clearAllTransactions();
        if(num.getNum() === 75){
            results+="num is now 75 <br/>";
        }
        else{
            results+="num is not 75 <br/>";
        }
        if(tps.getSize() === 0){
            results+="tps size is 0 <br/>";
        }
        else{
            results+="tps size is not 0 <br/>";
        }
        if(tps.getRedoSize() === 0){
            results +="after addtransaction, tps redosize is now 0 <br/>";
        }
        else{
            results +="after addtransaction, tps redosize is not 0 <br/>";
        }
        if(tps.getUndoSize() === 0){
            results +="after addtransaction, tps undosize is now 0 <br/>";
        }
        else{
            results +="after addtransaction, tps undosize is not 0 <br/>";
        }
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        results +="adding add 5 transaction <br/>";
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        results +="adding add 10 transaction <br/>";
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        results +="adding add 20 transaction <br/>";
        if(num.getNum() === 105){
            results+="num is now 105 <br/>";
        }
        else{
            results+="num is not 105 <br/>";
        }
        if(tps.getSize() === 3){
            results+="tps size is 3 <br/>";
        }
        else{
            results+="tps size is not 3 <br/>";
        }
        if(tps.getRedoSize() === 0){
            results +="after addtransaction, tps redosize is now 0 <br/>";
        }
        else{
            results +="after addtransaction, tps redosize is not 0 <br/>";
        }
        if(tps.getUndoSize() === 3){
            results +="after addtransaction, tps undosize is now 3 <br/>";
        }
        else{
            results +="after addtransaction, tps undosize is not 3 <br/>";
        }
        return results;
        

    }
    
}