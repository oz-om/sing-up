function ifNotEmpty(input) {
  input.oninput = function () {
    if (input.value) {
      input.nextElementSibling.style.top = '-2px'
    } else {
      input.nextElementSibling.style.top = '29px'
    }
  }
}

let fullname = document.querySelector('#fullname');
let pass = document.querySelector('#password');
let mail = document.querySelector('#email');
ifNotEmpty(fullname);
ifNotEmpty(pass);
ifNotEmpty(mail);
