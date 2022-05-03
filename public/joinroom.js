const rowRoomSelect = document.getElementById("room-select")
const rowTextPlzJoin = document.getElementById("text-plz-join")

rowRoomSelect.style.display = 'none'



// random room code
const roomCode = Math.random().toString(36).substring(2,8);
document.getElementById('room-code').innerText = "ROOM CODE:  " + roomCode


// create room
const btnCreate = document.getElementById('btn-create-room')

function createRoom() {
    btnCreate.disabled = true

    var roomRef = firebase.database().ref(`games-room/${roomCode}`)

    roomRef.set({
       room: roomCode
    })

    displayTextJoin()
}

// show text 
function displayTextJoin(roomRef) {
    if(btnCreate.disabled == true){
        rowRoomSelect.style.display = ''
        rowTextPlzJoin.style.display = 'none'
    }
    else if (roomRef){
        rowRoomSelect.style.display = ''
        rowTextPlzJoin.style.display = 'none'
    }
}


const btnJoin = document.getElementById("btn-join")
const joinForm = document.querySelector('#room-form')
joinForm.addEventListener("submit", joinRoom)

function joinRoom() {
    const roomCode = joinForm['input-room-code'].value;

    var roomRef = firebase.database().ref(`games-room/${roomCode}`)
    if(roomRef){
        btnJoin.disabled = true
        displayTextJoin(roomRef)
    }
}