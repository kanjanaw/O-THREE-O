function checkWinner(piece, color) {
    const pieces = document.getElementsByClassName("boardgame-pieces")

    const L11 = document.getElementById("L11");
    const L12 = document.getElementById("L12");
    const L13 = document.getElementById("L13");
    const L21 = document.getElementById("L21");
    const L22 = document.getElementById("L22");
    const L23 = document.getElementById("L23");
    const L31 = document.getElementById("L31");
    const L32 = document.getElementById("L32");
    const L33 = document.getElementById("L33");


    //Medium
    const M11 = document.getElementById("M11");
    const M12 = document.getElementById("M12");
    const M13 = document.getElementById("M13");
    const M21 = document.getElementById("M21");
    const M22 = document.getElementById("M22");
    const M23 = document.getElementById("M23");
    const M31 = document.getElementById("M31");
    const M32 = document.getElementById("M32");
    const M33 = document.getElementById("M33");

    //Small
    const S11 = document.getElementById("S11");
    const S12 = document.getElementById("S12");
    const S13 = document.getElementById("S13");
    const S21 = document.getElementById("S21");
    const S22 = document.getElementById("S22");
    const S23 = document.getElementById("S23");
    const S31 = document.getElementById("S31");
    const S32 = document.getElementById("S32");
    const S33 = document.getElementById("S33");

     for (let i = 0; i++; i<9){
        let id = document.getElementsByClassName("boardgame-item-L")[i].getAttribute('id')
        let size = id[id.length - 3]
        let row = id[id.length - 2]
        let col = id[id.length - 1]

        if (row == '1'){
            if ()
        }
     }

}