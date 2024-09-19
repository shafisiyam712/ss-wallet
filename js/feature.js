//take both add and out button
document.getElementById('btn-show-cash-out').
    addEventListener('click',function(){
    
        document.getElementById('OUT').classList.remove('hidden')
        document.getElementById('ADD').classList.add('hidden')
    })
document.getElementById('btn-show-add-money').
    addEventListener('click',function(){
        
        document.getElementById('ADD').classList.remove('hidden')
        document.getElementById('OUT').classList.add('hidden')
    })
