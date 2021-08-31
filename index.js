function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    function namedFunction() {
        return " "
    }
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return function(){}
}