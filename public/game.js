const btnRestart = document.getElementsByClassName("btn-game")[1]
btnRestart.disabled = true

var currentPlayer

function turnGame(snapshot) {
    var user = firebase.auth().currentUser;

    ref.child(roomCode).child('players').on('value', (snapshot) => {
        snapshot.forEach((data) => {
            const id = data.key
            const uid = data.val().playerId
            if(id == '0'){
                playerNamesInGame[0].style.opacity = 1
                setTimeout(() => {playerNamesInGame[0].style.opacity = .3}, 5000)
            }else if(id == '1'){
                playerNamesInGame[1].style.opacity = 1
                setTimeout(() => {playerNamesInGame[1].style.opacity = .3}, 5000)
            }
            // else if(id == '1'){
            //     playerNamesInGame[1].style.opacity = 1;
            // }else if(id == '2'){
            //     playerNamesInGame[2].style.opacity = 1;
            // }else if(id == '3'){
            //     playerNamesInGame[3].style.opacity = 1;
            // }
    
        })
    })
}
