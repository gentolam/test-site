let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

multiply(4, 7);