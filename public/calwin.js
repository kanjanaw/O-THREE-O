var colorWin = "rgb(220, 220, 220)";

function checkWinner() {
    // const pieces = document.getElementsByClassName("boardgame-pieces")

    const L11 = document.getElementById("L11");
    const L12 = document.getElementById("L12");
    const L13 = document.getElementById("L13");
    const L21 = document.getElementById("L21");
    const L22 = document.getElementById("L22");
    const L23 = document.getElementById("L23");
    const L31 = document.getElementById("L31");
    const L32 = document.getElementById("L32");
    const L33 = document.getElementById("L33");


    //Medium
    const M11 = document.getElementById("M11");
    const M12 = document.getElementById("M12");
    const M13 = document.getElementById("M13");
    const M21 = document.getElementById("M21");
    const M22 = document.getElementById("M22");
    const M23 = document.getElementById("M23");
    const M31 = document.getElementById("M31");
    const M32 = document.getElementById("M32");
    const M33 = document.getElementById("M33");

    //Small
    const S11 = document.getElementById("S11");
    const S12 = document.getElementById("S12");
    const S13 = document.getElementById("S13");
    const S21 = document.getElementById("S21");
    const S22 = document.getElementById("S22");
    const S23 = document.getElementById("S23");
    const S31 = document.getElementById("S31");
    const S32 = document.getElementById("S32");
    const S33 = document.getElementById("S33");

  

    //Same Size
//   if (countPiecesL == 3) {
    //Horizontal
    if ((L11.style.backgroundColor != "rgb(220, 220, 220)") && (L11.style.backgroundColor == L12.style.backgroundColor) && (L12.style.backgroundColor == L13.style.backgroundColor)) {
        colorWin = L13.style.backgroundColor
        alertWinner()
    }
    else if ((L21.style.backgroundColor != "rgb(220, 220, 220)") && (L21.style.backgroundColor == L22.style.backgroundColor) && (L22.style.backgroundColor == L23.style.backgroundColor)) {
        colorWin = L23.style.backgroundColor
        alertWinner()
    }
    else if ((L31.style.backgroundColor != "rgb(220, 220, 220)") && (L31.style.backgroundColor == L32.style.backgroundColor) && (L32.style.backgroundColor == L33.style.backgroundColor)) {
        colorWin = L33.style.backgroundColor
        alertWinner()
    }

    // //Vertical
    else if ((L11.style.backgroundColor != "rgb(220, 220, 220)") && (L11.style.backgroundColor == L21.style.backgroundColor) && (L21.style.backgroundColor == L31.style.backgroundColor)) {
        colorWin = L31.style.backgroundColor
        alertWinner()
    }
    else if ((L12.style.backgroundColor != "rgb(220, 220, 220)") && (L12.style.backgroundColor == L22.style.backgroundColor) && (L22.style.backgroundColor == L32.style.backgroundColor)) {
        colorWin = L32.style.backgroundColor
        alertWinner()
    }

    else if ((L13.style.backgroundColor != "rgb(220, 220, 220)") && (L13.style.backgroundColor == L23.style.backgroundColor) && (L23.style.backgroundColor == L33.style.backgroundColor)) {
        colorWin = L33.style.backgroundColor
        alertWinner()
    }

    //Cross
    else if ((L11.style.backgroundColor != "rgb(220, 220, 220)") && (L11.style.backgroundColor == L22.style.backgroundColor) && (L22.style.backgroundColor == L33.style.backgroundColor)) {
        colorWin = L33.style.backgroundColor
        alertWinner()
    }
    else if ((L13.style.backgroundColor != "rgb(220, 220, 220)") && (L13.style.backgroundColor == L22.style.backgroundColor) && (L22.style.backgroundColor == L31.style.backgroundColor)) {
        colorWin = L31.style.backgroundColor
        alertWinner()
    }
//   }

//   else if (countPiecesM == 3) {
    //Medium Horizontal
    else if ((M11.style.backgroundColor != "rgb(220, 220, 220)") && (M11.style.backgroundColor == M12.style.backgroundColor) && (M12.style.backgroundColor == M13.style.backgroundColor)) {
        colorWin = M13.style.backgroundColor
        alertWinner()
    }
    else if ((M21.style.backgroundColor != "rgb(220, 220, 220)") && (M21.style.backgroundColor == M22.style.backgroundColor) && (M22.style.backgroundColor == M23.style.backgroundColor)) {
        colorWin = M23.style.backgroundColor
        alertWinner()
    }
    else if ((M31.style.backgroundColor != "rgb(220, 220, 220)") && (M21.style.backgroundColor == M22.style.backgroundColor) && (M22.style.backgroundColor == M23.style.backgroundColor)) {
        colorWin = M23.style.backgroundColor
        alertWinner()
    }

    //Vertical
    else if ((M11.style.backgroundColor != "rgb(220, 220, 220)") && (M11.style.backgroundColor == M21.style.backgroundColor) && (M21.style.backgroundColor == M31.style.backgroundColor)) {
        colorWin = M31.style.backgroundColor
        alertWinner()
    }
    else if ((M12.style.backgroundColor != "rgb(220, 220, 220)") && (M12.style.backgroundColor == M22.style.backgroundColor) && (M22.style.backgroundColor == M32.style.backgroundColor)) {
        colorWin = M32.style.backgroundColor
        alertWinner()
    }
    else if ((M13.style.backgroundColor != "rgb(220, 220, 220)") && (M13.style.backgroundColor == M23.style.backgroundColor) && (M23.style.backgroundColor == M33.style.backgroundColor)) {
        colorWin = M33.style.backgroundColor
        alertWinner()
    }

    //Cross
    else if ((M11.style.backgroundColor != "rgb(220, 220, 220)") && (M11.style.backgroundColor == M22.style.backgroundColor) && (M22.style.backgroundColor == M33.style.backgroundColor)) {
        colorWin = M33.style.backgroundColor
        alertWinner()
    }
    else if ((M13.style.backgroundColor != "rgb(220, 220, 220)") && (M13.style.backgroundColor == M22.style.backgroundColor) && (M22.style.backgroundColor == M31.style.backgroundColor)) {
        colorWin = M31.style.backgroundColor
        alertWinner()
    }
//   }

//   else if (countPiecesS == 3) {
    //Small Horizontal
   else  if ((S11.style.backgroundColor != "rgb(220, 220, 220)") && (S11.style.backgroundColor == S12.style.backgroundColor) && (S12.style.backgroundColor == S13.style.backgroundColor)) {
        colorWin = S13.style.backgroundColor
        alertWinner()
    }
    else if ((S21.style.backgroundColor != "rgb(220, 220, 220)") && (S21.style.backgroundColor == S22.style.backgroundColor) && (S22.style.backgroundColor == S23.style.backgroundColor)) {
        colorWin = S21.style.backgroundColor
        alertWinner()
    }
    else if ((S31.style.backgroundColor != "rgb(220, 220, 220)") && (S21.style.backgroundColor == S22.style.backgroundColor) && (S22.style.backgroundColor == S23.style.backgroundColor)) {
        colorWin = S23.style.backgroundColor
        alertWinner()
    }

//     //Vertical
    else if ((S11.style.backgroundColor != "rgb(220, 220, 220)") && (S11.style.backgroundColor == S21.style.backgroundColor) && (S21.style.backgroundColor == S31.style.backgroundColor)) {
        colorWin = S11.style.backgroundColor
        alertWinner()
    }
    else if ((S12.style.backgroundColor != "rgb(220, 220, 220)") && (S12.style.backgroundColor == S22.style.backgroundColor) && (S22.style.backgroundColor == S32.style.backgroundColor)) {
        colorWin = S12.style.backgroundColor
        alertWinner()
    }
    else if ((S13.style.backgroundColor != "rgb(220, 220, 220)") && (S13.style.backgroundColor == S23.style.backgroundColor) && (S23.style.backgroundColor == S33.style.backgroundColor)) {
        colorWin = S33.style.backgroundColor
        alertWinner()
    }

//     //Cross
    else if ((S11.style.backgroundColor != "rgb(220, 220, 220)") && (S11.style.backgroundColor == S22.style.backgroundColor) && (S22.style.backgroundColor == S33.style.backgroundColor)) {
        colorWin = S33.style.backgroundColor
        alertWinner()
    }
    else if ((S13.style.backgroundColor != "rgb(220, 220, 220)") && (S13.style.backgroundColor == S22.style.backgroundColor) && (S22.style.backgroundColor == S31.style.backgroundColor)) {
        colorWin = S13.style.backgroundColor
        alertWinner()
    }
// //   }

//   //Order + Same Space
// //   else if ((countPiecesL >= 1) && (countPiecesM >= 1) && (countPiecesS >= 1)) {
//     //Same Space
    else if ((L11.style.backgroundColor != "rgb(220, 220, 220)") && (L11.style.backgroundColor == M11.style.backgroundColor) && (M11.style.backgroundColor == S11.style.backgroundColor)) {
        colorWin = S11.style.backgroundColor
        alertWinner()
    }
    else if ((L12.style.backgroundColor != "rgb(220, 220, 220)") && (L12.style.backgroundColor == M12.style.backgroundColor) && (M12.style.backgroundColor == S12.style.backgroundColor)) {
        colorWin = S12.style.backgroundColor
        alertWinner()
    }
    else if ((L13.style.backgroundColor != "rgb(220, 220, 220)") && (L13.style.backgroundColor == M13.style.backgroundColor) && (M13.style.backgroundColor == S13.style.backgroundColor)) {
        colorWin = S13.style.backgroundColor
        alertWinner()
    }
    else if ((L21.style.backgroundColor != "rgb(220, 220, 220)") && (L21.style.backgroundColor == M21.style.backgroundColor) && (M21.style.backgroundColor == S21.style.backgroundColor)) {
        colorWin = S21.style.backgroundColor
        alertWinner()
    }
    else if ((L22.style.backgroundColor != "rgb(220, 220, 220)") && (L22.style.backgroundColor == M22.style.backgroundColor) && (M22.style.backgroundColor == S22.style.backgroundColor)) {
        colorWin = S22.style.backgroundColor
        alertWinner()
    }
    else if ((L23.style.backgroundColor != "rgb(220, 220, 220)") && (L23.style.backgroundColor == M23.style.backgroundColor) && (M23.style.backgroundColor == S23.style.backgroundColor)) {
        colorWin = S23.style.backgroundColor
        alertWinner()
    }
    else if ((L31.style.backgroundColor != "rgb(220, 220, 220)") && (L31.style.backgroundColor == M31.style.backgroundColor) && (M31.style.backgroundColor == S31.style.backgroundColor)) {
        colorWin = S31.style.backgroundColor
        alertWinner()
    }
    else if ((L32.style.backgroundColor != "rgb(220, 220, 220)") && (L32.style.backgroundColor == M32.style.backgroundColor) && (M32.style.backgroundColor == S32.style.backgroundColor)) {
        colorWin = S32.style.backgroundColor
        alertWinner()
    }
    else if ((L33.style.backgroundColor != "rgb(220, 220, 220)") && (L33.style.backgroundColor == M33.style.backgroundColor) && (M33.style.backgroundColor == S33.style.backgroundColor)) {
        colorWin = S33.style.backgroundColor
        alertWinner()
    }

//     //Order Horizontal S-L
    else if ((S11.style.backgroundColor != "rgb(220, 220, 220)") && (S11.style.backgroundColor == M12.style.backgroundColor) && (M12.style.backgroundColor == L13.style.backgroundColor)) {
        colorWin = S11.style.backgroundColor
        alertWinner()
    }
    else if ((S21.style.backgroundColor != "rgb(220, 220, 220)") && (S21.style.backgroundColor == M22.style.backgroundColor) && (M22.style.backgroundColor == L23.style.backgroundColor)) {
        colorWin = S21.style.backgroundColor
        alertWinner()
    }
    else if ((S31.style.backgroundColor != "rgb(220, 220, 220)") && (S31.style.backgroundColor == M32.style.backgroundColor) && (M22.style.backgroundColor == L33.style.backgroundColor)) {
        colorWin = S31.style.backgroundColor
        alertWinner()
    }

//     //L-S
    else if ((L11.style.backgroundColor != "rgb(220, 220, 220)") && (L11.style.backgroundColor == M12.style.backgroundColor) && (M12.style.backgroundColor == S13.style.backgroundColor)) {
        colorWin = S13.style.backgroundColor
        alertWinner()
    }
    else if ((L21.style.backgroundColor != "rgb(220, 220, 220)") && (L21.style.backgroundColor == M22.style.backgroundColor) && (M22.style.backgroundColor == S23.style.backgroundColor)) {
        colorWin = S23.style.backgroundColor
        alertWinner()
    }
    else if ((L31.style.backgroundColor != "rgb(220, 220, 220)") && (L31.style.backgroundColor == M32.style.backgroundColor) && (M22.style.backgroundColor == S33.style.backgroundColor)) {
        colorWin = S33.style.backgroundColor
        alertWinner()
    }

//     //Vertical S-L
    else if ((S11.style.backgroundColor != "rgb(220, 220, 220)") && (S11.style.backgroundColor == M21.style.backgroundColor) && (M21.style.backgroundColor == L31.style.backgroundColor)) {
        colorWin = S11.style.backgroundColor
        alertWinner()
    }
    else if ((S12.style.backgroundColor != "rgb(220, 220, 220)") && (S12.style.backgroundColor == M22.style.backgroundColor) && (M22.style.backgroundColor == L32.style.backgroundColor)) {
        colorWin = S12.style.backgroundColor
        alertWinner()
    }
    else if ((S13.style.backgroundColor != "rgb(220, 220, 220)") && (S13.style.backgroundColor == M23.style.backgroundColor) && (M23.style.backgroundColor == L33.style.backgroundColor)) {
        colorWin = S13.style.backgroundColor
        alertWinner()
    }

//     //L-S
    else if ((L11.style.backgroundColor != "rgb(220, 220, 220)") && (L11.style.backgroundColor == M21.style.backgroundColor) && (M21.style.backgroundColor == S31.style.backgroundColor)) {
        colorWin = S31.style.backgroundColor
        alertWinner()
    }
    else if ((L12.style.backgroundColor != "rgb(220, 220, 220)") && (L12.style.backgroundColor == M22.style.backgroundColor) && (M22.style.backgroundColor == S32.style.backgroundColor)) {
        colorWin = S32.style.backgroundColor
        alertWinner()
    }
    else if ((L13.style.backgroundColor != "rgb(220, 220, 220)") && (L13.style.backgroundColor == M23.style.backgroundColor) && (M23.style.backgroundColor == S33.style.backgroundColor)) {
        colorWin = S33.style.backgroundColor
        alertWinner()
    }

    //Cross S-L
    else if ((S11.style.backgroundColor != "rgb(220, 220, 220)") && (S11.style.backgroundColor == M22.style.backgroundColor) && (M22.style.backgroundColor == L33.style.backgroundColor)) {
        colorWin = S11.style.backgroundColor
        alertWinner()
    }
    else if ((S13.style.backgroundColor != "rgb(220, 220, 220)") && (S13.style.backgroundColor == M22.style.backgroundColor) && (M22.style.backgroundColor == L31.style.backgroundColor)) {
        colorWin = S13.style.backgroundColor
        alertWinner()
    }

//     //L-S
    else if ((L11.style.backgroundColor != "rgb(220, 220, 220)") && (L11.style.backgroundColor == M22.style.backgroundColor) && (M22.style.backgroundColor == S33.style.backgroundColor)) {
        colorWin = S33.style.backgroundColor
        alertWinner()
    }
    else if ((L13.style.backgroundColor != "rgb(220, 220, 220)") && (L13.style.backgroundColor == M22.style.backgroundColor) && (M22.style.backgroundColor == S31.style.backgroundColor)) {
        colorWin = S31.style.backgroundColor
        alertWinner()
    }
}


function alertWinner(){
    ref.child(roomCode).child('players').on('value', (snapshot) => {
        snapshot.forEach((data) => {
            const id = data.key
            const name = data.val().playerName
            const color = data.val().color
            if(colorWin == color){
                leaderBoard(name, color)
            }else{
                playerList(name, color)
            }
        })
    })
    ref.child(roomCode).update({
        gameState : "not start"
    })
}

const leaderBoardName = document.getElementsByClassName('text-leaderboard')
var index = 2

function leaderBoard(name, color) {
    document.getElementById("overlay-board").style.display = "block";
    leaderBoardName[1].innerText = '👑 ' + name + ' 👑'
    leaderBoardName[1].style.color = color
}

function playerList(name, color){
    leaderBoardName[index].innerText = name
    leaderBoardName[index].style.color = color
    index++
}

function closeLeaderBoard() {
    document.getElementById("overlay-board").style.display = "none";
}

function quitGame(){
    closeLeaderBoard()
    if (firebase.auth().currentUser.isAnonymous == false) {
        firebase.auth().signOut()
      } else {
        anonyForm.reset()
      }
      location.reload(true)
      setupUI()
}