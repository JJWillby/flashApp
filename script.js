let creatorMode=true
let studyMode=false
let typingQuestion=false
let questionText= " "
let answerText= " "
let typingAnswer=false
let enteredQuestion=false
let enteredAnswer=false
let saved = false
let askingQuestion=true
let setThemEqual=true
let showingAnswer=false
let index;
let doAgain=true
let cream = "#f4f1de"
//let cream="#E3E4DB"
let charcoal="#323031"
let matcha;
let typewriter;
let subs;
let restart=false
let CORAL="#f4978e"
//let mint="#d8e2dc"
let mint="#bee3db"
let tick;
let cross;
let userClickedWrong=false
let userClickedRight=false
let rightArrow;
let cards=[]
let cardsRemaining=[]
let stored;

function preload(){
   matcha=loadFont("assets/Matcha_Cih.ttf")
   typewriter=loadFont("assets/Type_Machine.ttf")
  subs=loadFont("assets/Hypero.ttf")
  tick=loadImage("assets/tick-svgrepo-com.svg")
  cross=loadImage("assets/cross-svgrepo-com.svg")
  rightArrow=loadImage("assets/right-arrow-svgrepo-com.svg")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  loadCards()
}

function draw() {
  textFont(subs)
  strokeWeight(2)
  background(cream);
  strokeWeight(0)
  fill(charcoal)
  textSize(20)
  text("C-Creator Mode",20,40)
  text("S-Study Mode",20,60)
  strokeWeight(1)
  textSize(40)
  textFont(matcha)
  text("FlashApp",windowWidth/2-90,windowHeight/2-140)
  textSize(20)
  if(creatorMode){
    textFont(subs)
    fill(charcoal)
    strokeWeight(0)
  text("V-Save cards",20,80)
    fill("#E6E2D3")
    strokeWeight(3)
    rect(windowWidth/2-200,windowHeight/2-100,400,300,20)
    fill(cream)
    fill(charcoal)
    strokeWeight(0)
    fill(charcoal)
    text("Question",windowWidth/2-37,windowHeight/2-60)
    text("Answer",windowWidth/2-31,windowHeight/2+70)
    stroke(charcoal)
    strokeWeight(2)
    line(windowWidth/2-200,windowHeight/2+50,windowWidth/2+200,windowHeight/2+50)

  if(typingQuestion){
    enteredQuestion=false
    textFont(typewriter)
    fill(charcoal)
    strokeWeight(1)
    textSize(16)
    textWrap(WORD)
    text(questionText,windowWidth/2-180,windowHeight/2-30,360)
    
  }
  if(enteredQuestion){

    fill(charcoal)
    textFont(typewriter)
    strokeWeight(1)
    textSize(16)
    textWrap(WORD)
    text(questionText,windowWidth/2-180,windowHeight/2-30,360)
  }
  if(typingAnswer){
    enteredAnswer=false
     fill(charcoal)
    textFont(typewriter)
    strokeWeight(1)
    textSize(16)
    textWrap(WORD)
    text(answerText,windowWidth/2-180,windowHeight/2+90,360)
  }
  if(enteredAnswer){
    fill(charcoal)
    textFont(typewriter)
    strokeWeight(1)
    textSize(16)
    textWrap(WORD)
    text(answerText,windowWidth/2-180,windowHeight/2+90,360)
  }
  if(saved){
    saveCards()
  }
  }
  else if(studyMode){
    if(setThemEqual){
      setThemEqualFunct()
    }
    fill("#E6E2D3")
    strokeWeight(3)
    rect(windowWidth/2-200,windowHeight/2-100,400,300,20)
    if(doAgain==true&&cardsRemaining.length>0){
      //index
      index=0
      cards.sort((a, b) => a.score - b.score);//need to understand this
      doAgain=false
    }
    if(askingQuestion){
      
      if(cardsRemaining.length==0){
        restart=true
        textFont(subs)
        fill(charcoal)
        strokeWeight(0)
      text("No questions remaining",windowWidth/2-180,windowHeight/2-80)
        text("To restart deck,Press R",windowWidth/2-180,windowHeight/2-40)
        
        textSize(20)
        textFont(subs)
        text("R-Restart Deck",20,80)
      }
      
      fill(charcoal)
      strokeWeight(0)
      textFont(subs)
   
    if(cardsRemaining.length>0) { 
          fill(charcoal)
    textFont(subs)
    textSize(20)
    strokeWeight(0)
    text("D-Delete current card",20,80)
      fill("#E6E2D3")
        strokeWeight(3)
        rect(windowWidth/2-55,windowHeight/2+240,110,45,15)
      textWrap(WORD)
      strokeWeight(0)
      fill(charcoal)
      image(rightArrow,windowWidth/2-23,windowHeight/2+248,50,30)
      
    text(cardsRemaining[index].question,windowWidth/2+-180,windowHeight/2-40,360)
                                    }
    }
    else if(showingAnswer){
      strokeWeight(0)
      fill(charcoal)
      textFont(subs)
      if(cardsRemaining.length>0){
            fill(charcoal)
    textFont(subs)
    textSize(20)
    strokeWeight(0)
    text("D-Delete current card",20,80)
        fill(CORAL)
        stroke(charcoal)
        strokeWeight(3)
        rect(windowWidth/2-125,windowHeight/2+240,110,45,15)
        fill(mint)
        rect(windowWidth/2+25,windowHeight/2+240,110,45,15)
        strokeWeight(0)
        fill(charcoal)
        image(tick,windowWidth/2+68,windowHeight/2+247,25,30)
        image(cross,windowWidth/2-84,windowHeight/2+245,30,35)
        textWrap(WORD)
      text(cardsRemaining[index].answer,windowWidth/2-180,windowHeight/2-40,360)
      }
    }
  }
}


function mousePressed(){
  
  //user clicks to type question card
  if(creatorMode==true&&mouseX>windowWidth/2-200&&mouseX<windowWidth/2+200&&mouseY<windowHeight/2+48&&mouseY>windowHeight/2-100){
    typingQuestion=true
    typingAnswer=false
    
  }
  else if (creatorMode==true&&mouseX>windowWidth/2-200&&mouseX<windowWidth/2+200&&mouseY>windowHeight/2+48&&mouseY<windowHeight/2+200){
    typingAnswer=true
    typingQuestion=false
  }
  //else if(askingQuestion==true&&mouseX>windowWidth/2-200&&mouseX<windowWidth/2+200&&mouseY>windowHeight/2-100&&mouseY<windowHeight/2+200){
    //showingAnswer=true
    
    //askingQuestion=false
  //}
  //else if(showingAnswer==true&&mouseX>windowWidth/2-200&&mouseX<windowWidth/2+200&&mouseY>windowHeight/2-100&&mouseY<windowHeight/2+200){
   // askingQuestion=true
    //showingAnswer=false
    //questionsRemaining.splice(index,1)
    //answersRemaining.splice(index,1)
    //doAgain=true
  //}
  //clicked wrong
  
  else if(showingAnswer==true&&mouseX>windowWidth/2-125&&mouseX<windowWidth/2-15&&mouseY>windowHeight/2+240&&mouseY<windowHeight/2+285&&cardsRemaining.length>0){
    userClickedWrong=true
       askingQuestion=true
    showingAnswer=false
    cardsRemaining[index].score-=2
    saveCards()
    cardsRemaining.splice(index,1)
    doAgain=true
    
  }
  //clicked right
  else if(showingAnswer==true&&mouseX>windowWidth/2+25&&mouseX<windowWidth/2+135&&mouseY>windowHeight/2+240&&mouseY<windowHeight/2+285&&cardsRemaining.length>0){
    
    userClickedRight=true
       askingQuestion=true
    showingAnswer=false
    cardsRemaining[index].score+=1
    saveCards()
    cardsRemaining.splice(index,1)
    doAgain=true
  }
  //clieed arrow to question
else if(askingQuestion==true&&cardsRemaining.length>0&&mouseX>windowWidth/2-55&&mouseX<windowWidth/2+55&&mouseY>windowHeight/2+240&&mouseY<windowHeight/2+285){
  showingAnswer=true
    
    askingQuestion=false
}
}

function keyTyped(){
  if(typingQuestion){
  if(keyCode===ENTER){
    typingQuestion=false
    enteredQuestion=true
  }
  else{
    questionText+=key
  }
  
}
  if(typingAnswer){
    if(keyCode===ENTER){
      typingAnswer=false
      enteredAnswer=true
    }
    else{
      answerText+=key
    }
  }
}

function keyPressed(){
  if(keyCode===BACKSPACE&&typingQuestion==true){
    questionText=questionText.slice(0,-1)
  }
  else if(keyCode===BACKSPACE&&typingAnswer==true){
    answerText=answerText.slice(0,-1)
  }
  else if (key==="v"&&typingQuestion==false&&typingAnswer==false){
    saved=true
    saveCards()
  }
  else if(key==="c"){
    creatorMode=true
    studyMode=false
  }
  else if(key==="s"&&typingQuestion==false&&typingAnswer==false){
    studyMode=true
    creatorMode=false
  }
  else if(studyMode==true&&restart==true&&key==="r"){
          setThemEqualFunct()
    index=0
          }
  else if(studyMode&&key==="d"){
    deleteCard()
  }
  
  
}


function saveCards(){
  cards.push({
    question:questionText,
    answer:answerText,
    score:0
  })
  questionText=" "
  answerText=" "
  enteredAnswer=false
  enteredQuestion=false
  saved=false
  restart=false
  localStorage.setItem("flashcards",JSON.stringify(cards))
  
}

function setThemEqualFunct(){
  cardsRemaining=[...cards]
  setThemEqual=false
}



function loadCards(){
  stored=localStorage.getItem("flashcards")
  if (stored){
    cards=JSON.parse(stored)
  }
}

function deleteCard(){
  cards.splice(0,1)
  cardsRemaining.splice(0,1)
  localStorage.setItem("flashcards",JSON.stringify(cards))
  
  
  
}
