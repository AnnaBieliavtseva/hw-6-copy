const value = document.querySelector('#value');
const decr = document.querySelector('button[data-action="decrement"]');
const incr = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

decr.addEventListener('click',() => {

counterValue -= 1;
value.textContent = counterValue;
})


incr.addEventListener('click',() => {

counterValue += 1;
value.textContent = counterValue;

})

