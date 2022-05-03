const rowRoomSelect = document.getElementById("room-select");
const rowTextPlzJoin = document.getElementById("text-plz-join");

rowRoomSelect.style.display = "none";

// random room code
var roomCode = Math.random().toString(36).substring(2, 8);
document.getElementById("room-code").innerText = "ROOM CODE:  " + roomCode;

// create room
const btnCreate = document.getElementById("btn-create-room");

function createRoom() {
  btnCreate.disabled = true;
  btnJoin.disabled = true;
  joinForm["input-room-code"].value = roomCode;

  var roomRef = firebase.database().ref(`games-room/${roomCode}`);

  roomRef.set({
    room: roomCode,
  });

  displayTextJoin();
}

// show text
function displayTextJoin(match) {
  if (btnCreate.disabled == true) {
    rowRoomSelect.style.display = "";
    rowTextPlzJoin.style.display = "none";
    console.log("1");
  } else if (match == true) {
    rowRoomSelect.style.display = "";
    rowTextPlzJoin.style.display = "none";
    console.log("2");
  } else if (match == false) {
    rowRoomSelect.style.display = "none";
    document.getElementById("p-plz-join").innerText = "THE ROOM IS NOT EXIST";
    rowTextPlzJoin.style.display = "";
    console.log("3");
  } else {
    rowRoomSelect.style.display = "none";
    rowTextPlzJoin.style.display = "";
    console.log("4");
  }
}

const btnJoin = document.getElementById("btn-join");
const joinForm = document.querySelector("#room-form");
joinForm.addEventListener("submit", joinRoomSnap);

function joinRoomSnap() {
  event.preventDefault();
  var ref = firebase.database().ref(`games-room`);
  ref.on("value", (snapshot) => {
    joinRoom(snapshot);
  });
}

function joinRoom(snapshot) {

  var inputroomCode = joinForm["input-room-code"].value;
  var match = false;

  snapshot.forEach((data) => {
    const room = data.key;
    if (inputroomCode == room) {
      btnJoin.disabled = true;
      match = true;
      roomCode = inputroomCode
      displayTextJoin(match);
      ref
        .child(roomCode)
        .child("players")
        .once("value", (playerSnapshot) => {
          playerSnapshot.forEach((playerInfo) => {
            var color = playerInfo.key;
            var name = playerInfo.val().playerName;
            console.log("color code : " + color);
            console.log("name : " + name);
            playerNames[color].innerText = name;
            playerNames[color].style.opacity = 1
          });
        });
    } else {
      displayTextJoin(match);
    }
    // console.log(data.val())
  });
}
