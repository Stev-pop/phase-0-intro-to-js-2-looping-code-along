// Code your solutions in this file

//using for loop 
const birthdayList = ["Guadalupe", "Ollie", "Aki"];

function writeCards(array, event = "event"){
  let newArray = [];
  for (let i = 0; i < array.length; i++){
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
debugger
    }
    return newArray
  }
console.log(writeCards(birthdayList, "birthday")); 

//Using while looop
function countDown(num){
  while (num >= 0){
    console.log(num--);
  }
}

countDown(10);
