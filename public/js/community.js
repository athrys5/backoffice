var modal = document.getElementsByClassName("myModal");
var form = document.getElementsByClassName("myForm");
var btn = document.getElementsByClassName("myBtn");
var closeModal = document.getElementsByClassName("close");
var btnDesc = document.getElementsByClassName("myDesc");
var input = document.getElementsByClassName("modifytext");
var lab = document.getElementsByClassName("label")
var btnDel = document.getElementsByClassName("deletebutton");
var btnMod = document.getElementsByClassName("modifybutton");

for(let i = 0; i < btn.length ; i++){
    btn[i].onclick = function() {
        btnDel[i].style.display = "block";
        btnMod[i].style.display = "none";
        input[i].style.display = "none";
        form[i].action = '/canceldesc';
        modal[i].style.display = "block";
        lab[i].style.display = "none";
    }
    closeModal[i].onclick = function() {
        modal[i].style.display = "none";
    }
}

for(let i = 0; i < btn.length ; i++){
    btnDesc[i].onclick = function() {
        btnDel[i].style.display = "none";
        btnMod[i].style.display = "block";
        input[i].style.display = 'block';
        form[i].action = '/modifydesc';
        modal[i].style.display = "block";
        lab[i].style.display = "block";
    }
    closeModal[i].onclick = function() {
        modal[i].style.display = "none";
    }
}
