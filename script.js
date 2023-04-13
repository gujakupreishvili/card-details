
// // input elements
// let name = document.getElementById("eg-text");
// let cardNumber =document.getElementById("eg-number");
// let bornDay = document.getElementById("born-day");
// let bornYear = document.getElementById("born-year");
// let cvc =document.getElementById("cvc");

// // card elements

// let cardName =document.querySelector(".name")
// let cardNumberCard =document.querySelector(".card-number")
// let cardDate =document.querySelector(".date")


// // Card number formatting
// cardNumber.addEventListener('input', (event) => {
//   const input = event.target.value.replace(/\D/g, '').substring(0, 16);
//   const cardNumberFormatted = input.replace(/(\d{16})/g, '$1 ').trim();
//   event.target.value = cardNumberFormatted;
//   cardNumberElement.textContent = cardNumberFormatted || '0000 0000 0000 0000';
// });


// cardName.addEventListener('input', (event) => {
//   const input = event.target.value.toUpperCase();
//   event.target.value = input;
//   name.textContent = input || 'JOHN DOE';
// });


// bornDay.addEventListener('input', (event) => {
//   const input = event.target.value.replace(/\D/g, '').substring(0, 4);
//   const expiryDateFormatted = input.replace(/(\d{2})(\d{0,2})/, '$1/$2').trim();
//   event.target.value = expiryDateFormatted;
//   expiryDateElement.textContent = expiryDateFormatted || 'MM/YY';
// });

let nameInp = document.getElementById("eg-text");
let cardName =document.querySelector(".name")

let numberInp =document.getElementById("eg-number");
let cardNumber=document.querySelector(".card-number")

let monthInp = document.getElementById("born-day");
let cardMonth = document.querySelector(".date")

let yearInp = document.getElementById("born-year");
let cardYear =document.querySelector(".date")

let cvcInp =document.getElementById("cvc")
let  cardCvc =document.querySelector(".cvc-card")
let  submitBtn =document.getElementById("confrim")
let inputDiv =document.querySelector(".input-div")
let thanksDiv =document.querySelector(".thanks-div")
let wrong =document.querySelector(".wrong")
let wrongName =document.querySelector(".wrongname")
let blank =document.querySelector(".cant-blank")
let blankCvc =document.querySelector(".cant-blank-cvc")






function setCardNumber(e){
  cardNumber.innerHTML= e.target.value
}

function  setCardName(e){
  cardName.innerHTML  =  e.target.value
  
}
function  setCardMonth(e){
  cardMonth.innerHTML =  e.target.value
}
function  setCardYear(e){
  cardYear.innerHTML =  e.target.value
}
function  setCardCvc(e){
  cardCvc.innerHTML =  e.target.value
}

function format(s){
  return s.toString().replace(/\d{4}(?=.)/g, "$&")
}

function handleSubmit(){
  // e.preventDefault()
  if(!nameInp.value){
    nameInp.classList.add("error");
    nameInp.parentElement.classList.add("error-message");
    wrongName.style.display="block"
    
  }else{
    nameInp.classList.remove("error");
    nameInp.parentElement.classList.remove("error-message");
    wrongName.style.display="none"
  }
  if(!numberInp.value){
    // numberInp.classList.add("error");
    // numberInp.parentElement.classList.add("error-message");
    wrong.style.display="block"
  }else{
    numberInp.classList.remove("error");
    numberInp.parentElement.classList.remove("error-message");
    wrong.style.display="none"
  }
  if(!monthInp.value){
    monthInp.classList.add("error");
    monthInp.parentElement.classList.add("error-message");
    blank.style.display="block"
  }else{
    monthInp.classList.remove("error");
    monthInp.parentElement.classList.remove("error-message");
    blank.style.display="none"
  }
  if(!yearInp.value){
    yearInp.classList.add("error");
    yearInp.parentElement.classList.add("error-message");
    blank.style.display="block"
  }else{
    yearInp.classList.remove("error");
    yearInp.parentElement.classList.remove("error-message");
    blank.style.display="none"
  }
  if(!cvcInp.value){
    cvcInp.classList.add("error");
    cvcInp.parentElement.classList.add("error-message");
    blankCvc.style.display="block"
    
  }else{
    cvcInp.classList.remove("error");
    cvcInp.parentElement.classList.remove("error-message");
    blankCvc.style.display="none"
  }
  submitBtn.addEventListener("click",(event)=>{
    if(nameInp.value && numberInp.value && monthInp.value && yearInp.value&& cvcInp.value){
      // completed.classList.remove("hidden");
      // format.classList.add("thanks-div")
      inputDiv.style.display="none";
      thanksDiv.style.display="block";

      
    }
    
  })
}



numberInp.addEventListener("input",setCardNumber);
nameInp.addEventListener("input",setCardName);
monthInp.addEventListener("input",setCardMonth);
yearInp.addEventListener("input",setCardYear);
cvcInp.addEventListener("input",setCardCvc)
submitBtn.addEventListener("click",handleSubmit)
