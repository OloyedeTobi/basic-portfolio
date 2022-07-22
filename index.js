let exit = document.getElementsByClassName('modal-exit-btn')[0]
let modal = document.getElementsByClassName("modal")[0]
let aboutBtn = document.getElementsByClassName("btn2")[0]
let des = document.getElementsByClassName("description")[0]
let home = document.getElementById("p1")

exit.addEventListener("click", () => {
    modal.classList.add("exit")
    des.classList.remove("exit")
    home.classList.remove("blur")
    
})

aboutBtn.addEventListener("click", () =>{
    modal.classList.remove("exit")
    des.classList.add("exit")
    home.classList.add("blur")
})






