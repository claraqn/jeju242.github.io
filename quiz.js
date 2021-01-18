const quiz = [
  {
      q: '제주대학교를 상징하는 동물은?',
      options:['호랑이','수달','사슴','독수리'],
      answer:2
  },
  {
      q: '제주대학교 교훈에 해당하지 않는 것은?',
      options:['진리','도전','정의','창조'],
      answer:1
  },
  {
      q: '제주대학교 설립년도는?',
      options:['1949년','1950년','1951년','1952년'],
      answer:3
  },
  {
      q: '제주대학교 학생들이 약 1만명임을 뜻하는 단어는?',
      options:['일만제대','일만아라','일만사라','일만한라'],
      answer:1
  },
  {
      q: '제주대학교 마스코트는 "사슴"이다. 무슨색 사슴일까?',
      options:['흰색','분홍색','노란색','갈색'],
      answer:0
  },
  {
      q: '제주대학로는 어디에 있는가?',
      options:['제주대학교','시청','아라동','서귀포시'],
      answer:1
  },
  {
      q: '제주대학교에서 존재하는 학과는?',
      options:['감귤포장학과','해녀학과','수산생명의학과','마사학과'],
      answer:2
  },
  {
      q: '산업응용경제학과는 어느 단과대학에 속하는가?',
      options:['경상대학','사회과학대학','생명자원과학대학','해양과학대학'],
      answer:3
  },

]

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];

function setAvailableQuestions(){
  const totalQuestion = quiz.length;
  for(let i=0; i<totalQuestion; i++){
      availableQuestions.push(quiz[i])
  }
  
}


function getNewQuestion(){
  
  questionNumber.innerHTML = "Question" + (questionCounter + 1) + "of" + quiz.length;

  
  const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.q;
  
  const index1 = availableQuestions.indexOf(questionIndex);
  
  availableQuestions.splice(index1,1);
  
  
  const optionLen = currentQuestion.options.length
  
  for(let i=0; i<optionLen; i++){
      availableOptions.push(i)
  }
  optionContainer.innerHTML = '';
  let animationDelay = 0.15;
  
  for(let i=0;i<optionLen;i++){
      
      const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
      
      const index2 = availableOptions.indexOf(optonIndex);
      
      availableOptions.splice(index2,1);
      const option = document.createElement("div");
      option.innerHTML = currentQuestion.options[optonIndex];
      option.id = optonIndex;
      option.style.animationDelay = animationDelay + 's';
      animationDelay = animationDelay + 0.15;
      option.className = "option";
      optionContainer.appendChild(option)
      option.setAttribute("onclick","getResult(this)");
  }
  questionCounter++
}


function getResult(element){
  const id = parseInt(element.id);
  
  if(id == currentQuestion.answer){
      
      element.classList.add("correct");
      updateAnswerindicator("correct");
  }
  else{
      //빨간색으로 출력
      element.classList.add("wrong");
      //만약 정답이 틀렸을 경우 정답 출력
      updateAnswerindicator("wrong");
      const optionLen = optionContainer.children.length;
      for(let i=0; i<optionLen; i++){
          if(parseInt(optionContainer.children[i].id)==currentQuestion.answer){
              optionContainer.children[i].classList.add("correct");
          }
      }
  }

  unclickableOptions();
}

function unclickableOptions(){
  const optionLen = optionContainer.children.length;
  for(let i=0; i<optionLen; i++){
      optionContainer.children[i].classList.add("already-answered");
  }
}

function answersIndicator(){
  const totalQuestion = quiz.length;
  for(let i=0; i<totalQuestion; i++){
      const indicator = document.createElement("div");
      answersIndicatorContainer.appendChild(indicator);
  }
}
function updateAnswerIndicator(markType){
  answersIndicatorContainer.children[current]
}
function next(){
  if(questionCounter == quiz.length){
      console.log("quiz over");
  }
  else{
      getNewQuestion();
  }
}
window.onload = function(){
  
  setAvailableQuestions();
  
  getNewQuestion();
  
  answersIndicator();
}

