const first = document.querySelectorAll('#first')
const second = document.querySelectorAll('#second')
const third = document.querySelectorAll('#third') 
const insertbtn = document.querySelector('.insertProds')
const deletebtn = document.querySelector('.deleteProds')
const modifybtn = document.querySelector('.modifyProds')

for (let j = 0; j < 3; j++){
    first[j].addEventListener('click', () => {
        const c = document.getElementsByClassName('first')
        for(let i = 1; i < c.length; i++){ c[i].removeAttribute("disabled"); }
        const a = document.getElementsByClassName('second')
        for(let i = 1; i < a.length; i++){ a[i].setAttribute('disabled', ''); }
        const b = document.getElementsByClassName('third')
        for(let i = 1; i < b.length; i++){ b[i].setAttribute('disabled', ''); }
            
    });

    second[j].addEventListener('click', () => {
        const c = document.getElementsByClassName('second')
        for(let i = 1; i < c.length; i++){ c[i].removeAttribute("disabled"); }
        const a = document.getElementsByClassName('first')
        for(let i = 1; i < a.length; i++){ a[i].setAttribute('disabled', ''); }
        const b = document.getElementsByClassName('third')
        for(let i = 1; i < b.length; i++){ b[i].setAttribute('disabled', ''); }
            
    });

    third[j].addEventListener('click', () => {
        const c = document.getElementsByClassName('third')
        for(let i = 1; i < c.length; i++){ c[i].removeAttribute("disabled"); }
        const a = document.getElementsByClassName('first')
        for(let i = 1; i < a.length; i++){ a[i].setAttribute('disabled', ''); }
        const b = document.getElementsByClassName('second')
        for(let i = 1; i < b.length; i++){ b[i].setAttribute('disabled', ''); }
            
    });
}

deletebtn.addEventListener('click', () => {
    document.getElementById('insertDiv').classList.replace('col-8','col-2')
    document.getElementById('modifyDiv').classList.replace('col-8','col-2')
    document.getElementById('deleteDiv').classList.replace('col-2','col-8')
    document.getElementById('insertCards').style.display = "none";
    document.getElementById('deleteCards').style.display = "flex";
    document.getElementById('modifyCards').style.display = "none";
    deletebtn.style.cssText = 'background-color: #d7d7d7; color: #28272c';
    insertbtn.style.cssText = 'background-color: #28de62; color: white';
    modifybtn.style.cssText = 'background-color: #28de62; color: white';
    $(modifybtn).hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "pink");
      });
})

insertbtn.addEventListener('click', () => {
    document.getElementById('deleteDiv').classList.replace('col-8','col-2')
    document.getElementById('modifyDiv').classList.replace('col-8','col-2')
    document.getElementById('insertDiv').classList.replace('col-2','col-8')
    document.getElementById('deleteCards').style.display = "none";
    document.getElementById('insertCards').style.display = "flex";
    document.getElementById('modifyCards').style.display = "none";
    insertbtn.style.cssText = 'background-color: #d7d7d7; color: #28272c';
    deletebtn.style.cssText = 'background-color: #28de62; color: white';
    modifybtn.style.cssText = 'background-color: #28de62; color: white';
})

modifybtn.addEventListener('click', () => {
    document.getElementById('insertDiv').classList.replace('col-8','col-2')
    document.getElementById('deleteDiv').classList.replace('col-8','col-2')
    document.getElementById('modifyDiv').classList.replace('col-2','col-8')
    document.getElementById('deleteCards').style.display = "none";
    document.getElementById('insertCards').style.display = "none";
    document.getElementById('modifyCards').style.display = "flex";
    modifybtn.style.cssText = 'background-color: #d7d7d7; color: #28272c';
    insertbtn.style.cssText = 'background-color: #28de62; color: white;';
    deletebtn.style.cssText = 'background-color: #28de62; color: white';
})