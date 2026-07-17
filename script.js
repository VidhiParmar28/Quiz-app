const questions = [
    {
        question:"which Keyword is used to declare a variable that cannot be reassigned?",
        options : ["var" , "let" , "const" , "static"],
        correct : 2 
    },
    {
        question :"What does typeof null return in JavaScript?",
        options :["'null'", "'undefined'", "'object'", "'number'"],
        correct :2
    },
    {
        question :"Which method converts a JSON string into a JavaScript object?",
        options :["JSON.stringify()", "JSON.parse()", "JSON.toObject()", "Object.parse()"],
        correct :1
    },
    {
        question :"What is the output of: console.log(1 + '1')?",
        options :["2", "'11'", "NaN", "undefined"],
        correct :1
    },
    {
        question :"Which operator checks both value and type for equality?",
        options :["==", "=", "===", "!=="],
        correct :2
    },
    {
        question :"Which built-in method adds one or more elements to the end of an array?",
        options :["push()", "pop()", "shift()", "unshift()"],
        correct :0
    },
    {
        question :"What will 'undefined' + 1 evaluate to?",
        options :["1", "NaN", "'undefined1'", "0"],
        correct : 1
    },
    {
        question :"Which of these creates an arrow function?",
        options :["function() {}" , "() => {}" , "=> function() {}" , "function => {}"],
        correct :1
    },
    {
        question : "What does the 'this' Keyword refer to inside a regular function called as obj.method()?",
        options : ["The global object" , "undefined" ,"The object the method was called on","The function itself"],
        correct :2
    },
    {
        question : "Which array method creates a new array with all elements that pass a test?",
        options : ["map()" , "forEach()" , "filter()" , "reduce()"],
        correct : 2
    },
]

let currentIndex = 0;

const queContainer = document.querySelector(".quecontainer");
const progress = document.getElementById("progress");
console.log(progress);

function  renderQuestion() {
    const q = questions[currentIndex];
    
    queContainer.innerHTML = `
     <p class="que">${q.question}</p>

    <div class="options">

    ${q.options.map((opt,i)=> `

        <div class="option" data-text=${i}>
        <p>${opt}</p>
        </div>
    `).join("")}

    </div>
`;
 progress.textContent = `question ${currentIndex + 1} / ${questions.length}`;
    }

    

   
renderQuestion();
    

    const btn = document.getElementById("nextbtn");

    btn.addEventListener("click" , () => {
        currentIndex++;
        if(currentIndex < questions.length){
             renderQuestion();
        }
        else{
            queContainer.innerHTML = "<p>Quiz finished!</p>";
        }

    });