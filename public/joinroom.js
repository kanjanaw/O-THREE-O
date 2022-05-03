const rowRoomSelect = document.getElementById("room-select")
const rowTextPlzJoin = document.getElementById("text-plz-join")

const joinForm = document.querySelector("#login-form");
const inputRoomCode = joinForm["input-room-code"].value;

joinForm.addEventListener("submit", joinRoom);

// join function
function joinRoom() {
    
    if(inputRoomCode != null){
        rowRoomSelect.style.display = 'inline-block'
    }
}

if(inputRoomCode == undefined){
    rowRoomSelect.style.display = 'none'
    rowTextPlzJoin.style.display = 'inline-block'
}

// random room code
let roomCode = Math.random().toString(36).substring(2,8);
document.getElementById('room-code').innerText = "ROOM CODE:  " + roomCode



const btnGen = document.getElementById('btn-generate')
btnGen.addEventListener('onclick', createRoom)

var roomRef = firebase.database().ref(`game/${roomCode}`)

function createRoom() {
    var user = firebase.auth().currentUser;
    
    roomRef.push({
        playerId: user.id,
        playerName: user.displayName,
    })
}
