//write your JS code here:


 const OPERATIONS = [
                {operation: "push", data: [[1, 2, 3], 4]},
                {operation: "+", data: [1, 2, 3]},
                {operation: "+", data: [3]},
                {operation: "*", data: [2, 3]},
                {operation: "filter", data: [[1, 2, 3], 3]},
                {operation: "merge", data: [[1, 2, 3], [4, 5], [6], [7]]},
            ];



//ADD
function opSum(data){
    let result = 0
    /*
    for (let i = 0; i < data.length; i++) {
        result += data[i];        
    }
    */

    data.forEach(element => {
        result *= element
    });
    return result;
}


//PRODUCT
function opMulti(data){
    return data.reduce(
        (acc,curr) => acc*curr, //Accumulated * Current array value
        1 //Initial value
    );
}


//PUSH 
function opPush(data) {
    /*//ESTÁ POCHO
    return data.reduce(
        (acc,curr) => [...acc,curr], //"...array" for get only array content. For ex: [1,2,3] --> 1,2,3
        []
        
    );*/

    let [first, ...rest] = data;
    console.log("first content:", first);
    console.log("rest content:", rest);
    return [...first, ...rest];
}



//MERGE
function opMerge(data) {
    return [].concat(...data);
}



//FILTER
function opFilter(data) {
    
}



function batchProcessing(operations) {
    for (let i = 0; i < array.length; i++) {
        const op = operations[i];
        switch(op.operation){
            case "+":
                opSum(op.data);
                break;
            case "*":
                opMul(op.data);
                break;
             case "push":
                opPush(op.data);
                break;
            case "merge":
                opMerge(op.data);
                break;
            case "filter":
                opFilter(op.data);
                break;
        }
    }   
        operations.forEach()
}