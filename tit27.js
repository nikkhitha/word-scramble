let game=[
    {
        word: "Symphony",
        hint: "It's a musical composition usually structured in several movements."
    },
    {
        word: "Galaxy",
        hint: "A vast system of stars, gas, dust, and dark matter held together by gravity."
    },
    {
        word: "Tranquility",
        hint: "A state of calmness, peace, and quiet."
    },
    {
        word: "Zealous",
        hint: "Showing great energy or enthusiasm in pursuit of a cause or objective."
    },
    {
        word: "Garden",
        hint: "An area of land where plants (flowers, vegetables, etc.) are grown."
    },
    {
        word: "Book",
        hint: "A set of written or printed pages bound together, often containing stories or information."
    },
    {
        word: "Apple",
        hint: "A common fruit that is often red or green."
    },
    {
        word: "Tiger",
        hint: "A large wild cat with orange fur and black stripes"
    },
    {
        word: "Beach",
        hint: "A sandy or pebbly shore by the ocean."
    },
    {
        word: "Bread",
        hint: "A food made from flour, water, and yeast."
    },
    {
        word: "Lemon",
        hint: "A sour, yellow fruit"
    },
    {
        word: "Flower",
        hint: "A colorful part of a plant that blooms."
    },
    {
        word: "Castle",
        hint: "A large, fortified building from the medieval period."
    },
    {
        word: "Puzzle",
        hint: "A game or problem designed to test ingenuity or knowledge."
    },
    {
        word: "Dragon",
        hint: "Mythical creature often depicted as a large, serpentine reptile with wings"
    },
    {
        word: "Planet",
        hint: "A large celestial body that orbits a star"
    },
    {
        word: "Rocket",
        hint: "A cylindrical projectile that can be propelled to great heights or distances."
    },
    {
        word: "Dolphin",
        hint: "An intelligent marine mammal known for its playful behavior."
    },
    {
        word: "Guitar",
        hint: "A musical instrument with strings that is played by strumming or plucking."
    },
    {
        word: "Elephant",
        hint: "A large mammal with a long trunk and tusks, native to Africa and Asia."
    },
    {
        word: "Dog",
        hint: "Most loved pet Animal."
    }
]

let elements=document.querySelector("#elements");
let hint=document.querySelector("#hint");
let input=document.querySelector(".input");
let img=document.querySelector("#image");
let container=document.querySelector(".container");
let time=document.querySelector("#times");

let previousword="";
let correctword;
let timer;

const ininttimer= (maxtime) => {
    clearInterval(timer);
    time.innerText=maxtime;
    timer=setInterval(() => {
        if(maxtime > 0) {
            maxtime--;
            time.innerText=maxtime;
            if(maxtime===0){
                clearInterval(timer);
                alert("time is up");
                alert(`The word is : ${correctword}`)
                time.innerText="30";
                refresh();
            }
        }
    },1000)
}

function startgame(){
    img.style.display="none";
    container.style.margin="10% auto";
    let randindx;
    let randomword;
    let scrambledword;
    
    do{
    randindx=Math.floor(Math.random()*game.length);
    console.log(randindx,"randindx");
    randomword=game[randindx];
    console.log(randomword.word,randomword.hint);
    }while(randomword.word===previousword);
    

    correctword=randomword.word;
    previousword=correctword;
    console.log(correctword,previousword)

    
    hint.innerHTML= randomword.hint;
    console.log(randomword.word.length);

    do{
        scrambledword=shuffleword(correctword);
    }while(scrambledword===correctword);

    
    elements.innerHTML=scrambledword.toLowerCase().split('').join(" ");

    input.addEventListener('input',function(){
        if(input.value.length>correctword.length){
            input.value=input.value.slice(0,correctword.length)
        }
    })
    ininttimer(30);
}

function shuffleword(word){
    let shuffle=word.split('').sort(() => 0.5-Math.random()).join('');
    return (shuffle===word) ? shuffleword(word):shuffle
}

function checkword(){
    if(input.value.toLowerCase()===correctword.toLowerCase()){
        img.style.display="block";
        container.style.margin="30px auto"
        setTimeout(function () {
            alert("yes it's correct");
            refresh();
        },500)
    }
    else if(input.value===""){
        alert("enter a valid text");
        img.style.display="none";
        container.style.margin="10% auto";
    }
    else{
        alert("Oops! it's wrong")
        img.style.display="none";
        container.style.margin="10% auto";
    }
    
}
function refresh(){
    input.value="";
    img.style.display="none";
    container.style.margin="10% auto";
    startgame();
}



startgame();