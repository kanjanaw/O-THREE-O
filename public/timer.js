var id = document.getElementById("timer");
var playerTime
// ref.child(roomCode).once("value", (snapshot) => {
//   curPlayer = snapshot.val().currentPlayer;
// });
function timer(state) {
  let curPlayer;
    ref.child(roomCode).once("value", (snapshot) => {
      curPlayer = snapshot.val().currentPlayer;
    });
  var time = 31;
  if(state == "run"){
  playerTime = setInterval(function () {
    time--;
    if (time >= 10) {
      id.innerHTML = "00:"+time;
      console.log(time);
    }
    else if (time <= 9 && time >= 0) {
        id.innerHTML = "00:0"+time;
        console.log(time);
        
    }
    else if(time < 0){
      id.innerHTML = "00:00";
      notYourTurn();
      if (curPlayer == "rgb(109, 187, 255)") {
        ref.child(roomCode).update({
          currentPlayer: "rgb(25, 212, 184)",
        });
      } else if (curPlayer == "rgb(25, 212, 184)") {
        ref.child(roomCode).update({
          currentPlayer: "rgb(255, 222, 89)",
        });
      } else if (curPlayer == "rgb(255, 222, 89)") {
        ref.child(roomCode).update({
          currentPlayer: "rgb(255, 109, 109)",
        });
      } else if (curPlayer == "rgb(255, 109, 109)") {
        ref.child(roomCode).update({
          currentPlayer: "rgb(109, 187, 255)",
        });
      }
    }
  }, 1000);}
  else{
    id.innerHTML = "00:00"
    clearInterval(playerTime)
  }
}
