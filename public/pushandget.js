btnDone = document.getElementById("btn-done")
btnDone.addEventListener("click", pushPieceToFirebase);


function pushPieceToFirebase() {
    var user = firebase.auth().currentUser;

    if (place){

        ref.child(roomCode).child('gameplay').push({
            playerId: playerId,
            playerName: user.displayName,
            color: playerColor,
            piece: pieceSelect,
          })

        alert("done success")
        place = false
        checkWinner()
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


