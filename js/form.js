//step 1 add evenlistner to login button

document.getElementById('btn-login').
    addEventListener('click',function(even){
        //stop from reload
        even.preventDefault()
        //step 2 get the number & pin
        const phoneNumber=document.getElementById('input-number').value
        const pinNumber=document.getElementById('input-pin').value
        console.log(phoneNumber,pinNumber);
        //step 3 check validation

        if(phoneNumber==='786' && pinNumber==='1234'){
            //step-4 to go new page
            window.location.href='/home.html'
        }
        else{
            console.log("wrong number & pin.");
            
        }
    })
