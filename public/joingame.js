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
    let playerRef = firebase.database().ref(`players/${user.uid}`)

    playerColor = setOfColor[color];
    indexSetColor = color;

    // update name and color in firebase
    playerRef.update({
        name: user.displayName,
        color: playerColor,
    })

    playerPieces.forEach((playerPiece) => {
        playerPiece.style.backgroundColor = setOfColor[color];
    })

    circlesColor.forEach((circleColor) => { circleColor.style.outline = "none"; })
    event.currentTarget.style.outline = "10px solid rgba(172, 172, 172, .6)";

}

const playerNames = document.querySelectorAll(".user-profile-name");

function setName() {
    const user = firebase.auth().currentUser
    if (user) {
        playerNames[indexSetColor].innerText = user.displayName
        playerNames[indexSetColor].style.opacity = 1
    } else {
        playerNames[indexSetColor].innerText = 'Empty'
        playerNames[indexSetColor].style.opacity = .3
    }
}

function joinGame() {
    const currentUser = firebase.auth().currentUser
    if (currentUser) {
        if (playerNames[indexSetColor].innerText == 'Empty') {
            circlesColor[indexSetColor].disabled = true
            setName()
        }
    }
}