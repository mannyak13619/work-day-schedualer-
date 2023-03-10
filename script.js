// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  setInterval(function () {

    var today = dayjs();
    $("#current-say").text(today.format("dddd MMM D,YYYY hh:mmA"));
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {

      var hourBlock = parseInt($(this).data("hour"));

      if (currentHour > hourBlock) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (currentHour == hourBlock) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      };
    });
  }, 1000)

  $(".saveBtn").on("click", function () {
    console.log($(this).siblings("textarea").val())
    var id = $(this).parent().attr("id")
    var input = $(this).siblings("textarea").val()
    localStorage.setItem(id, input)
  })
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("DD/MM/YYYY"))
});
document.getElementById("myBtn");
ddEventListener = ("click", "dysplayDate")


// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


