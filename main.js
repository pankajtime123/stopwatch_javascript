const timer = document.querySelector(".timerBox")
var milis =0,second = 0, minute=0, hour=0
var stop = true

function start(){
    if(stop==true){
        stop=false
        timerCall()
    }
}

function stopCall(){
 
        stop=true;
 
}

function reset(){
    stop=true
    second=0,minute=0,hour=0
    timer.innerHTML = "00 : 00 : 00"
}

function timerCall(){
    if(stop==false){
        second = parseInt(second)
        minute = parseInt(minute)
        hour = parseInt(hour)
        milis = parseInt(milis)
        milis +=10
        if(milis == 1000){
            second+=1          
            milis=0
        }
  
       
        if(second ==60){
            minute = minute+1 
            second = 0
            milis=0
        }
        if(minute ==60) {
            hour +=1
            minute =0
            second=0
            milis=0
        }

        if(second <10) second = "0"+second
        if(minute <10) minute = "0"+minute
        if(hour <10) hour = "0"+hour
        if(milis <100) milis = "00"+milis
        if(milis >=100 && milis <1000) milis = "0"+milis
        console.log(second , minute , hour)
        timer.innerHTML = hour + " : " + minute + " : "+ second+ " : " +milis

       setTimeout("timerCall()",10)   
    }
}
























