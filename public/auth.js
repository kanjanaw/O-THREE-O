const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", createUser);

const signupFeedback = document.querySelector("#feedback-msg-signup");
const signupModal = new bootstrap.Modal(document.querySelector("#modal-signup"));

function createUser(event) {
    event.preventDefault()
    const email = signupForm["input-email-signup"].value;
    const pwd = signupForm["input-password-signup"].value;

    firebase.auth().createUserWithEmailAndPassword(email, pwd)
        .then(() => {
            console.log('create user')
            signupFeedback.style = 'color:green';
            signupFeedback.innerHTML = '<i class="bi bi-check-circle-fill"></i> Signup completed.';
            setTimeout(function() {signupModal.hide()}, 1000);
        })
        .catch((error) => {
            signupFeedback.style = 'color:crimson';
            signupFeedback.innerHTML =` <i class="bi bi-exclamation-triangle-fill"></i> ${error.message}`;
            signupForm.reset();
        });
};

//login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", loginUser);

const loginFeedback = document.querySelector("#feedback-msg-login");
const loginModal = new bootstrap.Modal(document.querySelector("#modal-login"));

function loginUser(event) {
    event.preventDefault()
    const email = loginForm["input-email-login"].value;
    const pwd = loginForm["input-password-login"].value;

    firebase.auth().signInWithEmailAndPassword(email, pwd)
        .then(() => {
            console.log('user login')
            loginFeedback.style = 'color:green';
            loginFeedback.innerHTML = '<i class="bi bi-check-circle-fill"></i> login completed.';
            setTimeout(function() {loginModal.hide()}, 1000);
        })
        .catch((error) => {
            loginFeedback.style = 'color:crimson';
            loginFeedback.innerHTML =` <i class="bi bi-exclamation-triangle-fill"></i> ${error.message}`;
            loginForm.reset();
        });
};
const btnCancel = document.querySelectorAll('.btn-cancel').forEach(btn =>{
    btn.addEventListener('click', ()=>{
        signupForm.reset();
        signupFeedback.innerHTML="";
    })
})

firebase.auth().onAuthStateChanged((user)=>{
    console.log('User: ', user)
    getList(user);
    setupUI(user);
})


// const btnLogout = document.querySelector('#btnLogout');
//     btnLogout.addEventListener('click', ()=>{
//         firebase.auth().signOut();
//         console.log('Logout completed.');
    
// })



