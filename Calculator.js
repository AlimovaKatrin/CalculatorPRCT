let numbers = document.getElementsByClassName('buttons')
// const numbers = document.querySelector('.one');
let display = document.querySelector('.display');

for (let num of numbers) {

    num.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(e.target.innerText);
        display.value += e.target.value;
        // return parseFloat(display.value)
    }
    );
}
let meaning = document.getElementsByClassName('display')[0]
let equal = document.getElementById('equal')

equal.addEventListener('click', function (e) {
    e.preventDefault();
    let w = meaning.value
    display.value=eval(w)
})