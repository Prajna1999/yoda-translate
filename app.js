var btnTranslate=document.querySelector("#button-translate");
var textInput=document.querySelector("#text-input");
var outputDiv=document.querySelector("#output")

// outputDiv.innerText="Prajna";

// var serverURl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
// var serverURL="https://api.funtranslations.com/translate/yoda.json"
var serverURL="https://api.funtranslations.com/translate/quenya.json"

function getTranslationURL(text){
    return serverURL+"?"+"text="+text;
}
function errorHandler(error){
    console.log("error occured", error);
    alert("Server is down. Please try after sometime.")
   
}





function clickHandler(){
//    outputDiv.innerHTML="sdasdas"+textInput.value;Te
    var inputText=textInput.value; //taking input from textarea
    //calling server for processing.
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText=json.contents.translated;
        outputDiv.innerText=translatedText;
        

    })

        
        
    .catch(errorHandler);
 }

 btnTranslate.addEventListener("click",clickHandler);

