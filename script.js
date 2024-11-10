let mainCont = document.getElementById("cont1")
let centerCont = document.getElementById("centercon")
let secCont = document.getElementById("cont2")
let mainBtn = document.getElementById("mainbtn")
let secBtn = document.getElementById("secbtn")
let cross = document.getElementById("cross")
let diceSound = document.getElementById("dicesound")
let mainsound = document.getElementById("bgsound")
let von = document.getElementById("volumeon")
let vof = document.getElementById("volumeof")
let u1 = document.getElementById("user1")
let u2 = document.getElementById("user2")
// document.addEventListener('DOMContentLoaded', function () {
//     window.addEventListener('beforeunload', function () {
//     });
// });
function sound() {
    mainsound.play();
}

mainCont.addEventListener("click", function () {
    setTimeout(() => {
        sound()
    }, 100);
})

let flag = 0;
von.addEventListener("click", function () {
    if (flag == 0) {
        vof.style.display = "flex"
        von.style.display = "none"
        mainsound.pause()
        flag = 1
    }
})
vof.addEventListener("click", function () {
    if (flag == 1) {
        von.style.display = "flex"
        vof.style.display = "none"
        mainsound.play()
        flag = 0
    }
})


function mainGame() {
    mainCont.style.display = "none"
    centerCont.style.display = "none"
    secCont.style.display = "flex"
    mainsound.pause()

    function rollDice1() {
        const dice = [...document.querySelectorAll(".die-list1")];
        dice.forEach(die => {
            toggleClasses(die);
            die.dataset.roll = getRandomNumber(1, 6);
        });
    }
    function toggleClasses(die) {
        die.classList.toggle("odd-roll");
        die.classList.toggle("even-roll");
    }
    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let rdigit = Math.floor(Math.random() * (max - min + 1)) + min;
        // u1r
        console.log("Value of " + rdigit);
    }
    document.getElementById("roll-button1").addEventListener("click", function () {
        rollDice1()
        diceSound.play()
    });

    function rollDice2() {
        const dice = [...document.querySelectorAll(".die-list2")];
        dice.forEach(die => {
            toggleClasses(die);
            die.dataset.roll = getRandomNumber(1, 6);
        });
    }
    function toggleClasses(die) {
        die.classList.toggle("odd-roll");
        die.classList.toggle("even-roll");
    }
    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    document.getElementById("roll-button2").addEventListener("click", function () {
        rollDice2()
        diceSound.play()
    });


}

function applyColorUser1() {
    let radios = document.getElementsByName('color1');
    let user1 = document.getElementById("user1")
    let selectedColor = null;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedColor = radios[i].value;
            break;
        }
    }
    if (selectedColor !== null) {
        user1.style.color = selectedColor;
        u1 = 1
    } else {
        alert('Select a Color For YourSelf!');
    }
}

function applyColorUser2() {
    var radioos = document.getElementsByName('color2');
    let user2 = document.getElementById("user2")
    var selectedColor = null;
    for (var i = 0; i < radioos.length; i++) {
        if (radioos[i].checked) {
            selectedColor = radioos[i].value;
            break;
        }
    }
    if (selectedColor !== null) {
        user2.style.color = selectedColor;
        u2 = 1

    } else {
        alert('Please Select a Color For CPU');
    }
}

function checkColors() {
    var user1Color = document.querySelector('input[name="color1"]:checked').value;
    var user2Color = document.querySelector('input[name="color2"]:checked').value;

    if (user1Color === user2Color) {
        alert("Both Users Cannot Select The Same Color.\nPlease Choose Different Colors.");
    }
    else {
        check = 1
    }
}

function con() {
    if (check == 1 && u1 == 1 && u2 == 1) {
        mainGame()
    }
    else {
        alert("Check Again")
    }
}

mainBtn.addEventListener("click", function () {
    centerCont.style.display = "flex"
})

cross.addEventListener("click", function () {
    centerCont.style.display = "none"
})

secBtn.addEventListener("click", function () {
    checkColors()
    applyColorUser1()
    applyColorUser2()
    con()
})
