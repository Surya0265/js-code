var age=document.getElementById("age")
var height=document.getElementById("height")
var weight=document.getElementById("Weight")
var male=document.getElementById("m")
var female=document.getElementById("f")
var form=document.getElementById("form")
var resultArea=document.querySelector(".comment")
modalContent=document.querySelector(".modal-content")
modalText=document.querySelector("#modalText")
var modal=document.getElementById("mymodal")
var span=document.getElementsByClassName("close")[0]
function calculate(){
    if(age.value==''||height.value==''||weight.value==''||(male.checked==false&&female.checked==false)){
        alert("All fields are required")
    }else{
        countBmi()
    }
}

function countBmi(){
    var p=[age.value,height.value,weight.value]
    if(male.checked){
        p.push("male")
    }else if(female.checked){
        p.push("female")
    }
  console.log(p)
var bmi=Number(p[2])/(Number(p[1])/100*Number(p[1])/100)
var result=''
if(bmi<18.5){
    result='Underweight'

}else if(18.5<=bmi&&bmi<25){
    result="Healthy";
}else if(25<=bmi&&bmi<30){
    result='Overweight'
}else if(30<=bmi&&bmi<=34.9){
    result='Obese'
}else if(35<=bmi){
    result='Extermely obese'
}
resultArea.style.display="block"
document.querySelector(".comment").innerHTML=`You are <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML=bmi.toFixed(2)

} 
span.onclick=function(){
    modal.style.display="none";

}
window.onclick=function(event){
    if(event.target==modal){
        modal.style.display="none"
    }
}
