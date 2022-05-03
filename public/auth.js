const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", createUser);

const signupFeedback = document.querySelector("#feedback-msg-signup");
const signupModal = new bootstrap.Modal(document.querySelector("#modal-signup"));

function createUser(event) {
  event.preventDefault();
  const email = signupForm["input-email-signup"].value;
  const pwd = signupForm["input-password-signup"].value;
  const username = signupForm["input-username-signup"].value;

  firebase.auth().createUserWithEmailAndPassword(email, pwd)
    .then(() => {
      var user = firebase.auth().currentUser;
      user.updateProfile({
          displayName: username,
        })
        .then(() => {console.log("add username");})
        .catch((error) => {console.log("error add username");});
      console.log("create user");
      signupFeedback.style = "color:green";
      signupFeedback.innerHTML ='<i class="bi bi-check-circle-fill"></i> Signup completed.';
      setTimeout(function () {signupModal.hide();}, 1000);
    })
    .catch((error) => {
      signupFeedback.style = "color:crimson";
      signupFeedback.innerHTML = ` <i class="bi bi-exclamation-triangle-fill"></i> ${error.message}`;
      signupForm.reset();
    });
}

const btnCancel = document.querySelectorAll(".btn-cancel").forEach((btn) => {
  btn.addEventListener("click", () => {
    signupForm.reset();
    signupFeedback.innerHTML = "";
    loginForm.reset();
    loginFeedback.innerHTML = "";
  });
});

const btnLogout = document.querySelector("#btnLogout");
btnLogout.addEventListener("click", () => {
  if (firebase.auth().currentUser.isAnonymous == false) {
    firebase.auth().signOut()
  } else {
    anonyForm.reset()
  }
 // roomRef.remove()
  setName()
  setupUI()
});


//login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", loginUser);

const loginFeedback = document.querySelector("#feedback-msg-login");
const loginModal = new bootstrap.Modal(document.querySelector("#modal-login"));

function loginUser(event) {
  event.preventDefault();
  const email = loginForm["input-email-login"].value;
  const pwd = loginForm["input-password-login"].value;

  firebase.auth().signInWithEmailAndPassword(email, pwd)
    .then(() => {
      console.log("user login");
      loginFeedback.style = "color:green";
      loginFeedback.innerHTML = '<i class="bi bi-check-circle-fill"></i> login completed.';
      setTimeout(function () {loginModal.hide(), console.log(loginModal);}, 1000);
    })
    .catch((error) => {
      loginFeedback.style = "color:crimson";
      loginFeedback.innerHTML = ` <i class="bi bi-exclamation-triangle-fill"></i> ${error.message}`;
      loginForm.reset();
    });
}



  let playerId;
  var playerRef;

  function initGame() {
    const allPlayersRef = firebase.database().ref('players')

    allPlayersRef.on('value', (snapshot) => {
      // fires whenever a change occurs
    })

    allPlayersRef.on('child_added', (snapshot) => {
      // fires whenever a new node is added the tree
      const addedPlayer = snapshot.val()
    })
  }

  firebase.auth().onAuthStateChanged((user) => {
    // console.log(user)
    if (user) {
      // You're loged in
      // playerId = user.uid
      // playerRef = firebase.database().ref(`game/${roomCode}`)

      // playerRef.set({
      //   id: playerId,
      //   name: user.displayName,
      //   roomid: roomCode,
      //   color: null
      // })

      //Remove me from firebase when I disconnect
      playerRef.onDisconnect().remove()
      
      // setup UI
      setupUI(user)

      //
      getPieceFromFirebase()

      //Begin the game that we are signed in
      initGame()

    } else {
      // log out
      setupUI()
    }
     
  });



// Anonymous
const anonyForm = document.querySelector("#anony-form")
anonyForm.addEventListener("submit", anonyUser);

function anonyUser(event) {
    event.preventDefault();
    const name = anonyForm['input-username-anony'].value;

     firebase.auth().signInAnonymously().then(() => {
      var user = firebase.auth().currentUser;
      user.updateProfile({
          displayName: name,
        }) 

      // setup UI
      setupUI(user)

     })
    .catch((error) => {
      var errorCode =  error.code
      var errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
}
