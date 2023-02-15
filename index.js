const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let passwordLength = 12

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    passwordOne.textContent = ""
    passwordTwo.textContent = ""
    let randomPasswordOne = ""
    let randomPasswordTwo = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordOne += getRandomCharacter()
    }
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordTwo += getRandomCharacter()
    }
    passwordOne.textContent += randomPasswordOne
    passwordTwo.textContent += randomPasswordTwo
}


//const generatedPasswordOne = generateRandomPassword()

//console.log("Here is a random password: ", generatedPasswordOne)