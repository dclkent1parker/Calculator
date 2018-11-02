var first= document.getElementById("first");
var operation=document.getElementById("operation");
var second=document.getElementById("second");
var calculate=document.getElementById("calculate");
var calculateDesktop=document.getElementById("calculateDesktop")
var result=document.getElementById("result");

function calculator(){

/* Check if entered value is a number or not */ 

first.addEventListener("keyup", function(){
    if(isNaN(first.value)){
        first.style.backgroundColor="#B20000";
    }
    else{
        first.style.backgroundColor="transparent";
    }
})
second.addEventListener("keyup", function(){
    if(isNaN(second.value)){
        second.style.backgroundColor="#B20000";
    }
    else{
        second.style.backgroundColor="transparent";
    }
})


calculate.addEventListener("click", function Calcul(){
    var firstValue = parseInt(first.value);
    var secondValue= parseInt(second.value);

if(operation.options[0].selected){
    var finalResult= firstValue*secondValue;
    result.value=finalResult;
    console.log(finalResult)
}
else if(operation.options[1].selected){
    finalResult= firstValue/secondValue;
    result.value=finalResult;
    console.log(finalResult)
}
else if(operation.options[2].selected){
    finalResult= firstValue+secondValue;
    result.value=finalResult;
    console.log(finalResult)
}
else if(operation.options[3].selected){
    finalResult= firstValue-secondValue;
    result.value=finalResult;
    console.log(finalResult)
}
else if(operation.options[4].selected){
    finalResult= firstValue%secondValue;
    result.value=finalResult;
    console.log(finalResult)

};
});

calculateDesktop.addEventListener("click", function Calcul(){
    var firstValue = parseInt(first.value);
    var secondValue= parseInt(second.value);

if(operation.options[0].selected){
    var finalResult= firstValue*secondValue;
    result.value=finalResult;
    console.log(finalResult)
}
else if(operation.options[1].selected){
    finalResult= firstValue/secondValue;
    result.value=finalResult;
    console.log(finalResult)
}
else if(operation.options[2].selected){
    finalResult= firstValue+secondValue;
    result.value=finalResult;
    console.log(finalResult)
}
else if(operation.options[3].selected){
    finalResult= firstValue-secondValue;
    result.value=finalResult;
    console.log(finalResult)
}
else if(operation.options[4].selected){
    finalResult= firstValue%secondValue;
    result.value=finalResult;
    console.log(finalResult)

};
});

};

calculator();