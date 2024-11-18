let mainCont = document.getElementById("cont1")
let centerCont = document.getElementById("centercon")
let secCont = document.getElementById("cont2")
let mainBtn = document.getElementById("mainbtn")
let secBtn = document.getElementById("secbtn")
let cross = document.getElementById("cross")
let mainsound = new Audio("assets/BGsound.mp3")
let volume = document.getElementById("vol")

let flag = 0;
volume.addEventListener("click", function () {
    if (flag == 0) {
        volume.src = "assets/off.png"
        mainsound.pause()
        flag = 1
    }
    else if (flag == 1) {
        volume.src = "assets/on.png"
        mainsound.play()
        flag = 0
    }
})
// mainsound.play()

mainBtn.addEventListener("click", function () {
    centerCont.style.display = "flex"
})

cross.addEventListener("click", function () {
    centerCont.style.display = "none"
})

let u1 = 0
let u2 = 0
let user1 = document.getElementById("user1")
let selectedColorGlobal1 = null
function applyColorUser1() {
    let radios = document.getElementsByName('color1');
    let selectedColor = null;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedColor = radios[i].value;
            break;
        }
    }
    if (selectedColor !== null) {
        user1.style.color = selectedColor;
        selectedColorGlobal1 = selectedColor
        u1 = 1
    } else {
        alert('Select a Color For YourSelf!');
    }
}

let user2 = document.getElementById("user2")
let selectedColorGlobal2 = null
function applyColorUser2() {
    var radioos = document.getElementsByName('color2');
    var selectedColor = null;
    for (var i = 0; i < radioos.length; i++) {
        if (radioos[i].checked) {
            selectedColor = radioos[i].value;
            break;
        }
    }
    if (selectedColor !== null) {
        user2.style.color = selectedColor;
        selectedColorGlobal2 = selectedColor
        u2 = 1
    } else {
        alert('Please Select a Color For CPU');
    }
}
let ch = 0
let err = document.getElementById("err")
function chColors() {
    var user1Color = document.querySelector('input[name="color1"]:checked').value;
    var user2Color = document.querySelector('input[name="color2"]:checked').value;
    if (user1Color === user2Color) {
        err.style.display = "flex"
        setTimeout(() => {
            err.style.display = "none"
        }, 1000);
    }
    else {
        ch = 1
    }
}

function con() {
    if (ch == 1 && u1 == 1 && u2 == 1) {
        mainGame()
    }
}

secBtn.addEventListener("click", function () {
    chColors()
    applyColorUser1()
    applyColorUser2()
    con()
})

// Starting Page Complete

let rollbtn1 = document.getElementById("roll-button1")
let rollbtn2 = document.getElementById("roll-button2")
let vid1 = document.getElementById("dicevid1")
let vid2 = document.getElementById("dicevid2")

function mainGame() {
    mainCont.style.display = "none"
    centerCont.style.display = "none"
    secCont.style.display = "flex"
    mainsound.pause()
}

import boxes from "./boxes.js"
let face11 = document.getElementById("1face1")
let face12 = document.getElementById("1face2")
let face13 = document.getElementById("1face3")
let face14 = document.getElementById("1face4")
let face15 = document.getElementById("1face5")
let face16 = document.getElementById("1face6")
let faces1 = [face11, face12, face13, face14, face15, face16]
let open1 = 0
let previousEle1 = null
rollbtn1.addEventListener("click", function () {
    vid1.play()
    vid1.style.display = 'flex'
    vid2.style.display = "none"
    rollbtn2.style.display = "none"
    rollbtn1.style.display = "none"
    let num1 = Math.floor(Math.random() * 6);
    let newnum1 = num1 + 1
    setTimeout(() => {
        faces1[num1].style.display = 'grid'
        vid1.style.display = 'none'
        let newele1 = document.createElement("div")
        newele1.className = "fa-solid fa-chess-pawn"
        newele1.style.marginBottom = ".5vw"
        newele1.style.color = selectedColorGlobal1
        if ((open1 == 0 && newnum1 == 1) || (open1 == 0 && newnum1 == 6)) {
            user1.style.display = "none"
            boxes[1 - 1].appendChild(newele1)
            open1 = 1
        }
        else if (open1 == 1) {
            if (previousEle1 && previousEle1.parentNode) {
                previousEle1.parentNode.removeChild(previousEle1);
            }
            console.log(newnum1);
            console.log(boxes[newnum1]);
            boxes[newnum1].appendChild(newele1)
        }
        previousEle1 = newele1
        setTimeout(() => {
            vid2.style.display = "flex"
            rollbtn2.style.display = "flex"
            vid1.style.display = "none"
            rollbtn1.style.display = "none"
            faces1[num1].style.display = "none"
        }, 1500);
    }, 999);
})

let face21 = document.getElementById("2face1")
let face22 = document.getElementById("2face2")
let face23 = document.getElementById("2face3")
let face24 = document.getElementById("2face4")
let face25 = document.getElementById("2face5")
let face26 = document.getElementById("2face6")
let faces2 = [face21, face22, face23, face24, face25, face26]
let open2 = 0
let previousEle2 = null
rollbtn2.addEventListener("click", function () {
    vid2.play()
    vid2.style.display = 'flex'
    vid1.style.display = "none"
    rollbtn1.style.display = "none"
    rollbtn2.style.display = "none"
    let num2 = Math.floor(Math.random() * 6);
    let newnum2 = num2 + 1
    setTimeout(() => {
        faces2[num2].style.display = 'grid'
        vid2.style.display = 'none'
        let newele2 = document.createElement("div")
        newele2.className = "fa-solid fa-chess-pawn"
        newele2.style.marginBottom = ".5vw"
        newele2.style.color = selectedColorGlobal2
        if ((open2 == 0 && newnum2 == 1) || (open2 == 0 && newnum2 == 6)) {
            user2.style.display = "none"
            boxes[1 - 1].appendChild(newele2)
            open2 = 1
        }
        else if (open2 == 1) {
            if (previousEle2 && previousEle2.parentNode) {
                previousEle2.parentNode.removeChild(previousEle2);
            }
            console.log(newnum2);
            console.log(boxes[newnum2]);
            boxes[newnum2].appendChild(newele2)
        }
        previousEle2 = newele2
        setTimeout(() => {
            vid1.style.display = "flex"
            rollbtn1.style.display = "flex"
            vid2.style.display = "none"
            rollbtn2.style.display = "none"
            faces2[num2].style.display = "none"
        }, 1500);
    }, 999);
})

let gg = 0
let container = document.getElementById("cont2")
setInterval(() => {
    if (open1 == 1 && open2 == 1 && gg == 0) {
        container.style.paddingBottom = "4vw"
        gg = 1
    }
}, 10);