$(init);
function init() {
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));
  timeRows();
  setInterval(timeRows, 50000);
  $(".time-block").each(function () {
    var id = $(this).attr("id");
    $("#" + id + " textarea").text(
      localStorage.getItem(dayjs().format("dddd, MMMM D") + id)
    );
  });
  $(".saveBtn").on("click", handleSave);
}

function timeRows() {
  $(".time-block").each(function () {
    var timeRowHour = parseInt($(this).attr("id").replace("hour-", ""));
    var currentHour = parseInt(dayjs().format("H"));
    $(this).removeClass("past present future");
    if (timeRowHour < currentHour) {
      $(this).addClass("past");
    } else if (timeRowHour > currentHour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}
function handleSave(event) {
  var hourId = $(this).parent().attr("id");
  localStorage.setItem(
    dayjs().format("DDD YYYY") + hourId,
    $("#" + hourId + " textarea").val()
  );
}
