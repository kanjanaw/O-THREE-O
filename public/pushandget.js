btnDone = document.getElementById("btn-done")
btnDone.addEventListener("click", pushPieceToFirebase);


function pushPieceToFirebase() {
    var user = firebase.auth().currentUser;

    if (place){
      let curPlayer;
      ref.child(roomCode).once("value", (snapshot) => {
        curPlayer = snapshot.val().currentPlayer;
      });
      if (curPlayer == "rgb(109, 187, 255)" && curPlayer == playerColor) {
        ref.child(roomCode).child("gameplay").push({
          playerId: playerId,
          playerName: user.displayName,
          color: playerColor,
          piece: pieceSelect,
        });
        ref.child(roomCode).update({
          currentPlayer: "rgb(25, 212, 184)",
        });
        alert("done success");
      place = false;
      checkWinner()
      } else if (curPlayer == "rgb(25, 212, 184)" && curPlayer == playerColor) {
        ref.child(roomCode).child("gameplay").push({
          playerId: playerId,
          playerName: user.displayName,
          color: playerColor,
          piece: pieceSelect,
        });
        ref.child(roomCode).update({
          currentPlayer: "rgb(255, 222, 89)",
        });
        alert("done success");
      place = false;
      checkWinner()
      } else if (curPlayer == "rgb(255, 222, 89)" && curPlayer == playerColor) {
        ref.child(roomCode).child("gameplay").push({
          playerId: playerId,
          playerName: user.displayName,
          color: playerColor,
          piece: pieceSelect,
        });
        ref.child(roomCode).update({
          currentPlayer: "rgb(255, 109, 109)",
        });
        alert("done success");
      place = false;
      checkWinner()
      } else if (curPlayer == "rgb(255, 109, 109)" && curPlayer == playerColor) {
        ref.child(roomCode).child("gameplay").push({
          playerId: playerId,
          playerName: user.displayName,
          color: playerColor,
          piece: pieceSelect,
        });
        ref.child(roomCode).update({
          currentPlayer: "rgb(109, 187, 255)",
        });
        alert("done success");
      place = false;
      checkWinner()
      }
      else{
          alert("not your turn")
      }
  
    } else {
        alert('plz place your piece')
    }
}


ref.on('value', (snapshot) => {
    showPiece(snapshot)
    turnGame(snapshot)
})


function showPiece(snapshot){
    
    ref.child(roomCode).child('gameplay').on('value', (snapshot) => {
    snapshot.forEach((data) => {
        const id = data.key
        const piece = data.val().piece
        const color = data.val().color

        document.getElementById(piece).style.backgroundColor = color
        document.getElementById(piece).removeEventListener("click", selectAndDeselect)

    })
})
}


