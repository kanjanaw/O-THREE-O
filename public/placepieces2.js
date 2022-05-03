const bgPieces = document.querySelectorAll(".boardgame-pieces");
bgPieces.forEach((bgPiece) => {
  bgPiece.style.backgroundColor = bgPiecesColor;
  bgPiece.addEventListener("click", selectAndDeselect);
});

var selectPieceSize, pieceSelect,
  pieceSize,
  email,
  countPiecesL = 0,
  countPiecesM = 0,
  countPiecesS = 0,
  place = false;
// positionPlace = {position: undefined, place: false};

// player select & deselect on boardgame
function selectAndDeselect(event) {
  pieceSelect = event.currentTarget.getAttribute("id");
  selectPieceSize = pieceSelect[pieceSelect.length - 3];
  pieceSize = pieceSelect;

  // Piece in grey turn to player's color == player select this piece
  if (
    event.currentTarget.style.backgroundColor == bgPiecesColor &&
    place == false
  ) {
    if (selectPieceSize == "L" && countPiecesL < 3) {
      countPiecesL += 1;
      place = true;
      this.style.backgroundColor = playerColor;
      console.log("select 1");
    } else if (selectPieceSize == "M" && countPiecesM < 3) {
      countPiecesM += 1;
      place = true;
      this.style.backgroundColor = playerColor;
      console.log("select 2");
    } else if (selectPieceSize == "S" && countPiecesS < 3) {
      countPiecesS += 1;
      place = true;
      this.style.backgroundColor = playerColor;
      console.log("select 1");
    } else {
      alert("Your " + selectPieceSize + " pieces is empty.");
    }
    event.stopPropagation();
    // piece.push(pieceSelect);
    // checkWinner()

    // Piece in player's color turn to grey == player deselect this piece
  } else if (event.currentTarget.style.backgroundColor == playerColor) {
    if (selectPieceSize == "L") {
      countPiecesL -= 1;
      place = false;
      this.style.backgroundColor = bgPiecesColor;
      // selectPlayerPiece(selectPieceSize);
      console.log("deselect 1");
    } else if (selectPieceSize == "M") {
      countPiecesM -= 1;
      place = false;
      this.style.backgroundColor = bgPiecesColor;
      // selectPlayerPiece(selectPieceSize);
      console.log("deselect 2");
    } else if (selectPieceSize == "S") {
      countPiecesS -= 1;
      place = false;
      this.style.backgroundColor = bgPiecesColor;
      // selectPlayerPiece(selectPieceSize);
      console.log("deselect 3");
    }
    // piece = piece.filter((item) => item !== pieceSelect);
    event.stopPropagation();
  }
}
