let Display = document.getElementById('display');
let input = '';//input display
console.log(document.getElementById('backArrow').value)
buttons = document.querySelectorAll('button');
for (item of buttons) {
    item.addEventListener('click', (res) => {
        buttonText = res.target.innerText;
        console.log(`${buttonText}  was clicked `);
        if (buttonText == 'X') {
            buttonText = '*';
            input += buttonText;// += and not = so that multiple times multiplication sign can be used
            Display.value = input;
        }
        else if (buttonText == '=') {
            input = eval(input);// eval(evaluate) is a function in JS 
            Display.value = input;

        }
        else if (buttonText == 'C') {
            input = "";
            Display.value = input;// empty the display
        }
        /*else if (buttonText == "√") {
            input += buttonText;
            Display.value = input;
            buttonText = Math.sqrt(input);
            input += buttonText;
        }*/
        else if (buttonText == "←") {
            var num = input;
            console.log(num);
            var newNum = num.substring(0, num.length - 1);
            console.log(newNum);
            input = newNum;
            Display.value = input;
        }
        else {
            input += buttonText;// += and not = so that multiple times multiplication sign can be used
            Display.value = input;
        }
    })


}