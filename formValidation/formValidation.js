const passBx = document.getElementById('psw');
const letter = document.getElementById('letter');
const capital = document.getElementById('capital');
const number = document.getElementById('Number');
const Length = document.getElementById('length');
const message = document.getElementById('message');


//when user click on password box then display message div
passBx.addEventListener('focus',() => {
  message.style.display = "block";
})

//display none when loose focus
passBx.addEventListener('blur',() => {
  message.style.display = "none";
})

//start typing password
passBx.addEventListener('keyup',() => {

  //lowercase validation
  let lowerCaseLetters = /[a-z]/g;
  if(passBx.value.match(lowerCaseLetters)){
    letter.classList.remove('invalid');
    letter.classList.add('valid');
  }else{
    letter.classList.remove('valid');
    letter.classList.add('invalid');
  }

  //uppercase validation
  let upperCaseLetters = /[A-Z]/g;
  if(passBx.value.match(upperCaseLetters)){
    capital.classList.remove('invalid');
    capital.classList.add('valid');
  }else{
    capital.classList.remove('valid');
    capital.classList.add('invalid');
  }

  //number validation
  let NumLetter = /[0-9]/g;
   if(passBx.value.match(NumLetter)){
    number.classList.remove('invalid');
    number.classList.add('valid');
   }else{
     number.classList.remove('valid');
     number.classList.add('invalid');
   }

   //length validation
   if(passBx.value.length >= 8){
    Length.classList.remove('invalid');
    Length.classList.add('valid');
   }else{
    Length.classList.remove('valid');
    Length.classList.add('invalid');
   }

})
