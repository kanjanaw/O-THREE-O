btnDone = document.getElementById("btn-done")
btnDone.addEventListener("click", pushPieceToFirebase);

var turn = 0;

function pushPieceToFirebase() {
    var user = firebase.auth().currentUser;

    if (place){

        ref.child(roomCode).child('gameplay').child(turn).set({
            playerId: playerId,
            playerName: user.displayName,
            color: playerColor,
            piece: pieceSelect,
          })

        alert("done success")
        turn++;
        place = false

    } else {
        alert('plz place your piece')
    }
}



ref.child(roomCode).child('gameplay').on('value', (snapshot) => {
    showPiece(snapshot)
})


function showPiece(snapshot){

    snapshot.forEach((data) => {
        turn = data.key
        const piece = data.val().piece
        const color = data.val().color

        document.getElementById(piece).style.backgroundColor = color
        document.getElementById(piece).removeEventListener("click", selectAndDeselect)

    })
}


