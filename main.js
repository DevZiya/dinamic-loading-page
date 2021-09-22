const time=document.getElementById('time'),
     dayM=document.getElementById('dayM'),
     ad=document.getElementById('name'),
     focus=document.getElementById('focus')


// options
const showAmPm=true;

//Show time
function showTime(){
       let t=new Date()
            hour=t.getHours();
            min=t.getMinutes();
             sec=t.getSeconds();

//  set am or pm
const amPm= hour <= 12 ? "PM" : "AM";

// Pm or Am
  hour= hour % 12 || 12;

 // Output Time
 time.innerHTML=`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}${showAmPm ? amPm : ""}`

 setTimeout(showTime,1000);
}

//add zero
function addZero(n){
    return(parseInt(n,10) < 10 ? "0" : "") + n;
} 

//dayM with background image change
    function dayMimg(){
         let today=new Date(),
              hour=today.getHours();
              


        if(hour<12){
          document.body.style.backgroundImage="url('img/seher.jpg') "
          dayM.textContent="Sabahınız xeyir";
        }else if(hour<18){
          document.body.style.backgroundImage="url('img/axsamustu.jpg') "
          dayM.textContent="Günortanız xeyir";
        }else{
          document.body.style.backgroundImage="url('img/gece.jpg') "
          dayM.textContent="Axşamınız xeyir";   
          document.body.style.color='white'   
    }
}

//// Get Name
function getName(){
     if(localStorage.getItem("ad")===null){
          ad.textContent="Ziya";
     }else{
          ad.textContent=localStorage.getItem("ad")
     }
}

// set Name

function setName(e){
     if(e.type === 'keypress'){
          if(e.which==13 || e.keyCode==13){
               localStorage.setItem('ad', e.target.innerText);
               ad.blur();
          }else{
               localStorage.setItem('ad', e.target.innerText);
          }
     }
}

//// Get Focus
function getFocus(){
     if(localStorage.getItem("focus")===null){
          focus.textContent="[Enter name]";
     }else{
          focus.textContent=localStorage.getItem("focus")
     }
}

// set Focus

function setFocus(e){
     if(e.type === 'keypress'){
          if(e.which==13 || e.keyCode==13){
               localStorage.setItem('focus', e.target.textContent);
               focus.blur();
          }else{
               localStorage.setItem('focus', e.target.textContent);
          }
     }
}

ad.addEventListener('click',setName);
ad.addEventListener('blur',setName);
focus.addEventListener('click',setFocus);
focus.addEventListener('blur',setFocus);


     //Run
     showTime();
     dayMimg();
     getName();
     getFocus();