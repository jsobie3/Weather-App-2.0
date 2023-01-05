// -- DayJS Time -- //
var currentDate = dayjs().format("dddd, MMM D YYYY: h:mm a");
var todayDate = document.getElementById("currentDay");
var currentHour = dayjs().format("HH")  

var saveButtons = document.querySelectorAll(".saveBtn")
todayDate.innerText = (currentDate);

function colorTime(){

$('.hourblock').each(function () {
  
    // var currentHour = dayjs().format('h')
    var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
  
    if (currentHour === hourBlock) {
        $(this).addClass("present");
    } else if (currentHour <= hourBlock) {
        $(this).addClass("future");
    } else if (currentHour >= hourBlock) {
        $(this).addClass("past");
    }
});
}
colorTime();



$("#hour09 .description").val(localStorage.getItem("hour09"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12 "));
$("#hour1 .description").val(localStorage.getItem("hour1 "));
$("#hour2 .description").val(localStorage.getItem("hour2 "));
$("#hour3 .description").val(localStorage.getItem("hour3 "));
$("#hour4 .description").val(localStorage.getItem("hour4 "));
$("#hour5 .description").val(localStorage.getItem("hour5 "));

// -- Save Button -- //
$(".saveBtn").on("click", function saveInput(event)
{
event.preventDefault();
let tasks = $(this).siblings(".description").val();
let time = $(this).parents().attr("id");

localStorage.setItem(time, tasks)
})


