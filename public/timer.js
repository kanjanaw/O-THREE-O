var time = 30;

function timer() {
  setInterval(countDown(), 1000);
}

function countDown() {
  time--;
      
  if (time >= 0) {
    id = document.getElementById("timer");
    id.innerHTML = "00:"+time;
  }
  if (time <= 9 && time >= 0) {
      id = document.getElementById("timer");
      id.innerHTML = "00:0"+time;
  }
}