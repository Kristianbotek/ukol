let display = document.getElementById('iput');

function number(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}
function result() {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'Error';
    }
}