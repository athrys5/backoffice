const add_ds = document.getElementById("DogSitter")
const add_dv = document.getElementById("Veterinarian")
const resDog = document.getElementById("resDog")
const resVet = document.getElementById("resVet")
const max_h = document.getElementById("maxheight");
const max_l = document.getElementById("maxlength");
const addsite = document.getElementById("addSite");
const site = document.getElementById("addSiteDiv");
const checkempty = document.getElementById("checkempty");
const form1 = document.getElementById("form");
var modal = document.getElementsByClassName("myModal");
var form = document.getElementsByClassName("myForm");
var btn = document.getElementsByClassName("myBtn");
var closeModal = document.getElementsByClassName("close");
var btnDesc = document.getElementsByClassName("myDesc");
var input = document.getElementsByClassName("modifytext");
var lab = document.getElementsByClassName("label");
var btnDel = document.getElementsByClassName("deletebutton");
var btnMod = document.getElementsByClassName("modifybutton");
var btnAdd1 = document.getElementsByClassName("add1");
var btnAdd2 = document.getElementsByClassName("add2");
var divmodify = document.getElementsByClassName("modifydiv");
var divdelete = document.getElementsByClassName("divdelete");
var deletetext = document.getElementsByClassName("deletetext");
var btnSite = document.getElementsByClassName("myAdd");
var formModal = document.getElementById("formModal");

addsite.addEventListener('click', () => {
    if(site.style.display == "block"){
        site.style.display = "none"
    }else{
        site.style.display = "block"
    }
})

add_dv.addEventListener('change', () => {
    if(max_h.disabled){
        max_h.removeAttribute('disabled')
        max_h.setAttribute('min', 1)
    }else{
        max_h.setAttribute('disabled','')
    }
    if(max_l.disabled){
        max_l.removeAttribute('disabled')
        max_l.setAttribute('min', 1)
    }else{
        max_l.setAttribute('disabled','')
    }
})

form1.addEventListener('submit', (event) => {
    if(add_ds.checked == false && add_dv.checked == false){
        event.preventDefault();
    }
})

for(let i = 0; i < btn.length ; i++){
    btn[i].onclick = function() {
        btnDel[i].style.display = "block";
        btnMod[i].style.display = "none";
        btnAdd1[i].style.display = "none";
        btnAdd2[i].style.display = "none";
        divmodify[i].style.display = "none";
        form[i].action = '/deletesite';
        modal[i].style.display = "block";
        console.log(divdelete)
        divdelete[i].style.display = "block";
    }
    closeModal[i].onclick = function() {
        modal[i].style.display = "none";
    }
}

for(let i = 0; i < btn.length ; i++){
    btnDesc[i].onclick = function() {
        btnDel[i].style.display = "none";
        btnMod[i].style.display = "block";
        btnAdd1[i].style.display = "none";
        btnAdd2[i].style.display = "none";
        divmodify[i].style.display = 'block';
        form[i].action = '/modifysite';
        modal[i].style.display = "block";
        console.log(divdelete)
        divdelete[i].style.display = "none";
    }
    closeModal[i].onclick = function() {
        modal[i].style.display = "none";
    }
}

for(let i = 0; i < btn.length ; i++){
    btnSite[i].onclick = function() {
        btnDel[i].style.display = "none";
        btnMod[i].style.display = "none";
        btnAdd1[i].style.display = "block";
        btnAdd2[i].style.display = "block";
        divmodify[i].style.display = 'none';
        if(btnAdd1[i].onclick = function() {
            form[i].action = '/adddog';
        })
        if(btnAdd2[i].onclick = function() {
            form[i].action = '/addvet';
        })
        modal[i].style.display = "block";
        console.log(divdelete)
        divdelete[i].style.display = "none";
    }
    closeModal[i].onclick = function() {
        modal[i].style.display = "none";
    }
}

