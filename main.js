//select  element
let  countSpan=document.querySelector(".count span");
let bullets=document.querySelector(".bullets");
let bulletsSpanContainer=document.querySelector(".bullets .spans");
let  quizArea=document.querySelector(".quiz-area");
let answerArea=document.querySelector(".answers-area");
let subbmitButton=document.querySelector(".submit-button");
let resultContainer=document.querySelector(".results");
let countdownElement=document.querySelector(".countdown");

//Set Option
let currentIndex=0;
let rightAnswers=0;
let countdownInterval;

function getQuestions(){
    let myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange= function(){
        if(this .readyState === 4  && this .status === 200){
           
            let questionsObject= JSON.parse(this.responseText);
            let qCount =  questionsObject.length;

            //creat Bullets+set qustion count
            creatBullets(qCount);

           //Add Question data
           addQuestionData(questionsObject[currentIndex],qCount);

           //start countdown
           countdown(3,qCount);

           //click on submit
           subbmitButton.onclick=()=>{
            //Get Right Answer
            let theRightAnswer = questionsObject[currentIndex].right_answer;

            //Increas index
            currentIndex++;

            //check  the answer
            checkAnswer(theRightAnswer , qCount);

            //Remove previous question
            quizArea.innerHTML="";
            answerArea.innerHTML="";

            //Add Question Data
            addQuestionData(questionsObject[currentIndex],qCount);

            //Handle bullets class
            handleBullets();

            //start CountDown
            clearInterval(countdownInterval);
            countdownElement(3,qCount);

            //show result
            showResults(qCount);
        };
    }
    };

    myRequest.open("GET", "html_question.json",true);
    myRequest.send();
}

getQuestions();

function creatBullets(num){
    countSpan.innerHTML=num;

    //creat spans
    for(let i=0 ;i<num ;i++){
        //creat bullet
        let theBullet=document.createElement("span");

        //check if its first span
        if(i===0){
            theBullet.className = "on";
        }

       //Append  bullets to main bullet container
       bulletsSpanContainer.appendChild(theBullet);
    }
}

function addQuestionData(obj, count){
    if(currentIndex<count){
        //creat H2 Question title
        let questionTitle = document.createElement("h2");

        //creat question text
        let questionText=document.createTextNode(obj["title"]);

        //Append text to H2
        questionTitle.appendChild(questionText);

        //Append the H2 to the Quiz Area
        quizArea.appendChild(questionTitle);

        //creat thw Answers
        for (let i=1;i<=4;i++){
            //creat main Answer div
            let mainDiv=document.createElement("div");

            //Addclasstomaidiv
             mainDiv.className="answer";

             //creat Radio input
             let radioInput= document.createElement("input");

             //Add type+name +id +data-attribute
             radioInput.name="question";
             radioInput.type="radio";
             radioInput.id=`answer_${i}`;
             radioInput.dataset.answer=obj[`answer_${i}`];

             //Make first Option selected
             if(i==1){
                radioInput.checked = true;
             }

             //creat label
             let theLable =document.createElement("label");

             //Add for Attribute
             theLable.htmlFor= `answer_${i}`;
             
             //creat label text
             let theLableText = document.createTextNode(obj[`answer_${i}`]);

             //Add the text to label
             theLable.appendChild(theLableText);

              //append all div to answers area
              answerArea.createElement(mainDiv);

             //add input +lable to main div
             mainDiv.appendChild(radioInput);
             mainDiv.appendChild(theLable);

            

        }
    }
}
function checkAnswer(rAnswer,count){
    let answer=document.getElementsByName("question");
    let theChoosenAnswer;

    for(let i=0;i<answer.length;i++){
        if (answer[i].checked){
            theChoosenAnswer=answer[i].dataset.answer;
        }
    }

    if (rAnswer === theChoosenAnswer){
        rightAnswers++;
    }
    }

    function handleBullets(){
        let bulletsSpans=document.querySelectorAll(".bullets .spans  span");
        let arrayOfSpans=Array.from(bulletsSpans);
        arrayOfSpans.forEach((span,index)=>{
            if (currentIndex===index){
                span.className="on";
            }
        });
    }

      function showResults(count){
        let theResults;
        if(currentIndex===count){
            quizArea.remove();
            answerArea.remove();
            subbmitButton.remove();
            bullets.remove();

            if (rightAnswers  >  count /2 && rightAnswers < count){
                theResults= `<span class="Pass">Pass</span> , ${rightAnswers} from ${count}`;
            }else if (rightAnswers===  count){
                theResults= `<span class="perfect">Perfect</span> , All Answers True`;
           }else {
            theResults= `<span class="fail">Fail</span> , ${rightAnswers} from ${count}`;
           }

           resultContainer.innerHTML= theResults;
           resultContainer.style.padding="10px";
           resultContainer.style.backgroundColor= "lightred";
           resultContainer.style.marginTop="10px"
        }
      }

      function countdown(duration , count){
        if (currentIndex < count){
            let minutes , seconds ;
            countdownInterval= setInterval(function(){
                minutes= parseInt(duration / 60);
                seconds= parseInt(duration % 60);

                minutes= minutes < 10 ? `0${minutes}` : minutes;
                seconds= seconds < 10 ? `0${seconds}` : seconds;

                countdownElement.innerHTML= `${minutes}:${seconds}`;

                if (--duration <0 ){
                    clearInterval(countdownInterval);
                    subbmitButton.click();
                }
            } , 1000);
        }
      }