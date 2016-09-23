function sum(n1, n2){
    return n1 + n2;
}

function subtract(n1, n2){
    return n1 - n2;
}

function multiply(n1, n2){
    return n1 * n2;
}

function divide(n1, n2){
    return n1 / n2;
}

addEventListener("message", function(e){
    let result;
    switch(e.data.action){
        case "sum":
            result = sum(e.data.n1, e.data.n2);
            break;
        case "subtract":
            result = subract(e.data.n1, e.data.n2);
            break;
        case "multiply":
            result = multiply(e.data.n1, e.data.n2);
            break;
        case "divide":
            result = divide(e.data.n1, e.data.n2);
            break;
    }
    
    postMessage({action : e.data.action, result : result});
});