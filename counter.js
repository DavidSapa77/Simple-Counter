const startPoint = document.getElementById('start');
const btnIncrease = document.getElementById('increase');
const btnReset = document.getElementById('reset');
const btnDecrease = document.getElementById('decrease');

//  counter's initial value
let startNum = 0;
startPoint.innerHTML = startNum;

// Update Function
function update(value) {
    startPoint.innerHTML = value;
};

function increase(num) {
    startNum += num;
    return startNum;
};

btnIncrease.addEventListener('click', () => {

    update(increase(1));
});

function decrease(num) {
    startNum -= num;
    return startNum;

};

btnDecrease.addEventListener('click', () => {

    update(decrease(1));
});


function reset() {

    return startNum = 0;

};
btnReset.addEventListener('click', () => {

    update(reset());;
});