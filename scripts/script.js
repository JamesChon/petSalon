var globalBariable = "I'm in global scope";

function myFunction() {
    // This function can access globalVariable
    console.log(globalVariable);
}

myFunction();
// Accessing localVariable here would result in an error

function myFunction2(){
    var localVar = "I'm in a local scope";
}
console.log(localVar);

if (true) {
    let blockVariable - "I'm in block scope";
    console.log(blockVariable)l;
}
// Accessing blockVAriable here would result in an error

myfunction2()

function planeTicket(destination){
    console.log("Traveling to ..." + destination);
    return price*1.11;
}


function calculateProfits(){
    var price1 = planeTicket("Italy",100);
    var price2 = planeTicket("Amsterdam",200);
    var price3 = planeTicket("Barcelona",150);
    
    console.log(price1 + price2 + price3);
}

calculateProfits();

let salon = {
    name: "The fashion pet",
    phone: "123-456-7890"
}