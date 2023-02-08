//timer code
var countDownDate = new Date("July 10, 2023 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timers").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
      if (distance < 0) {
    clearInterval(x);
    document.getElementById("timers").innerHTML = "IT MY BRITHDAY";
  }
}, 1000);

//StopWatch code
let startbtn =  document.getElementById('start');
let stopbtn =  document.getElementById('stop');
let resetbtn =  document.getElementById('reset');

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

startbtn.addEventListener('click',function(){
  timer=true;
  stopWatch();
});

stopbtn.addEventListener('click',function(){
  timer=false;
});

resetbtn.addEventListener('click',function(){
  timer=false;
  hour=0;
  minute=0;
  second=0;
  count=0;
  document.getElementById('hr').innerHTML="00";
  document.getElementById('min').innerHTML="00";
  document.getElementById('sec').innerHTML="00";
  document.getElementById('minsec').innerHTML="00";
});

function stopWatch(){
  if(timer){
    count++;
    if(count==100){
      second++;
      count=0;
    }
    if(second==60){
      minute++;
      second=0;
    }
    if(minute==60){
      hour++;
      minute=0;
      second=0;
    }
    let aString=hour;
    let bString=minute;
    let cString=second;
    let dString=count;
    if(hour<10){
      aString="0"+aString;
    }
    if(minute<10){
      bString="0"+bString;
    }
    if(second<10){
      cString="0"+cString;
    }
    if(count<10){
      dString="0"+dString;
    }
    document.getElementById('hr').innerHTML=aString;
    document.getElementById('min').innerHTML=bString;
    document.getElementById('sec').innerHTML=cString;
    document.getElementById('minsec').innerHTML=dString;
    setTimeout(stopWatch,10);
  }
}