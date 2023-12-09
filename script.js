var currentDate = dayjs();
$("#currentDay").text(currentDate);
let hour = currentDate.get("hour");
console.log(hour);
