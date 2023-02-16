function getInputFeildValue(feildID){
    let feild=document.getElementById(feildID);
    let feildValueString=feild.value;
    feild.value='';
    return parseFloat(feildValueString);
}

function getElementValue(elementId){
    let element=document.getElementById(elementId);
    let elementValueString= element.innerText;
    return parseFloat(elementValueString);
}

function setTotalValue(id,value){
    let element =document.getElementById(id);
    let elementString=element.innerHTML;
    let elementvalue=parseFloat(elementString);
    let newTotalValue=elementvalue +value;
    element.innerHTML=newTotalValue;
}

//Subtraction 
function setsubTotalValue(id,value){
    let element=document.getElementById(id);
    let elementString=element.innerText;
    let elementValue=parseFloat(elementString);
    element.innerHTML=elementValue-value;
}