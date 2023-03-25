//document.querySelector('#button1').onclick = function () { document.querySelector('#list').innerHTML += `<div>${document.querySelector('#inputBox').value}</div>` }

// Store text
const thingsToDo = ['Homework', 'PlayBasketball', 'Javascript', 'Reading', 'Arduino3DPrinting', 'Guitar', 'Piano', 'Math', 'Break', 'NoRedInk', 'NaNoWriMo', 'Study', 'Art', 'NeedToFinishOrProgram'];

// Store integers
const timeToDo = [45, 10, 30, 20, 30, 20, 20, 20, 20, 10, 10, 10, 15, 30];

// Declare variables to use in for loop
let altogether = [];
let num;
let time = 300;



function calculateTime(time) {
    // Clear console
    console.clear();
    // For loop to organize everything
    for (let i = 0; i < thingsToDo.length; i++) {
        // set num to the converted time variable divided by the number used in array thingsToDo
        num = timeToDo[i] / (300 / time);
        altogether += `${thingsToDo[i]} time: ${num} \r\n`;
    }
    // Log everything in console
    console.log(altogether);
    // Set h1 or ui to list
    document.getElementById('userInformation').textContent = `${altogether}`;
    // clear variable
    altogether = '';
}


