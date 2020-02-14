//Variables 
//Variable for container which contains the cards to plan the day
var timecontainer = $('#timeblockspace');
//Global reference variable of the current day ID
var currday = $('#currentDay');
//Global reference variable of time displayed on the 
var currtime = moment(). format('MM DD YYYY');
// 
var savenote = $('<#saveNote>');
//Global variable that references the task textarea
// var task = $('.tasks');
//Global Variable that references the save buttons
var save = $('.saveBtn');
//Empty array used to store user input
var agenda = "";
var value = $("");

var note = $(localStorage.getItem(".tasks"));
var key = $("<key>")
console.log(note);

save.textcontent = note;

save.on("click" , function(e) {
    note++;
save.textcontent = note;

localStorage.setItem(JSON.parse("key", note));
localStorage.getItem(JSON.parse("key", note));
});


console.log(currtime);

//Functions 
$(currday).append ("Today's Date: " + "<br> "+ "<br>" + currtime);
// function display(){
//     task.text(localStorage.getItem("task"))
// }
// console.log(save);

// display();
// var arrayOfLines = $('#note').val().split('\n');
// console.log(".note");

//This allows the user to input tasks for each day of the week 
// function getObject (key){
//     var storage =window.localStorage;
//     var value = storage.getItem(key);
//     return value && JSON.parse(value);
//     function clearStorage(){
//         window.localStorage.clear;
//     }
// };
  

//Event listeners 

// save.on("click" , function(e) {
//     e.preventDefault();
    
//         window.localStorage.setItem("task", agenda);
//         save.text(localStorage.getItem("task"));
    
//   })
