// 'use strict'
const inputText = document.getElementById('validation-input');
inputText.addEventListener('blur', (event)=> {
    
    const datasetl = Number(inputText.dataset.length);
    
    if (inputText.value.length !== datasetl){
        
        inputText.classList.add('invalid')
        
    }else {
        inputText.classList.remove('invalid')
        inputText.classList.add('valid')
    }
    
}
)
