const characterAmountRange = document.getElementById("characterAmountRange")
const characterAmountNumber = document.getElementById("characterAmountNumber")
const form = document.getElementById("getPasswordGen")
const copyBtn = document.getElementById("copy-Btn")
const includeUpperCaseElement = document.getElementById("includeUpperCase")
const includeNumbersElement = document.getElementById("includeNumbersCase")
const includeSymbolsElement = document.getElementById("includeSymbols")
const passwordDisplay = document.getElementById("passwordDisplay")

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58.64) 
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126))

characterAmountRange.addEventListener("input", syncCharacterAmount)
characterAmountNumber.addEventListener("input", syncCharacterAmount)

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountRange.value = value
    characterAmountNumber.value = value
}

function passwordCopy(){
    var copyText = document.getElementById("passwordDisplay");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
}


form.addEventListener("submit", e=> {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUpperCase = includeUpperCaseElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const includeNumbers = includeNumbersElement.checked
    const password = passwordGenerate(characterAmount, includeUpperCase, includeSymbols, includeNumbers)
    passwordDisplay.innerText = password
})



function passwordGenerate(characterAmount, includeUpperCase, includeSymbols, includeNumbers) {
let charCodes = LOWERCASE_CHAR_CODES
if (includeUpperCase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
if (includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)
if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)

const characterPassword = []
for (let i = 0; i < characterAmount; i++){
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    characterPassword.push(String.fromCharCode(characterCode))
}
return characterPassword.join('')
}
function arrayFromLowToHigh(low, high) {
   const array = []
   for (let i= low; i<=high; i++) {
     array.push(i)
}
   return array
}


