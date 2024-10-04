const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', (event) => {
if (!event.currentTarget.value) {
    return nameOutput.textContent = 'Anonymous'
}
 nameOutput.textContent = event.currentTarget.value;
}
)
