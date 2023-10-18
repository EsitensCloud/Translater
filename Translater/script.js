const words = [
    { original: "apple", translation: "яблоко" },
    { original: "banana", translation: "банан" },
    { original: "orange", translation: "апельсин" },
    { original: "car", translation: "автомобиль" },
    { original: "dog", translation: "собака" },
    { original: "book", translation: "книга" },
    { original: "computer", translation: "компьютер" },
]


function Counter(){
    document.querySelector(".counter").innerHTML = "Осталось слов: " + words.length
}

function Random(){
    randomWord = Math.floor(Math.random() * words.length)
    document.querySelector(".word").innerHTML = words[randomWord].translation
    Counter();
    return words[randomWord];
}

function Check(){
    if(document.querySelector(".text").value === words[randomWord].original){
        document.querySelector(".next").disabled = false
    }
    else{
        document.querySelector(".next").disabled = true
    }

    
}

function NextWord(){
    words.splice(randomWord,1)
    randomWord = Math.floor(Math.random() * words.length)
    Win(); 
    Counter();
    document.querySelector(".word").innerHTML = words[randomWord].translation
    document.querySelector(".text").value = ""    
    return words[randomWord];
    
}

function Win(){
    if(words.length <= 0){
        document.querySelector(".next").disabled = true
        alert("Вы победили")
        window.location = "/"
    }
}

Random();
document.querySelector(".text").addEventListener("keyup",Check)
document.querySelector(".next").addEventListener("click",NextWord)
