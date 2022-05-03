var time = 30;

function timer() {
  setInterval(function () {
    time--;
      
    if (time >= 0) {
      var id = document.getElementById("timer");
      id.innerHTML = "00:"+time;
    }
    if (time <= 9 && time >= 0) {
        id.innerHTML = "00:0"+time;
    }
  }, 1000);
}
