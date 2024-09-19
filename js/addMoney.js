//step 1 add add-btn to evenlistner
document.getElementById('add-btn').
    addEventListener('click',function(even){
        even.preventDefault()
        //step-2 converting it to number

        const text=document.getElementById('avlbalance').innerText
       const balance=parseFloat(text)
        const pin= document.getElementById('addPin').value
        //step-3 pin validation
       if(pin==='1234'){
        const money=document.getElementById('add-Money').value
        const addMoney=parseFloat(money)
        //new balance 
        avlbalance.innerText=balance+addMoney
       }
       else{
        console.log("wrong pin please try again!!");
        
       }
        
        
    })