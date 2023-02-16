document.getElementById('diposit-btn').addEventListener('click',function(){
    let dipositvalue= getInputFeildValue('dipositInput');
    // let dipositTotal=getElementValue('dipositValue');
    // let balaceTotal=getElementValue('balanceValue');
    setTotalValue('dipositValue',dipositvalue);
    setTotalValue('balanceValue',dipositvalue);
    
})
document.getElementById('withdraw-btn').addEventListener('click',function(){
    let withdrawvalue=getInputFeildValue('withdrawInput');
    setTotalValue('withdrawValue',withdrawvalue);
    setsubTotalValue('balanceValue',withdrawvalue);
    
})