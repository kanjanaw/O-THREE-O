const bgPieces = document.querySelectorAll(".boardgame-pieces");
bgPieces.forEach((bgPiece) => {
    bgPiece.style.backgroundColor = 'rgb(220, 220, 220)'; // color must be in rgb(xxx, xxx, xxx) form only!
    bgPiece.addEventListener("click", selectAndDeselect)
});

function selectAndDeselect(event) {
    // Piece in grey turn to player's color == player select this piece
    if(event.currentTarget.style.backgroundColor == 'rgb(220, 220, 220)'){
        this.style.backgroundColor = 'rgb(25, 212, 184)';
        event.stopPropagation()

    // Piece in player's color turn to grey == player deselect this piece
    }else if(event.currentTarget.style.backgroundColor == 'rgb(25, 212, 184)'){
        this.style.backgroundColor = 'rgb(220, 220, 220)';
        event.stopPropagation()
    }
}