var timer = 15;

setInterval(function () {
        timer--;
      
        if (timer >= 0) {
          id = document.getElementById("timer");
          id.innerHTML = "00:"+timer;
        }
        if (timer <= 9 && timer >= 0) {
            id = document.getElementById("timer");
            id.innerHTML = "00:0"+timer;
        }
      }, 1000);


