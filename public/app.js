const playerPieces = document.querySelectorAll(".player-pieces");
playerPieces.forEach((playerPiece) => 
  playerPiece.style.backgroundColor = "rgb(25, 212, 184)"
);

const bgPieces = document.querySelectorAll(".boardgame-pieces");
bgPieces.forEach((bgPiece) => {
  bgPiece.style.backgroundColor = "rgb(220, 220, 220)"; // color must be in rgb(xxx, xxx, xxx) form only!
  bgPiece.addEventListener("click", selectAndDeselect);
});

var selectPieceSize;

function selectAndDeselect(event) {
    const pieceSelect = event.currentTarget.getAttribute('id');
    selectPieceSize = pieceSelect[pieceSelect.length - 3];

  // Piece in grey turn to player's color == player select this piece
  if (event.currentTarget.style.backgroundColor == "rgb(220, 220, 220)") {
    this.style.backgroundColor = "rgb(25, 212, 184)";
    selectPlayerPiece(selectPieceSize);
    event.stopPropagation();

    // Piece in player's color turn to grey == player deselect this piece
  } else if (event.currentTarget.style.backgroundColor == "rgb(25, 212, 184)") {
    this.style.backgroundColor = "rgb(220, 220, 220)";
    selectPlayerPiece(selectPieceSize);
    event.stopPropagation();
  }
}

function selectPlayerPiece(size) {
  const playerPieceSize = playerPieces.forEach((playerPiece) => {
  const playerPieceID = playerPiece.getAttribute('id')
  const playerPieceSize = playerPieceID[playerPieceID.length - 3]
  const countPlayerPiece = 0;

  if(playerPiece.style.backgroundColor == "rgb(25, 212, 184)" && size == playerPieceSize){
    console.log(playerPieceSize);
    playerPiece.style.backgroundColor = "rgb(220, 220, 220)";
  } else if(playerPiece.style.backgroundColor == "rgb(220, 220, 220)" && size == playerPieceSize){
    console.log(playerPieceSize);
    playerPiece.style.backgroundColor = "rgb(25, 212, 184)";
  }
  })
}

// const logoutItems = document.querySelectorAll(".logged-out");
const loginItems = document.querySelectorAll(".logged-in");

function setupUI(user) {
  if (user) {
    loginItems.forEach(item => item.style.display = "inline-block");
    // logoutItems.forEach(item => item.style.display = "none");
  } else {
    loginItems.forEach(item => item.style.display = "none");
    // logoutItems.forEach(item => item.style.display = "inline-block");
  }
}
