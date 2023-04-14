
let nameInp = document.getElementById("eg-text");
let cardName =document.querySelector(".name")

let numberInp =document.getElementById("eg-number");
let cardNumber=document.querySelector(".card-number")

let monthInp = document.getElementById("born-day");
let cardMonth = document.querySelector(".month")

let yearInp = document.getElementById("born-year");
let cardYear =document.querySelector(".year")

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
   
    wrongName.style.display="block"
    nameInp.style.borderColor="hsla(0, 100%, 66%, 1)"
    
  }else{

    wrongName.style.display="none"
  }
  if(!numberInp.value){
    
    wrong.style.display="block"
    numberInp.style.borderColor="hsla(0, 100%, 66%, 1)"
  }else{
    
    wrong.style.display="none"
  }
  if(!monthInp.value){
    
    blank.style.display="block"
    monthInp.style.borderColor="hsla(0, 100%, 66%, 1)"
  }else{
 
    blank.style.display="none"
  }
  if(!yearInp.value){
   
    blank.style.display="block"
    yearInp.style.borderColor="hsla(0, 100%, 66%, 1)"
  }else{
    
    blank.style.display="none"
  }
  if(!cvcInp.value){
    
    blankCvc.style.display="block"
    cvcInp.style.borderColor="hsla(0, 100%, 66%, 1)"
    
  }else{
   
    blankCvc.style.display="none"
  }
  submitBtn.addEventListener("click",(event)=>{
    if(nameInp.value && numberInp.value && monthInp.value && yearInp.value&& cvcInp.value){
      
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
