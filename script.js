const characterAmountRange = document.getElementById("characterAmountRange")
const characterAmountNumber = document.getElementById("characterAmountNumber")
const form = document.getElementById("getPasswordGen")
const copyBtn = document.getElementById("copy-Btn")
const includeUpperCaseElement = document.getElementById("includeUpperCase")
const includeNumbersElement = document.getElementById("includeNumbersCase")
const includeSymbolsElement = document.getElementById("includeSymbols")
const passwordDisplay = document.getElementById("passwordDisplay")

//const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)  //      // using the data in ASCII table and fetching values and adding into the array//
// const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57) //
//const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122) //
//const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47).concat( // here concat() merges the following array and return a new array formed//
 //   arrayFromLowToHigh(58.64)   //     // made changes here from (. -> ,) //
//).concat(//
  //  arrayFromLowToHigh(91, 96)//
// ).concat(//
 //   arrayFromLowToHigh(123, 126)) //

const characters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "1234567890"

characterAmountRange.addEventListener("input", syncCharacterAmount)
characterAmountNumber.addEventListener("input", syncCharacterAmount)

function syncCharacterAmount(e) {        //synchronise the specified range value and number value to = characterAmount and then match with the values in ASCII table and print it out//
    const value = e.target.value
    characterAmountRange.value = value
    characterAmountNumber.value = value
}

function passwordCopy(){
    var copyText = document.getElementById("passwordDisplay");
    var textArea = document.createElement("textarea");       // area within the password text box//
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea); 
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
}


form.addEventListener("submit", e=> {    //clicking onto all of the functionality before pressing generate button (submit)//
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUpperCase = includeUpperCaseElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const includeNumbers = includeNumbersElement.checked
    const password = passwordGenerate(characterAmount, includeUpperCase, includeSymbols, includeNumbers)
    passwordDisplay.innerText = password      //password is generated and displayed//
})



function passwordGenerate(characterAmount, includeUpperCase, includeSymbols, includeNumbers) {     // initialise the functionality into its given array//
let charCodes = characters
if (includeUpperCase) charCodes += charCodes.toLocaleUpperCase
if (includeSymbols) charCodes += "!@#$%^&*()_+-=[]{}|;':,.<>?"
if (includeNumbers) charCodes += numbers

const characterPassword = []
for (let i = 0; i < characterAmount; i++){        // here its a loop for all indexno. in characterAmount involved -> randomise it and fetch the indexno of table from the array and add it into a string//
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    characterPassword.push(characterCode)
}
return characterPassword.join('')
}

//function arrayFromLowToHigh(low, high) {   //      //push the values into the array//
 //  const array = [] //
  // for (let i= low; i<=high; i++) { //
  //   array.push(i) //
//} //
  // return array //
//} //


