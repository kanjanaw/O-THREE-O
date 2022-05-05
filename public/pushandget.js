const btnDone = document.getElementById("btn-done");
btnDone.addEventListener("click", pushPieceToFirebase);

const btnDoneClass = document.getElementsByClassName("btn-game")[1];

function pushPieceToFirebase() {
  var user = firebase.auth().currentUser;

  if (place) {
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

      doneSuccess();
      place = false;
      // checkWinner()
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

      doneSuccess();
      place = false;
      // checkWinner()
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

      doneSuccess();
      place = false;
      // checkWinner()
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

      doneSuccess();
      place = false;
      // checkWinner()
    } else {
      notYourTurn();
      place = false;
    }
  } else {
    placeYourPieces();
  }
}

ref.on("value", (snapshot) => {
  showPiece(snapshot);
  turnGame(snapshot);
});

function showPiece(snapshot) {
  ref
    .child(roomCode)
    .child("gameplay")
    .on("value", (snapshot) => {
      snapshot.forEach((data) => {
        const id = data.key;
        const piece = data.val().piece;
        const color = data.val().color;

        document.getElementById(piece).style.backgroundColor = color;
        document
          .getElementById(piece)
          .removeEventListener("click", selectAndDeselect);
      });
    });
  checkWinner();
}

function doneSuccess() {
  document.getElementById("overlay-done").style.display = "block";
  setTimeout(() => { document.getElementById("overlay-done").style.display = "none";}, 1000);
}

function placeYourPieces() {
  document.getElementById("overlay-place").style.display = "block";
  setTimeout(() => { document.getElementById("overlay-place").style.display = "none"; }, 1000);
}

function notYourTurn() {
  document.getElementById("overlay-turn").style.display = "block";
  setTimeout(() => { document.getElementById("overlay-turn").style.display = "none"; }, 1000);
}

function off() {
    this.style.display = 'none';
}