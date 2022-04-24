var date = new Date();

var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  };



let message = document.querySelector('.data_things');

function myDate(){
  date = new Date();
  message.textContent = date.toLocaleString("ru",options);
}

setInterval(myDate, 1000);