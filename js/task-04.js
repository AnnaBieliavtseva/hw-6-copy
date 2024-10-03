const value = document.querySelector('#value');
const decr = document.querySelector('button[data-action="decrement"]');
const incr = document.querySelector('button[data-action="increment"]');
// let counterValue = 0;
decr.addEventListener('click',() => {
value.textContent = Number(value.textContent) - 1

})
incr.addEventListener('click',() => {
value.textContent = Number(value.textContent) + 1

})

// decr.addEventListener('click',() => {
//     value.textContent = counterValue
//     counterValue -=1
    
//     })
//     incr.addEventListener('click',() => {
//     value.textContent = counterValue + 1
    
//     })