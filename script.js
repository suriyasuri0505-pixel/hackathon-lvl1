let users={
suriya:"12345678",
menakaran:"87654321",
arun:"18273645"
}

let currentUser=""
let currentCourse=""
let questionIndex=0
let score=0
let answered=false


function showPage(page){

document.querySelectorAll(".page").forEach(p=>p.style.display="none")

document.getElementById(page).style.display="block"

}


function login(){

let u=document.getElementById("username").value
let p=document.getElementById("password").value

if(users[u] && users[u]===p){

currentUser=u

document.getElementById("welcome").innerText="Welcome "+u

showPage("dashboard")

}else{

document.getElementById("error").innerText="Invalid Login"

}

}


function logout(){

showPage("loginPage")

}


function openCourse(course){

currentCourse=course

let title=""
let desc=""
let topics=[]
let video=""

if(course==="html"){

title="HTML Basics"

desc="HTML is used to create structure of web pages."

topics=["HTML Tags","Headings","Links","Images","Tables"]

video="https://www.youtube.com/embed/qz0aGYrrlhU"

}

if(course==="css"){

title="CSS Styling"

desc="CSS is used to design beautiful websites."

topics=["Selectors","Colors","Box Model","Flexbox","Grid"]

video="https://www.youtube.com/embed/1Rs2ND1ryYc"

}

if(course==="js"){

title="JavaScript"

desc="JavaScript makes websites interactive."

topics=["Variables","Functions","Events","DOM","Loops"]

video="https://www.youtube.com/embed/W6NZfCO5SIk"

}

document.getElementById("courseTitle").innerText=title
document.getElementById("courseDesc").innerText=desc
document.getElementById("courseVideo").src=video

let list=""

topics.forEach(t=>{

list+="<li>"+t+"</li>"

})

document.getElementById("courseTopics").innerHTML=list

showPage("coursePage")

}


function enableQuiz(){

document.getElementById("quizBtn").disabled=false

}


function startQuiz(){

questionIndex=0
score=0

showPage("quizPage")

loadQuestion()

}


let quiz=[

{q:"HTML stands for?",o:["Hyper Text Markup Language","High Tool Machine","Hyper Transfer","None"],a:0},

{q:"CSS stands for?",o:["Creative Style","Cascading Style Sheet","Color Sheet","None"],a:1},

{q:"JS used for?",o:["Structure","Styling","Interactivity","Database"],a:2},

{q:"HTML link tag?",o:["a","link","href","url"],a:0},

{q:"CSS color property?",o:["font","color","text","design"],a:1},

{q:"JS variable?",o:["var","data","int","define"],a:0},

{q:"HTML heading?",o:["h1","head","top","title"],a:0},

{q:"CSS layout?",o:["Grid","Table","Form","None"],a:0},

{q:"JS runs in?",o:["Browser","Printer","Speaker","Scanner"],a:0},

{q:"HTML image?",o:["img","image","pic","src"],a:0}

]


function loadQuestion(){

answered=false

let q=quiz[questionIndex]

document.getElementById("question").innerText=q.q

let html=""

q.o.forEach((opt,i)=>{

html+=`<button onclick="selectAnswer(${i},this)">${opt}</button>`

})

document.getElementById("options").innerHTML=html

}


function selectAnswer(i,btn){

if(answered) return

answered=true

btn.classList.add("selected")

if(i===quiz[questionIndex].a){
score++
}

}


function nextQuestion(){

questionIndex++

if(questionIndex<quiz.length){

loadQuestion()

}else{

showCertificate()

}

}


function showCertificate(){

document.getElementById("certName").innerText=currentUser
document.getElementById("certCourse").innerText=currentCourse
document.getElementById("certScore").innerText="Score : "+score+" / 10"

showPage("certificatePage")

}
