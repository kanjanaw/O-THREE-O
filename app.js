document.getElementById("L11").addEventListener("click", display)
document.getElementById("M11").addEventListener("click", display2)
document.getElementById("S11").addEventListener("click", display3)

function display(event){
    document.getElementById("L11").style.backgroundColor = '#19d4b8'
}
function display2(event){
    document.getElementById("M11").style.backgroundColor = '#19d4b8'
}
function display3(event){
    console.log('S11')
    event.StopPropagation()
}