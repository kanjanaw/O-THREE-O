const playerPieces = document.querySelectorAll(".player-pieces");
playerPieces.forEach((playerPiece) => 
  playerPiece.style.backgroundColor = "rgb(25, 212, 184)"
);

const bgPieces = document.querySelectorAll(".boardgame-pieces");
bgPieces.forEach((bgPiece) => {
  bgPiece.style.backgroundColor = "rgb(220, 220, 220)"; // color must be in rgb(xxx, xxx, xxx) form only!
  bgPiece.addEventListener("click", selectAndDeselect);
});

function selectAndDeselect(event) {
  // Piece in grey turn to player's color == player select this piece
  if (event.currentTarget.style.backgroundColor == "rgb(220, 220, 220)") {
    this.style.backgroundColor = "rgb(25, 212, 184)";
    event.stopPropagation();

    // Piece in player's color turn to grey == player deselect this piece
  } else if (event.currentTarget.style.backgroundColor == "rgb(25, 212, 184)") {
    this.style.backgroundColor = "rgb(220, 220, 220)";
    event.stopPropagation();
  }
}

// const form = document.querySelector("#add-todo-form");
// form.addEventListener("submit", addList);

// const ref = firebase.database().ref("UserList");

// function addList(event) {
//   event.preventDefault();
//   let title = document.getElementById("title").value;
//   console.log(title);

//   const currentUser = firebase.auth().currentUser;
//   ref.child(currentUser.uid).push({
//     title: title,
//   });
//   console.log("Add list complete!");
//   document.getElementById("title").value = "";
// }

// function readList(snapshot) {
//   document.getElementById("name-list").innerHTML = "";
//   snapshot.forEach((data) => {
//     const id = data.key;
//     const title = data.val().title;
//     const newDiv =
//       '<li class="list-group-item d-flex justify-contenet-between align-items-star"> <div class="ms-2 me-auto">' +
//       title +
//       '</div> <span><button type="button" class="btn btn-outline-danger btn-delete" data-id=' +
//       id +
//       '> <i class="bi bi-trash3"</i></button></span></li>';
//     const newElement = document.createRange().createContextualFragment(newDiv);
//     document.getElementById("name-list").appendChild(newElement);
//   });
//   document.querySelectorAll("button.btn-delete").forEach((btn) => {
//     btn.addEventListener("click", deleteList);
//   });
// }

// function deleteList(event) {
//   const id = event.currentTarget.getAttribute("data-id");
//   const currentUser = firebase.auth().currentUser;
//   ref.child(currentUser.uid).child(id).remove();
//   console.log(`delete on id:` + id);
// }

function getList(user) {
  if (user) {
    // ref.child(user.uid).on("value", (snapshot) => {
    //   readList(snapshot);
    // });
  }
}

// const logoutItems = document.querySelectorAll(".logged-out");
const loginItems = document.querySelectorAll(".logged-in");

function setupUI(user) {
  if (user) {
    loginItems.forEach(item => item.style.display = "inline-block");
    // logoutItems.forEach(item => item.style.display = "none");
  } else {
    loginItems.forEach(item => item.style.display = "none");
    // logoutItems.forEach(item => item.style.display = "inline-block");
  }
}
