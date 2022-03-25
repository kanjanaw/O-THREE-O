const playerPieces = document.querySelectorAll(".player-pieces");
playerPieces.forEach(
  (playerPiece) => (playerPiece.style.backgroundColor = "rgb(25, 212, 184)")
);

const bgPieces = document.querySelectorAll(".boardgame-pieces");
bgPieces.forEach((bgPiece) => {
  bgPiece.style.backgroundColor = "rgb(220, 220, 220)"; // color must be in rgb(xxx, xxx, xxx) form only!
  bgPiece.addEventListener("click", selectAndDeselect);
});

var selectPieceSize,
  countPiecesL = 0,
  countPiecesM = 0,
  countPiecesS = 0;

function selectAndDeselect(event) {
  const pieceSelect = event.currentTarget.getAttribute("id");
  selectPieceSize = pieceSelect[pieceSelect.length - 3];

  // Piece in grey turn to player's color == player select this piece
  if (event.currentTarget.style.backgroundColor == "rgb(220, 220, 220)") {
      if (selectPieceSize == "L" && countPiecesL < 3) {
        countPiecesL += 1;
        this.style.backgroundColor = "rgb(25, 212, 184)";
      } else if (selectPieceSize == "M" && countPiecesM < 3) {
        countPiecesM += 1;
        this.style.backgroundColor = "rgb(25, 212, 184)";
      } else if (selectPieceSize == "S" && countPiecesS < 3) {
        countPiecesS += 1;
        this.style.backgroundColor = "rgb(25, 212, 184)";
      } else {
        alert("Your pieces is empty.");
      }

      selectPlayerPiece(selectPieceSize);
      event.stopPropagation();

    // Piece in player's color turn to grey == player deselect this piece
  } else if (event.currentTarget.style.backgroundColor == "rgb(25, 212, 184)") {
      if (selectPieceSize == "L") {
        countPiecesL -= 1;
        this.style.backgroundColor = "rgb(220, 220, 220)";
      } else if (selectPieceSize == "M") {
        countPiecesM -= 1;
        this.style.backgroundColor = "rgb(220, 220, 220)";
      } else if (selectPieceSize == "S") {
        countPiecesS -= 1;
        this.style.backgroundColor = "rgb(220, 220, 220)";
      }
      selectPlayerPiece(selectPieceSize);
      event.stopPropagation();
  }
}

function selectPlayerPiece(size) {
  // playerPieces.forEach((playerPiece) => {
  // const playerPieceID = playerPiece.getAttribute('id')
  // const playerPieceSize = playerPieceID[playerPieceID.length - 3]

  // if(playerPiece.style.backgroundColor == "rgb(25, 212, 184)" && size == playerPieceSize) {
  //   console.log(playerPieceSize);
  // playerPiece.style.backgroundColor = "rgb(220, 220, 220)";
  // }

  //  switch (size == playerPieceSize){
  //     case playerPiece.style.backgroundColor == "rgb(25, 212, 184)" && size == playerPieceSize:
  //       console.log(playerPieceSize);
  //       break;
  //     case playerPiece.style.backgroundColor == "rgb(220, 220, 220)" && size == playerPieceSize:
  //       console.log(playerPieceSize);
  //       break;
  //  }
  // else if(playerPiece.style.backgroundColor == "rgb(220, 220, 220)" && size == playerPieceSize){
  //   console.log(playerPieceSize);
  //   // playerPiece.style.backgroundColor = "rgb(25, 212, 184)";
  // }

  // const playerPieceClass = document.getElementsByClassName("player-pieces");
  // var playerPieceSize;

  // for (let i = 0; i < 9; i++) {
  //   var playerPieceSize = playerPieceClass[i].getAttribute('id')[playerPieceClass[i].getAttribute('id').length - 3]

  //   if (playerPieceClass[i].style.backgroundColor == "rgb(25, 212, 184)" && size == playerPieceSize) {
  //     playerPieceClass[i].style.backgroundColor = "rgb(220, 220, 220)";
  //     console.log(playerPieceSize, countPieces);
  //     break;
  //   }

  // else if (playerPieceClass[i].style.backgroundColor == "rgb(220, 220, 220)" && size == playerPieceSize){
  //   playerPieceClass[i].style.backgroundColor = "rgb(25, 212, 184)";
  //   break;
  // }
  //else {
  //   alert();
  //   break;
  // }
  console.log(countPiecesL, countPiecesM, countPiecesS);
}

// const logoutItems = document.querySelectorAll(".logged-out");
const loginItems = document.querySelectorAll(".logged-in");

function setupUI(user) {
  if (user) {
    loginItems.forEach((item) => (item.style.display = "inline-block"));
    // logoutItems.forEach(item => item.style.display = "none");
  } else {
    loginItems.forEach((item) => (item.style.display = "none"));
    // logoutItems.forEach(item => item.style.display = "inline-block");
  }
}
