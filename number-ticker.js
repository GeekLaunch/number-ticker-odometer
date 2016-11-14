let counters = document.getElementsByClassName('number-ticker');

let defaultDigitNode = document.createElement('div');
defaultDigitNode.classList.add('digit');

for (let i = 0; i < 10; i++) {
    defaultDigitNode.innerHTML += i + '<br>';
}

[].forEach.call(counters, function (counter) {
    let currentValue = parseInt(counter.getAttribute('data-value')) || 0;
    let digits = [];

    generateDigits(currentValue.toString().length);
    setValue(currentValue);

    setInterval(function () {
        setValue(Math.floor(Math.random() * 1000000));
    }, 2000);

    function setValue (number) {
        let s = number.toString().split('').reverse().join('');
        let l = s.length;

        if (l > digits.length) {
            generateDigits(l - digits.length);
        }

        for (let i = 0; i < digits.length; i++) {
            setDigit(i, s[i] || 0);
        }
    }

    function setDigit (digitIndex, number) {
        digits[digitIndex].style.marginTop = '-' + number + 'em';
    }

    function generateDigits (amount) {
        for (let i = 0; i < amount; i++) {
            let d = defaultDigitNode.cloneNode(true);
            counter.appendChild(d);
            digits.unshift(d);
        }
    }
});
