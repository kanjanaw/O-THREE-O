const circlesColor = document.querySelectorAll(".block-circle-color");
const playerPieces = document.querySelectorAll(".player-pieces");

const bgPiecesColor = "rgb(220, 220, 220)"; // color must be in rgb(xxx, xxx, xxx) form only!
const setOfColor = [
    "rgb(109, 187, 255)",
    "rgb(25, 212, 184)",
    "rgb(255, 222, 89)",
    "rgb(255, 109, 109)",
];

var playerColor, indexSetColor

function setColor(color) {
    var user = firebase.auth().currentUser;
    var playerRef = firebase.database().ref(`games-room/${roomCode}/players`)

    playerColor = setOfColor[color];
    indexSetColor = color;

    // update name and color in firebase
    playerRef.child(indexSetColor).update({
        playerId: user.uid,
        playerName: user.displayName,
        color: playerColor,
    })

    playerPieces.forEach((playerPiece) => {
        playerPiece.style.backgroundColor = setOfColor[color];
    })

    circlesColor.forEach((circleColor) => { circleColor.style.outline = "none"; })
    event.currentTarget.style.outline = "10px solid rgba(172, 172, 172, .6)";

    setName()

    circlesColor.forEach((circleColor) => { circleColor.disabled = false; })
    circlesColor[indexSetColor].disabled = true
}

const playerNames = document.querySelectorAll(".user-profile-name");

function setName() {
    const user = firebase.auth().currentUser

    for (let i=0; i<4; i++){
        if (i == indexSetColor){
            playerNames[i].innerText = user.displayName
            playerNames[i].style.opacity = 1
            // playerReady++
            // console.log(playerReady)
        }else{
            playerNames[i].innerText = 'Waiting for player...'
            playerNames[i].style.opacity = .3
        }
    }

}

var ref = firebase.database().ref(`games-room`)
ref.on("value", (snapshot) => {
    getGameInfo(snapshot);
    // joinRoom(snapshot);
});


function getGameInfo(snapshot) {

    var playerRef = firebase.database().ref(`games-room/${roomCode}/players`)
    
    
}

// function joinGame() {
//     const currentUser = firebase.auth().currentUser
//     if (currentUser) {
//         if (playerNames[indexSetColor].innerText == 'Empty') {
//             circlesColor[indexSetColor].disabled = true
//             setName()
//         }
//     }
// }

//check player 
var playerReady = 0;

// for (let i=0; i<4; i++){
//     if (playerNames[i].innerText != 'Waiting for player...'){
//         playerReady = playerReady
//     }else{
//         playerReady++
//     }
// }


if(playerReady == 4){
    document.getElementById("btn-start").disabled = false;
}else{
    document.getElementById("btn-start").disabled = true;
}
