firebase.auth().onAuthStateChanged((user) => {
  console.log("User: ", user);
});
const ref = firebase.database().ref("Game");

const bgPiecesColor = "rgb(220, 220, 220)"; // color must be in rgb(xxx, xxx, xxx) form only!
const setOfColor = [
  "rgb(109, 187, 255)",
  "rgb(25, 212, 184)",
  "rgb(255, 222, 89)",
  "rgb(255, 109, 109)",
];
var playerColor;

let piece = [];

const playerPieces = document.querySelectorAll(".player-pieces");
const circlesColor = document.querySelectorAll(".block-circle-color");

//set player color pieces
function setColor(color) {
  playerPieces.forEach((playerPiece) => {
    playerPiece.style.backgroundColor = setOfColor[color];
    playerColor = setOfColor[color];
  });
  circlesColor.forEach((circleColor) => {
    circleColor.style.outline = "none";
  });
  event.currentTarget.style.outline = "15px solid rgba(172, 172, 172, .6)";
}

const selectConItems = document.querySelectorAll(".select-color");
const deselectConItems = document.querySelectorAll(".deselect-color");

selectConItems.forEach((item) => (item.style.display = "none"));
deselectConItems.forEach((item) => (item.style.display = "block"));

//hide pick color page and jump to boardgame page
function goToBoard() {
  if (playerColor != undefined) {
    selectConItems.forEach((item) => (item.style.display = "block"));
    deselectConItems.forEach((item) => (item.style.display = "none"));
    const btnDone = document.querySelector("#btn-done");
    btnDone.addEventListener("click", done);
  } else {
    alert("plz pick your color");
  }
}

const bgPieces = document.querySelectorAll(".boardgame-pieces");
bgPieces.forEach((bgPiece) => {
  bgPiece.style.backgroundColor = bgPiecesColor;
  bgPiece.addEventListener("click", selectAndDeselect);
});

var selectPieceSize,
  countPiecesL = 0,
  countPiecesM = 0,
  countPiecesS = 0;

// player select & deselect on boardgame
function selectAndDeselect(event) {
  const pieceSelect = event.currentTarget.getAttribute("id");
  selectPieceSize = pieceSelect[pieceSelect.length - 3];

  // Piece in grey turn to player's color == player select this piece
  if (event.currentTarget.style.backgroundColor == bgPiecesColor) {
    if (selectPieceSize == "L" && countPiecesL < 3) {
      countPiecesL += 1;
      piece.push(pieceSelect);
      this.style.backgroundColor = playerColor;
      selectPlayerPiece(selectPieceSize);
    } else if (selectPieceSize == "M" && countPiecesM < 3) {
      countPiecesM += 1;
      piece.push(pieceSelect);
      this.style.backgroundColor = playerColor;
      selectPlayerPiece(selectPieceSize);
    } else if (selectPieceSize == "S" && countPiecesS < 3) {
      countPiecesS += 1;
      piece.push(pieceSelect);
      this.style.backgroundColor = playerColor;
      selectPlayerPiece(selectPieceSize);
    } else {
      alert("Your " + selectPieceSize + " pieces is empty.");
    }
    event.stopPropagation();
    // checkWinner()

    // Piece in player's color turn to grey == player deselect this piece
  } else if (event.currentTarget.style.backgroundColor == playerColor) {
    if (selectPieceSize == "L") {
      countPiecesL -= 1;
      piece = piece.filter((item) => item !== pieceSelect);
      this.style.backgroundColor = bgPiecesColor;
      selectPlayerPiece(selectPieceSize);
    } else if (selectPieceSize == "M") {
      countPiecesM -= 1;
      piece = piece.filter((item) => item !== pieceSelect);
      this.style.backgroundColor = bgPiecesColor;
      selectPlayerPiece(selectPieceSize);
    } else if (selectPieceSize == "S") {
      countPiecesS -= 1;
      piece = piece.filter((item) => item !== pieceSelect);
      this.style.backgroundColor = bgPiecesColor;
      selectPlayerPiece(selectPieceSize);
    }
    event.stopPropagation();
  }
}

ref.on("value", (snapshot) => {
  getGameInfo(snapshot);
});

function getGameInfo(snapshot) {
  snapshot.forEach((data) => {});
}

function done() {
  if (piece.length > 0) {
    if (piece.length > 1) {
      alert("Select only one piece!!!");
    } else {
      ref.child("player-1").push({
        chesse: piece.pop(),
      });
      alert("DONE SUCCESS");
    }
  } else {
    alert("plz select one piece");
  }
}

// change color pieces from player side
function selectPlayerPiece(size) {
  for (let i = 0; i < 9; i++) {
    const playerPiecesID = playerPieces[i].getAttribute("id");
    const playerPiecesSize = playerPiecesID[playerPiecesID.length - 3];
    // change player color to bg
    if (
      size == playerPiecesSize &&
      playerPieces[i].style.backgroundColor == playerColor &&
      event.currentTarget.style.backgroundColor == playerColor &&
      countPiecesL <= 3 &&
      countPiecesM <= 3 &&
      countPiecesS <= 3
    ) {
      playerPieces[i].style.backgroundColor = bgPiecesColor;
      break;
    }
    // change bg to player color
    else if (
      size == playerPiecesSize &&
      playerPieces[i].style.backgroundColor == bgPiecesColor &&
      event.currentTarget.style.backgroundColor == bgPiecesColor &&
      countPiecesL <= 3 &&
      countPiecesM <= 3 &&
      countPiecesS <= 3
    ) {
      playerPieces[i].style.backgroundColor = playerColor;
      break;
    } else if (countPiecesL > 3 || countPiecesM > 3 || countPiecesS > 3) {
      break;
    } else {
      continue;
    }
  }
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

///////////////////////////////FIX CODE////////////////////

// function checkWinner() {
//   const L11 = document.getElementById(".B-L11");
//   const L12 = document.getElementById(".B-L12");
//   const L13 = document.getElementById(".B-L13");
//   const L21 = document.getElementById(".B-L21");
//   const L22 = document.getElementById(".B-L22");
//   const L23 = document.getElementById(".B-L23");
//   const L31 = document.getElementById(".B-L31");
//   const L32 = document.getElementById(".B-L32");
//   const L33 = document.getElementById(".B-L33");
//   //Medium
//   const M11 = document.getElementById(".B-M11");
//   const M12 = document.getElementById(".B-M12");
//   const M13 = document.getElementById(".B-M13");
//   const M21 = document.getElementById(".B-M21");
//   const M22 = document.getElementById(".B-M22");
//   const M23 = document.getElementById(".B-M23");
//   const M31 = document.getElementById(".B-M31");
//   const M32 = document.getElementById(".B-M32");
//   const M33 = document.getElementById(".B-M33");
//   //Small
//   const S11 = document.getElementById(".B-S11");
//   const S12 = document.getElementById(".B-S12");
//   const S13 = document.getElementById(".B-S13");
//   const S21 = document.getElementById(".B-S21");
//   const S22 = document.getElementById(".B-S22");
//   const S23 = document.getElementById(".B-S23");
//   const S31 = document.getElementById(".B-S31");
//   const S32 = document.getElementById(".B-S32");
//   const S33 = document.getElementById(".B-S33");

//   //Same Size
//   if (countPiecesL == 3) {
//     //Horizontal
//     if ((L11.style.backgroundColor != "rgb(220, 220, 220)") && (L11 == L12) && (L12 == L13)) {
//       console.log("1")
//     }
//     else if ((L21.style.backgroundColor != "rgb(220, 220, 220)") && (L21 == L22) && (L22 == L23)) {
//       console.log("2")
//     }
//     else if ((L31.style.backgroundColor != "rgb(220, 220, 220)") && (L21 == L22) && (L22 == L23)) {
//       console.log("3")
//     }
//     //Vertical
//     else if ((L11.style.backgroundColor != "rgb(220, 220, 220)") && (L11 == L21) && (L21 == L31)) {
//       console.log("4")
//     }
//     else if ((L12.style.backgroundColor != "rgb(220, 220, 220)") && (L12 == L22) && (L22 == L32)) {
//       console.log("5")
//     }
//     else if ((L13.style.backgroundColor != "rgb(220, 220, 220)") && (L13 == L23) && (L23 == L33)) {
//       console.log("6")
//     }
//     //Cross
//     else if ((L11.style.backgroundColor != "rgb(220, 220, 220)") && (L11 == L22) && (L22 == L33)) {
//       console.log("7")
//     }
//     else if ((L13.style.backgroundColor != "rgb(220, 220, 220)") && (L13 == L22) && (L22 == L31)) {
//       console.log("8")
//     }

//   }

//   else if (countPiecesM == 3) {
//     //Medium
//     //Horizontal
//     if ((M11.style.backgroundColor != "rgb(220, 220, 220)") && (M11 == M12) && (M12 == M13)) {
//       console.log("9")
//     }
//     else if ((M21.style.backgroundColor != "rgb(220, 220, 220)") && (M21 == M22) && (M22 == M23)) {
//       console.log("10")
//     }
//     else if ((M31.style.backgroundColor != "rgb(220, 220, 220)") && (M21 == M22) && (M22 == M23)) {
//       console.log("11")
//     }
//     //Vertical
//     else if ((M11.style.backgroundColor != "rgb(220, 220, 220)") && (M11 == M21) && (M21 == M31)) {
//       console.log("12")
//     }
//     else if ((M12.style.backgroundColor != "rgb(220, 220, 220)") && (M12 == M22) && (M22 == M32)) {
//       console.log("13")
//     }
//     else if ((M13.style.backgroundColor != "rgb(220, 220, 220)") && (M13 == M23) && (M23 == M33)) {
//       console.log("14")
//     }
//     //Cross
//     else if ((M11.style.backgroundColor != "rgb(220, 220, 220)") && (M11 == M22) && (M22 == M33)) {
//       console.log("15")
//     }
//     else if ((M13.style.backgroundColor != "rgb(220, 220, 220)") && (M13 == M22) && (M22 == M31)) {
//       console.log("16")
//     }
//   }

//   else if (countPiecesS == 3) {
//     //Small
//     //Horizontal
//     if ((S11.style.backgroundColor != "rgb(220, 220, 220)") && (S11 == S12) && (S12 == S13)) {
//       console.log("17")
//     }
//     else if ((S21.style.backgroundColor != "rgb(220, 220, 220)") && (S21 == S22) && (S22 == S23)) {
//       console.log("18")
//     }
//     else if ((S31.style.backgroundColor != "rgb(220, 220, 220)") && (S21 == S22) && (S22 == S23)) {
//       console.log("19")
//     }
//     //Vertical
//     else if ((S11.style.backgroundColor != "rgb(220, 220, 220)") && (S11 == S21) && (S21 == S31)) {
//       console.log("20")
//     }
//     else if ((S12.style.backgroundColor != "rgb(220, 220, 220)") && (S12 == S22) && (S22 == S32)) {
//       console.log("21")
//     }
//     else if ((S13.style.backgroundColor != "rgb(220, 220, 220)") && (S13 == S23) && (S23 == S33)) {
//       console.log("22")
//     }
//     //Cross
//     else if ((S11.style.backgroundColor != "rgb(220, 220, 220)") && (S11 == S22) && (S22 == S33)) {
//       console.log("23")
//     }
//     else if ((S13.style.backgroundColor != "rgb(220, 220, 220)") && (S13 == S22) && (S22 == S31)) {
//       console.log("24")
//     }
//   }

//   //Order + Same Space
//   else if ((countPiecesL >= 1) && (countPiecesM >= 1) && (countPiecesS >= 1)) {
//     //Same Space
//     if ((L11.style.backgroundColor != "rgb(220, 220, 220)") && (L11 == M11) && (M11 == S11)) {
//       console.log("25")
//     }
//     else if ((L12.style.backgroundColor != "rgb(220, 220, 220)") && (L12 == M12) && (M12 == S12)) {
//       console.log("26")
//     }
//     else if ((L13.style.backgroundColor != "rgb(220, 220, 220)") && (L13 == M13) && (M13 == S13)) {
//       console.log("27")
//     }
//     else if ((L21.style.backgroundColor != "rgb(220, 220, 220)") && (L21 == M21) && (M21 == S21)) {
//       console.log("28")
//     }
//     else if ((L22.style.backgroundColor != "rgb(220, 220, 220)") && (L22 == M22) && (M22 == S22)) {
//       console.log("29")
//     }
//     else if ((L23.style.backgroundColor != "rgb(220, 220, 220)") && (L23 == M23) && (M23 == S23)) {
//       console.log("30")
//     }
//     else if ((L31.style.backgroundColor != "rgb(220, 220, 220)") && (L31 == M31) && (M31 == S31)) {
//       console.log("31")
//     }
//     else if ((L32.style.backgroundColor != "rgb(220, 220, 220)") && (L32 == M32) && (M32 == S32)) {
//       console.log("32")
//     }
//     else if ((L33.style.backgroundColor != "rgb(220, 220, 220)") && (L33 == M33) && (M33 == S33)) {

//     }

//     //Order
//     //Horizontal
//     //S-L
//     else if ((S11.style.backgroundColor != "rgb(220, 220, 220)") && (S11 == M12) && (M12 == L13)) {
//       console.log("33")
//     }
//     else if ((S21.style.backgroundColor != "rgb(220, 220, 220)") && (S21 == M22) && (M22 == L23)) {
//       console.log("34")
//     }
//     else if ((S31.style.backgroundColor != "rgb(220, 220, 220)") && (S31 == M32) && (M22 == L33)) {
//       console.log("35")
//     }
//     //L-S
//     else if ((L11.style.backgroundColor != "rgb(220, 220, 220)") && (L11 == M12) && (M12 == S13)) {
//       console.log("36")
//     }
//     else if ((L21.style.backgroundColor != "rgb(220, 220, 220)") && (L21 == M22) && (M22 == S23)) {
//       console.log("37")
//     }
//     else if ((L31.style.backgroundColor != "rgb(220, 220, 220)") && (L31 == M32) && (M22 == S33)) {
//       console.log("38")
//     }

//     //Vertical
//     //S-L
//     else if ((S11.style.backgroundColor != "rgb(220, 220, 220)") && (S11 == M21) && (M21 == L31)) {
//       console.log("39")
//     }
//     else if ((S12.style.backgroundColor != "rgb(220, 220, 220)") && (S12 == M22) && (M22 == L32)) {
//       console.log("40")
//     }
//     else if ((S13.style.backgroundColor != "rgb(220, 220, 220)") && (S13 == M23) && (M23 == L33)) {
//       console.log("41")
//     }
//     //L-S
//     else if ((L11.style.backgroundColor != "rgb(220, 220, 220)") && (L11 == M21) && (M21 == S31)) {
//       console.log("42")
//     }
//     else if ((L12.style.backgroundColor != "rgb(220, 220, 220)") && (L12 == M22) && (M22 == S32)) {
//       console.log("43")
//     }
//     else if ((L13.style.backgroundColor != "rgb(220, 220, 220)") && (L13 == M23) && (M23 == S33)) {
//       console.log("44")
//     }

//     //Cross
//     //S-L
//     else if ((S11.style.backgroundColor != "rgb(220, 220, 220)") && (S11 == M22) && (M22 == L33)) {
//       console.log("45")
//     }
//     else if ((S13.style.backgroundColor != "rgb(220, 220, 220)") && (S13 == M22) && (M22 == L31)) {
//       console.log("46")
//     }
//     //L-S
//     else if ((L11.style.backgroundColor != "rgb(220, 220, 220)") && (L11 == M22) && (M22 == S33)) {
//       console.log("47")
//     }
//     else if ((L13.style.backgroundColor != "rgb(220, 220, 220)") && (L13 == M22) && (M22 == S31)) {
//       console.log("48")
//     }
//   }
// }

// function WinFix() {

//   //Large
//   const L11 = document.getElementById(".B-L11");
//   const L12 = document.getElementById(".B-L12");
//   const L13 = document.getElementById(".B-L13");
//   const L21 = document.getElementById(".B-L21");
//   const L22 = document.getElementById(".B-L22");
//   const L23 = document.getElementById(".B-L23");
//   const L31 = document.getElementById(".B-L31");
//   const L32 = document.getElementById(".B-L32");
//   const L33 = document.getElementById(".B-L33");
//   //Medium
//   const M11 = document.getElementById(".B-M11");
//   const M12 = document.getElementById(".B-M12");
//   const M13 = document.getElementById(".B-M13");
//   const M21 = document.getElementById(".B-M21");
//   const M22 = document.getElementById(".B-M22");
//   const M23 = document.getElementById(".B-M23");
//   const M31 = document.getElementById(".B-M31");
//   const M32 = document.getElementById(".B-M32");
//   const M33 = document.getElementById(".B-M33");
//   //Small
//   const S11 = document.getElementById(".B-S11");
//   const S12 = document.getElementById(".B-S12");
//   const S13 = document.getElementById(".B-S13");
//   const S21 = document.getElementById(".B-S21");
//   const S22 = document.getElementById(".B-S22");
//   const S23 = document.getElementById(".B-S23");
//   const S31 = document.getElementById(".B-S31");
//   const S32 = document.getElementById(".B-S32");
//   const S33 = document.getElementById(".B-S33");

//   //Same Size
//   //Large
//   //Horizontal
//   if ((L11.style.backgroundColor != "rgb(220, 220, 220)") && (L11 == L12) && (L12 == L13)) {
//     console.log("1")
//   }
//   else if ((L21.style.backgroundColor != "rgb(220, 220, 220)") && (L21 == L22) && (L22 == L23)) {
//     console.log("2")
//   }
//   else if ((L31.style.backgroundColor != "rgb(220, 220, 220)") && (L21 == L22) && (L22 == L23)) {
//     console.log("3")
//   }
//   //Vertical
//   else if ((L11.style.backgroundColor != "rgb(220, 220, 220)") && (L11 == L21) && (L21 == L31)) {
//     console.log("4")
//   }
//   else if ((L12.style.backgroundColor != "rgb(220, 220, 220)") && (L12 == L22) && (L22 == L32)) {
//     console.log("5")
//   }
//   else if ((L13.style.backgroundColor != "rgb(220, 220, 220)") && (L13 == L23) && (L23 == L33)) {
//     console.log("6")
//   }
//   //Cross
//   else if ((L11.style.backgroundColor != "rgb(220, 220, 220)") && (L11 == L22) && (L22 == L33)) {
//     console.log("7")
//   }
//   else if ((L13.style.backgroundColor != "rgb(220, 220, 220)") && (L13 == L22) && (L22 == L31)) {
//     console.log("8")
//   }

//   //Medium
//   //Horizontal
//   else if ((M11.style.backgroundColor != "rgb(220, 220, 220)") && (M11 == M12) && (M12 == M13)) {
//     console.log("9")
//   }
//   else if ((M21.style.backgroundColor != "rgb(220, 220, 220)") && (M21 == M22) && (M22 == M23)) {
//     console.log("10")
//   }
//   else if ((M31.style.backgroundColor != "rgb(220, 220, 220)") && (M21 == M22) && (M22 == M23)) {
//     console.log("11")
//   }
//   //Vertical
//   else if ((M11.style.backgroundColor != "rgb(220, 220, 220)") && (M11 == M21) && (M21 == M31)) {
//     console.log("12")
//   }
//   else if ((M12.style.backgroundColor != "rgb(220, 220, 220)") && (M12 == M22) && (M22 == M32)) {
//     console.log("13")
//   }
//   else if ((M13.style.backgroundColor != "rgb(220, 220, 220)") && (M13 == M23) && (M23 == M33)) {
//     console.log("14")
//   }
//   //Cross
//   else if ((M11.style.backgroundColor != "rgb(220, 220, 220)") && (M11 == M22) && (M22 == M33)) {
//     console.log("15")
//   }
//   else if ((M13.style.backgroundColor != "rgb(220, 220, 220)") && (M13 == M22) && (M22 == M31)) {
//     console.log("16")
//   }

//   //Small
//   //Horizontal
//   else if ((S11.style.backgroundColor != "rgb(220, 220, 220)") && (S11 == S12) && (S12 == S13)) {

//   }
//   else if ((S21.style.backgroundColor != "rgb(220, 220, 220)") && (S21 == S22) && (S22 == S23)) {

//   }
//   else if ((S31.style.backgroundColor != "rgb(220, 220, 220)") && (S21 == S22) && (S22 == S23)) {

//   }
//   //Vertical
//   else if ((S11.style.backgroundColor != "rgb(220, 220, 220)") && (S11 == S21) && (S21 == S31)) {

//   }
//   else if ((S12.style.backgroundColor != "rgb(220, 220, 220)") && (S12 == S22) && (S22 == S32)) {

//   }
//   else if ((S13.style.backgroundColor != "rgb(220, 220, 220)") && (S13 == S23) && (S23 == S33)) {

//   }
//   //Cross
//   else if ((S11.style.backgroundColor != "rgb(220, 220, 220)") && (S11 == S22) && (S22 == S33)) {

//   }
//   else if ((S13.style.backgroundColor != "rgb(220, 220, 220)") && (S13 == S22) && (S22 == S31)) {

//   }

//   //Same Space
//   else if ((L11.style.backgroundColor != "rgb(220, 220, 220)") && (L11 == M11) && (M11 == S11)) {

//   }
//   else if ((L12.style.backgroundColor != "rgb(220, 220, 220)") && (L12 == M12) && (M12 == S12)) {

//   }
//   else if ((L13.style.backgroundColor != "rgb(220, 220, 220)") && (L13 == M13) && (M13 == S13)) {

//   }
//   else if ((L21.style.backgroundColor != "rgb(220, 220, 220)") && (L21 == M21) && (M21 == S21)) {

//   }
//   else if ((L22.style.backgroundColor != "rgb(220, 220, 220)") && (L22 == M22) && (M22 == S22)) {

//   }
//   else if ((L23.style.backgroundColor != "rgb(220, 220, 220)") && (L23 == M23) && (M23 == S23)) {

//   }
//   else if ((L31.style.backgroundColor != "rgb(220, 220, 220)") && (L31 == M31) && (M31 == S31)) {

//   }
//   else if ((L32.style.backgroundColor != "rgb(220, 220, 220)") && (L32 == M32) && (M32 == S32)) {

//   }
//   else if ((L33.style.backgroundColor != "rgb(220, 220, 220)") && (L33 == M33) && (M33 == S33)) {

//   }

//   //Order
//   //Horizontal
//   //S-L
//   else if ((S11.style.backgroundColor != "rgb(220, 220, 220)") && (S11 == M12) && (M12 == L13)) {

//   }
//   else if ((S21.style.backgroundColor != "rgb(220, 220, 220)") && (S21 == M22) && (M22 == L23)) {

//   }
//   else if ((S31.style.backgroundColor != "rgb(220, 220, 220)") && (S31 == M32) && (M22 == L33)) {

//   }
//   //L-S
//   else if ((L11.style.backgroundColor != "rgb(220, 220, 220)") && (L11 == M12) && (M12 == S13)) {

//   }
//   else if ((L21.style.backgroundColor != "rgb(220, 220, 220)") && (L21 == M22) && (M22 == S23)) {

//   }
//   else if ((L31.style.backgroundColor != "rgb(220, 220, 220)") && (L31 == M32) && (M22 == S33)) {

//   }

//   //Vertical
//   //S-L
//   else if ((S11.style.backgroundColor != "rgb(220, 220, 220)") && (S11 == M21) && (M21 == L31)) {

//   }
//   else if ((S12.style.backgroundColor != "rgb(220, 220, 220)") && (S12 == M22) && (M22 == L32)) {

//   }
//   else if ((S13.style.backgroundColor != "rgb(220, 220, 220)") && (S13 == M23) && (M23 == L33)) {

//   }
//   //L-S
//   else if ((L11.style.backgroundColor != "rgb(220, 220, 220)") && (L11 == M21) && (M21 == S31)) {

//   }
//   else if ((L12.style.backgroundColor != "rgb(220, 220, 220)") && (L12 == M22) && (M22 == S32)) {

//   }
//   else if ((L13.style.backgroundColor != "rgb(220, 220, 220)") && (L13 == M23) && (M23 == S33)) {

//   }

//   //Cross
//   //S-L
//   else if ((S11.style.backgroundColor != "rgb(220, 220, 220)") && (S11 == M22) && (M22 == L33)) {

//   }
//   else if ((S13.style.backgroundColor != "rgb(220, 220, 220)") && (S13 == M22) && (M22 == L31)) {

//   }
//   //L-S
//   else if ((L11.style.backgroundColor != "rgb(220, 220, 220)") && (L11 == M22) && (M22 == S33)) {

//   }
//   else if ((L13.style.backgroundColor != "rgb(220, 220, 220)") && (L13 == M22) && (M22 == S31)) {

//   }
// }
