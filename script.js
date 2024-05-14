const h=document.getElementById("h");
const w=document.getElementById("w"); 
const display=document.querySelector(".display");
const Status=document.getElementById("Status");

const form=document.querySelector("form");

// event listener
form.addEventListener('submit',(e)=>{
    e.preventDefault( );

    const H=(h.value)/100;
    const W=w.value;  

    const BMI = ( W / (H*H) ).toFixed(2); // 2 places of decimal
    
    display.innerHTML=`
    Your Body Mass Index
    <br>
    is ${BMI}`;

    // status
    if (BMI < 18.5) {
        Status.innerHTML = "under-weight";
        Status.style.color="cornflowerblue";

    } else if (BMI >= 18.5 && BMI <= 25) {
        Status.innerHTML = "normal";
        Status.style.color="seagreen";

    } else if (BMI > 25 && BMI <= 30) {
        Status.innerHTML = "over-weight";
        Status.style.color="orange";

    } else if (BMI > 30) {
        Status.innerHTML = "obese";
        Status.style.color="crimson";
    }

    h.readOnly=true;
    w.readOnly=true;

})


// reset
form.addEventListener('reset',( )=>{

    display.innerHTML=""; 
    Status.innerHTML="";

    h.readOnly=false;
    w.readOnly=false;

})

