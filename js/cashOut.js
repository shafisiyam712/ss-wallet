//step 1 add out-btn to evenlistner
document.getElementById('out-btn').
    addEventListener('click',function(even){
        even.preventDefault()
        //step-2 converting it to number

        const text=document.getElementById('avlbalance').innerText
       const balance=parseFloat(text)
        const pin= document.getElementById('outPin').value
        //step-3 pin validation
       if(pin==='1234'){
        const money=document.getElementById('out-Money').value
        const outMoney=parseFloat(money)
        //avlbalance.innerText=balance-outMoney
        //step-4 new balance
        const newBalance=balance-outMoney
        document.getElementById('avlbalance').innerText=newBalance
       }
       else{
        console.log("wrong pin please try again!!");
        
       }
        
    })