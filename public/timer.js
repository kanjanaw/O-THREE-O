var id = document.getElementById("timer");
var playerTime
// ref.child(roomCode).once("value", (snapshot) => {
//   curPlayer = snapshot.val().currentPlayer;
// });
function timer(state) {
  var time = 31;
  if(state == "run"){
  playerTime = setInterval(function () {
    time--;
    if (time >= 10) {
      id.innerHTML = "00:"+time;
      console.log(time);
    }
    else if (time <= 9 && time > 0) {
        id.innerHTML = "00:0"+time;
        console.log(time);
    }
    else if(time == 0){
      alert("time out")
      
    }
  }, 1000);}
  else{
    id.innerHTML = "00:00"
    clearInterval(playerTime)
  }
}
// if (playerColor == curPlayer) {
// timer()
// }