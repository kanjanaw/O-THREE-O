btnDone = document.getElementById("btn-done")
btnDone.addEventListener("click", pushPieceToFirebase);

var turn = 1;
var roomRef = firebase.database().ref('game/room')

function pushPieceToFirebase() {
    var user = firebase.auth().currentUser;

    if (place){

        roomRef.push({
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


// const pieceId = document.getElementById(gameRef.piece)
// console.log(pieceId)

function getPieceFromFirebase() {
    roomRef.on('value', (snapshot) => {
        showPiece(snapshot)
    })
}

function showPiece(snapshot){
    snapshot.forEach((data) => {
        const piece = data.val().piece
        const color = data.val().color

        document.getElementById(piece).style.backgroundColor = color
        document.getElementById(piece).removeEventListener("click", selectAndDeselect)

        
    })
}


