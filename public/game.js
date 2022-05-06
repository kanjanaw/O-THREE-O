function turnGame(snapshot) {
  let curPlayer;
  btnDoneClass.disabled = true;
  playerNamesInGame.forEach(playerNamesInGame => {
      playerNamesInGame.style.opacity = .3
  });
  ref.child(roomCode).on("value", (snapshot) => {
    snapshot.forEach((data) => {
      curPlayer = snapshot.val().currentPlayer;
    });
    if (playerColor == curPlayer) {
      btnDoneClass.disabled = false;
      playerNamesInGame[indexSetColor].style.opacity = 1;
    } 
    else{
      if(curPlayer == "rgb(109, 187, 255)"){
        playerNamesInGame[0].style.opacity = 1;
      }
      else if(curPlayer == "rgb(25, 212, 184)"){
        playerNamesInGame[1].style.opacity = 1;
    }
    else if(curPlayer == "rgb(255, 222, 89)"){
        playerNamesInGame[2].style.opacity = 1;
    }
    else if(curPlayer == "rgb(255, 109, 109)"){
        playerNamesInGame[3].style.opacity = 1;
    }  
    }
  });
}
