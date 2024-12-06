const text = document.getElementById('text');
const plus = document.getElementById('plus');
const nutral = document.getElementById('nutral');
const minus = document.getElementById('minus');
let count = 0;

plus.addEventListener('click', function () {
    count++;
    text.textContent = count;
});

nutral.addEventListener('click', function () {
    count = 0;
    text.textContent = count;
});