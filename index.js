const englishWordsList = [
    "dog",
    "cat",
    "parrot",
    "crow",
    "fish"
]

const TranslatedWordsList = [
    "Šuo",
    "Katė",
    "Papūga",
    "Varna",
    "Žuvis"
]


var indicator = 0;

function myFunction() {
    if (englishWordsList[indicator]===undefined){
        indicator=0
        if (englishWordsList[0]===undefined){
            alert("Congrats")
        }
    }
    document.getElementById("EnglishWord").innerHTML = englishWordsList[indicator];
}

function FunctionForTranslation(){
    document.getElementById("CorrectAnswer").innerHTML = TranslatedWordsList[indicator];
    console.log("translating")
}
  
function LearntButtonClick(){
    englishWordsList.splice(indicator,1);
    TranslatedWordsList.splice(indicator,1);
    document.getElementById("CorrectAnswer").style.display = "none";
    myFunction();
}

function AgainButtonClick(){
    indicator = indicator + 1;
    document.getElementById("CorrectAnswer").style.display = "none";
    myFunction();
}

function EnterButtonClick(){
    document.getElementById("CorrectAnswer").style.display = "flex";
    FunctionForTranslation();
}
