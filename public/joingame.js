const circlesColor = document.querySelectorAll(".block-circle-color");
const playerPieces = document.querySelectorAll(".player-pieces");

const bgPiecesColor = "rgb(220, 220, 220)"; // color must be in rgb(xxx, xxx, xxx) form only!
const setOfColor = [
    "rgb(109, 187, 255)",
    "rgb(25, 212, 184)",
    "rgb(255, 222, 89)",
    "rgb(255, 109, 109)",
];

circlesColor.forEach((circleColor) => { circleColor.style.outline = "none"; })
circlesColor.forEach((circleColor) => { circleColor.disabled = false; })

var playerColor, indexSetColor = 0

// function setColor(color) {
//     playerColor = setOfColor[color];
//     indexSetColor = color;
   
//     playerPieces.forEach((playerPiece) => {
//         playerPiece.style.backgroundColor = setOfColor[color];
//     })

//     circlesColor.forEach((circleColor) => { circleColor.style.outline = "none"; })
//     event.currentTarget.style.outline = "10px solid rgba(172, 172, 172, .6)";

//     setName()

//     circlesColor.forEach((circleColor) => { circleColor.disabled = false; })
//     circlesColor[indexSetColor].disabled = true

//     pushPlayers(color, playerColor)
// }

function setColor(color) {
    playerColor = setOfColor[color];
    indexSetColor = color;
   
    playerPieces.forEach((playerPiece) => {
        playerPiece.style.backgroundColor = setOfColor[color];
    })

    circlesColor.forEach((circleColor) => { circleColor.disabled = false; })
    circlesColor[indexSetColor].disabled = true

    pushPlayers(color, playerColor)
}


function pushPlayers(indexSetColor, playerColor){
    var user = firebase.auth().currentUser;
    
    var playerRef = firebase.database().ref(`games-room/${roomCode}/players`)

     // update name and color in firebase
     playerRef.child(indexSetColor).set({
        playerId: user.uid,
        playerName: user.displayName,
        color: playerColor,
    })
}

const playerNames = document.querySelectorAll(".user-profile-name");
const playerNamesInGame = document.querySelectorAll(".user-profile-name-b");

var ref = firebase.database().ref(`games-room`);
ref.on("value", (snapshot) => {
  getGameInfo(snapshot);
});

function getGameInfo(snapshot) {
    let count = 0
    snapshot.forEach(function (roomSnapshot) {
    var key = roomSnapshot.key;
    if (key == roomCode) {
      ref
        .child(roomCode)
        .child("players")
        .once("value", (playerSnapshot) => {
            playerSnapshot.forEach((playerInfo) => {
                var color = playerInfo.key
                var name = playerInfo.val().playerName
                // console.log("color code : "+color)
                // console.log("name : "+ name);
                playerNames[color].innerText = name;
                playerNames[color].style.opacity = 1

                circlesColor[color].disabled = true
                circlesColor[color].style.outline = "10px solid rgba(172, 172, 172, .6)";

                playerNamesInGame[color].innerText = name;

                count++
              });  
        });
    }
  });
  if(count<4){
    document.getElementById("btn-start").disabled = true;
}else{
    document.getElementById("btn-start").disabled = false;
}
}

