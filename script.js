console.log('This is a Calculator..');

let display = '';
let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {

        if (e.target.innerHTML == '=') {
            display = eval(display).toString();
            console.log(typeof (display));
            document.querySelector('input').value = display;
        }
        else if (e.target.innerHTML == 'AC') {
            display = '';
            document.querySelector('input').value = display;
        }
        else if (e.target.innerHTML == 'DEL') {
            console.log('Del');
            display = display.slice(0, -1);
            document.querySelector('input').value = display;
        }
        else
            display = display + e.target.innerHTML;
        document.querySelector('input').value = display;
    })
})
