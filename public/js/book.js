const dogButton = document.getElementById("showDogSitter")
const vetButton = document.getElementById("showVet")
const dogManage = document.getElementById("dogManage")
const vetManage = document.getElementById("vetManage")
const displayCalendar = document.getElementById("numResDog")
const hide = document.getElementsByClassName("hide")

dogButton.addEventListener('click', () => {
    dogManage.style.display = "block"
    vetManage.style.display = "none"
})

vetButton.addEventListener('click', () => {
    dogManage.style.display = "none"
    vetManage.style.display = "block"
})


displayCalendar.addEventListener('change', () => {
    for(var i = 0; i < hide.length; i++) {
        hide[i].style.display = "block";
    }
})


