
//question 1............
let answer11=document.getElementById("answer11");
let answer12=document.getElementById("answer12");
let answer13=document.getElementById("answer13");
let answer14=document.getElementById("answer14");
let nextBtn1=document.getElementById("nextBtnId1");
let userAnswerVlaue=[];
let userAnswer=[];
let isAnswerToF=[];
let flag1=0;
answer11.addEventListener("click",function(){
    if(answer11.checked==true){
        console.log("1 checked");
        userAnswer[0]="Color and Style Sheets";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[0]=(Number(answer11.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[0]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag1=1;
    }
})
answer12.addEventListener("click",function(){
    if(answer12.checked===true){
        console.log("2 checked");

        userAnswer[0]="Coloured Special Sheets";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[0]=(Number(answer12.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[0]=true;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag1=1;
    }
})
answer13.addEventListener("click",function(){
    if(answer13.checked===true){
        console.log("3 checked");

        userAnswer[0]="Cascading Style Sheets  ";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[0]=(Number(answer13.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[0]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag1=1;
    }
})
answer14.addEventListener("click",function(){
    if(answer14.checked===true){
        console.log("4 checked");

        userAnswer[0]="None of the above";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[0]=(Number(answer14.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[0]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag1=1;
    }
})
nextBtn1.addEventListener("click",function(){
    if(flag1==1){

        document.getElementById("question1").style.display="none";
        document.getElementById("question2").style.display="block";
    }
})


//question 2.....................
let answer21=document.getElementById("answer21");
let answer22=document.getElementById("answer22");
let answer23=document.getElementById("answer23");
let answer24=document.getElementById("answer24");
let nextBtn2=document.getElementById("nextBtnId2");
let flag2=0;
answer21.addEventListener("click",function(){
    if(answer21.checked==true){
        // console.log("1 checked");
        userAnswer[1]="1";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        // console.log(userAnswer);
        userAnswerVlaue[1]=(Number(answer21.value));
        // console.log(userAnswerVlaue);

        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[1]=false;
        // console.log(isAnswerToF);
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag2=1;
    }
})
answer22.addEventListener("click",function(){
    if(answer22.checked===true){
        userAnswer[1]="2";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[1]=(Number(answer22.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[1]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag2=1;
    }
})
answer23.addEventListener("click",function(){
    if(answer23.checked===true){
        userAnswer[1]="3";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[1]=(Number(answer23.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[1]=true;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag2=1;
    }
})
answer24.addEventListener("click",function(){
    if(answer24.checked===true){
        userAnswer[1]="4";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[1]=(Number(answer24.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[1]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag2=1;
    }
})
nextBtn2.addEventListener("click",function(){
    if(flag2==1){
        document.getElementById("question2").style.display="none";
        document.getElementById("question3").style.display="block";
    }
})


//question 3......................
let answer31=document.getElementById("answer31");
let answer32=document.getElementById("answer32");
let answer33=document.getElementById("answer33");
let answer34=document.getElementById("answer34");
let nextBtn3=document.getElementById("nextBtnId3");
let flag3=0;
answer31.addEventListener("click",function(){
    if(answer31.checked==true){
        userAnswer[2]="Inline";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[2]=(Number(answer31.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[2]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag3=1;
    }
})
answer32.addEventListener("click",function(){
    if(answer32.checked===true){
        userAnswer[2]="External";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[2]=(Number(answer32.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[2]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag3=1;
    }
})
answer33.addEventListener("click",function(){
    if(answer33.checked===true){
        userAnswer[2]="Internal";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[2]=(Number(answer33.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[2]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag3=1;
    }
})
answer34.addEventListener("click",function(){
    if(answer34.checked===true){
        userAnswer[2]="None of the above";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[2]=(Number(answer34.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[2]=true;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag3=1;
    }
})
nextBtn3.addEventListener("click",function(){
    if(flag3==1){
        document.getElementById("question3").style.display="none";
        document.getElementById("question4").style.display="block";
    }
})


//question 4.....................
let answer41=document.getElementById("answer41");
let answer42=document.getElementById("answer42");
let answer43=document.getElementById("answer43");
let answer44=document.getElementById("answer44");
let nextBtn4=document.getElementById("nextBtnId4");
let flag4=0;
answer41.addEventListener("click",function(){
    if(answer41.checked==true){
        userAnswer[3]=" . ";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[3]=(Number(answer41.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[3]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag4=1;
    }
})
answer42.addEventListener("click",function(){
    if(answer42.checked===true){
        userAnswer[3]="  #  ";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[3]=(Number(answer42.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[3]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag4=1;
    }
})
answer43.addEventListener("click",function(){
    if(answer43.checked===true){
        userAnswer[3]="  ^   ";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[3]=(Number(answer43.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[3]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag4=1;
    }
})
answer44.addEventListener("click",function(){
    if(answer44.checked===true){
        userAnswer[3]="  [ ]  ";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[3]=(Number(answer44.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[3]=true;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag4=1;
    }
})
nextBtn4.addEventListener("click",function(){
    if(flag4==1){
        document.getElementById("question4").style.display="none";
        document.getElementById("question5").style.display="block";
    }
})


//question 5.....................
let answer51=document.getElementById("answer51");
let answer52=document.getElementById("answer52");
let answer53=document.getElementById("answer53");
let answer54=document.getElementById("answer54");
let nextBtn5=document.getElementById("nextBtnId5");
let flag5=0;
answer51.addEventListener("click",function(){
    if(answer51.checked==true){
        userAnswer[4]="&lt;/!--Comment--&gt;";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[4]=(Number(answer51.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[4]=true;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag5=1;
    }
})
answer52.addEventListener("click",function(){
    if(answer52.checked===true){
        userAnswer[4]="//Coment    ";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[4]=(Number(answer52.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[4]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag5=1;
    }
})
answer53.addEventListener("click",function(){
    if(answer53.checked===true){
        userAnswer[4]="#Comment    ";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[4]=(Number(answer53.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[4]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag5=1;
    }
})
answer54.addEventListener("click",function(){
    if(answer54.checked===true){
        userAnswer[4]=" /*Comment*/";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[4]=(Number(answer54.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[4]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag5=1;
    }
})
nextBtn5.addEventListener("click",function(){
    if(flag5==1){
        document.getElementById("question5").style.display="none";
        document.getElementById("question6").style.display="block";
    }
})


//question 6..............
let answer61=document.getElementById("answer61");
let answer62=document.getElementById("answer62");
let answer63=document.getElementById("answer63");
let answer64=document.getElementById("answer64");
let nextBtn6=document.getElementById("nextBtnId6");
let flag6=0;
answer61.addEventListener("click",function(){
    if(answer61.checked==true){
        userAnswer[5]="Inherits the value of the parent element";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[5]=(Number(answer61.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[5]=true;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag6=1;
    }
})
answer62.addEventListener("click",function(){
    if(answer62.checked===true){
        userAnswer[5]="Invalid property name";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[5]=(Number(answer62.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[5]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag6=1;
    }
})
answer63.addEventListener("click",function(){
    if(answer63.checked===true){
        userAnswer[5]="Changes the value of the parent element's property";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[5]=(Number(answer63.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[5]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag6=1;
    }
})
answer64.addEventListener("click",function(){
    if(answer64.checked===true){
        userAnswer[5]="None of the above";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[5]=(Number(answer64.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[5]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag6=1;
    }
})
nextBtn6.addEventListener("click",function(){
    if(flag6==1){
        document.getElementById("question6").style.display="none";
        document.getElementById("question7").style.display="block";
    }
})


//question 7..............
let answer71=document.getElementById("answer71");
let answer72=document.getElementById("answer72");
let answer73=document.getElementById("answer73");
let answer74=document.getElementById("answer74");
let nextBtn7=document.getElementById("nextBtnId7");
let flag7=0;
answer71.addEventListener("click",function(){
    if(answer71.checked==true){
        userAnswer[6]="Border";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[6]=(Number(answer71.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[6]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag7=1;
    }
})
answer72.addEventListener("click",function(){
    if(answer72.checked===true){
        userAnswer[6]="style";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[6]=(Number(answer72.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[6]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag7=1;
    }
})
answer73.addEventListener("click",function(){
    if(answer73.checked===true){
        userAnswer[6]="images";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[6]=(Number(answer73.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[6]=true;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag7=1;
    }
})
answer74.addEventListener("click",function(){
    if(answer74.checked===true){
        userAnswer[6]="overflow";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[6]=(Number(answer74.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[6]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag7=1;
    }
})
nextBtn7.addEventListener("click",function(){
    if(flag7==1){
        document.getElementById("question7").style.display="none";
        document.getElementById("question8").style.display="block";
    }
})


//question 8..............
let answer81=document.getElementById("answer81");
let answer82=document.getElementById("answer82");
let answer83=document.getElementById("answer83");
let answer84=document.getElementById("answer84");
let nextBtn8=document.getElementById("nextBtnId8");
let flag8=0;
answer81.addEventListener("click",function(){
    if(answer81.checked==true){
        userAnswer[7]=" list   ";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[7]=(Number(answer81.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[7]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag8=1;
    }
})
answer82.addEventListener("click",function(){
    if(answer82.checked===true){
        userAnswer[7]="list-style-type   ";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[7]=(Number(answer82.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[7]=true;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag8=1;
    }
})
answer83.addEventListener("click",function(){
    if(answer83.checked===true){
        userAnswer[7]="ul";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[7]=(Number(answer83.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[7]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag8=1;
    }
})
answer84.addEventListener("click",function(){
    if(answer84.checked===true){
        userAnswer[7]="ol";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[7]=(Number(answer84.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[7]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag8=1;
    }
})
nextBtn8.addEventListener("click",function(){
    if(flag8==1){
        document.getElementById("question8").style.display="none";
        document.getElementById("question9").style.display="block";
    }
})


//question 9..........
//question 8..............
let answer91=document.getElementById("answer91");
let answer92=document.getElementById("answer92");
let answer93=document.getElementById("answer93");
let answer94=document.getElementById("answer94");
let nextBtn9=document.getElementById("nextBtnId9");
let flag9=0;
answer91.addEventListener("click",function(){
    if(answer91.checked==true){
        userAnswer[8]="text-alignment   ";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[8]=(Number(answer91.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[8]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag9=1;
    }
})
answer92.addEventListener("click",function(){
    if(answer92.checked===true){
        userAnswer[8]="text";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[8]=(Number(answer92.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[8]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag9=1;
    }
})
answer93.addEventListener("click",function(){
    if(answer93.checked===true){
        userAnswer[8]=" text-position   ";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[8]=(Number(answer93.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[8]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag9=1;
    }
})
answer94.addEventListener("click",function(){
    if(answer94.checked===true){
        userAnswer[8]="text-align";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[8]=(Number(answer94.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[8]=true;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag9=1;
    }
})
nextBtn9.addEventListener("click",function(){
    if(flag9==1){
        document.getElementById("question9").style.display="none";
        document.getElementById("question10").style.display="block";
    }
})



//question 10................
let answer101=document.getElementById("answer101");
let answer102=document.getElementById("answer102");
let answer103=document.getElementById("answer103");
let answer104=document.getElementById("answer104");
let nextBtn10=document.getElementById("nextBtnId10");
let flag10=0;
answer101.addEventListener("click",function(){
    if(answer101.checked==true){
        userAnswer[9]="Top, Left, Bottom, Right    ";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[9]=(Number(answer101.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[9]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag10=1;
    }
})
answer102.addEventListener("click",function(){
    if(answer102.checked===true){
        userAnswer[9]="Right, Left, Top, Bottom  ";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[9]=(Number(answer102.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[9]=true;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag10=1;
    }
})
answer103.addEventListener("click",function(){
    if(answer103.checked===true){
        userAnswer[9]="Top, Right, Bottom, Left   ";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[9]=(Number(answer103.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[9]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag10=1;
    }
})
answer104.addEventListener("click",function(){
    if(answer104.checked===true){
        userAnswer[9]="Top, Bottom, Right, Left";
        localStorage.setItem("userAnswerCss",JSON.stringify(userAnswer));
        userAnswerVlaue[9]=(Number(answer104.value));
        localStorage.setItem("userAnswerValueCss",JSON.stringify(userAnswerVlaue));
        isAnswerToF[9]=false;
        localStorage.setItem("isAnswerToFCss",JSON.stringify(isAnswerToF));
        flag10=1;
    }
})
nextBtn10.addEventListener("click",function(){
    if(flag10==1){
        // document.getElementById("question10").style.display="none";
        // document.getElementById("question10").style.display="block";
    }
})
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        else if(timer === 0) {
            stopInterval()
          }
    }, 1000);
   
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
}