
// tab function
function openPage(pageName,elmt,color){
  let i, tabcontents, tablinks;

  tabcontents = document.querySelectorAll('.tabcontent');
  for(i=0; i< tabcontents.length; i++){
    tabcontents[i].style.display = "none";
  }

  tablinks = document.querySelectorAll('.tablink');
  for(i=0;i< tablinks.length; i++){
    tablinks[i].style.backgroundColor = "";
  }
  elmt.style.backgroundColor = color;
  document.getElementById(pageName).style.backgroundColor = color;
  document.getElementById(pageName).style.display = "block";
}

document.getElementById('defaultOpen').click();


// forms

// A)form password visibility
const myPassword = document.querySelector('#myPassword');
const visibilePass = document.querySelector('#visibilePass');

visibilePass.addEventListener('change',() =>{
  if(myPassword.type == "password"){
    myPassword.type = "text";
  }else{
    myPassword.type = "password";
  }
})

// B) password validation
const createPassword = document.querySelector('#createPassword');
const letter = document.querySelector('#letter');
const capital = document.querySelector('#capital');
const number = document.querySelector('#number');
const Length = document.querySelector('#length');

const message = document.querySelector('.message');

createPassword.addEventListener('focus', () => {
  message.style.display = "block";
})

createPassword.addEventListener('blur', () => {
  message.style.display = "none";
})

createPassword.addEventListener('keyup', () => {
  let lowerCaseLetters = /[a-z]/g;
  if(createPassword.value.match(lowerCaseLetters)){
    letter.classList.remove('invalid');
    letter.classList.add('valid');
  }else{
    letter.classList.remove('valid');
    letter.classList.add('invalid')
  }

  let upperCaseLetter = /[A-Z]/g;
  if(createPassword.value.match(upperCaseLetter)){
    capital.classList.remove('invalid');
    capital.classList.add('valid');
  }else{
    capital.classList.remove('valid');
    capital.classList.add('invalid');
  }

  let Numbers = /[0-9]/g;
  if(createPassword.value.match(Numbers)){
    number.classList.remove('invalid');
    number.classList.add('valid');
  }else{
    number.classList.remove('valid');
    number.classList.add('invalid');
  }

  if(createPassword.value.length >= 8){
    Length.classList.remove('invalid');
    Length.classList.add('valid');
  }else{
    Length.classList.remove('valid');
    Length.classList.add('invalid');
  }
})