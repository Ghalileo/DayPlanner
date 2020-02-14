//Variables 
//Variable for container which contains the cards to plan the day
var timecontainer = $('#timeblockspace');
//Global reference variable of the current day ID
var currday = $('#currentDay');
//Global reference variable of time displayed on the 
var currtime = moment(). format('MM DD YYYY');
var savenote = $('<#saveNote>');
var task = $('.tasks');
var save = $('.saveBtn');
var agenda = [];
var value = $(".textarea");


console.log(currtime);

//Functions 
$(currday).append ("Today's Date: " + "<br> "+ "<br>" + currtime);
function display(){
    task.text(localStorage.getItem("task"))
}
console.log(save);

display();


//This allows the user to input tasks for each day of the week 

  

//Event listeners 

$(save).on("click" , function(e) {
    e.preventDefault();
    localStorage.setItem("task" , value.innerHTML);
  });
