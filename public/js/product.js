const first = document.querySelector('#first')
const second = document.querySelector('#second')
const third = document.querySelector('#third') 

first.addEventListener('click', () => {
    const c = document.getElementsByClassName('first')
    for(let i = 1; i < c.length; i++){ c[i].removeAttribute("disabled"); }
    const a = document.getElementsByClassName('second')
    for(let i = 1; i < a.length; i++){ a[i].setAttribute('disabled', ''); }
    const b = document.getElementsByClassName('third')
    for(let i = 1; i < b.length; i++){ b[i].setAttribute('disabled', ''); }
        
});

second.addEventListener('click', () => {
    const c = document.getElementsByClassName('second')
    for(let i = 1; i < c.length; i++){ c[i].removeAttribute("disabled"); }
    const a = document.getElementsByClassName('first')
    for(let i = 1; i < a.length; i++){ a[i].setAttribute('disabled', ''); }
    const b = document.getElementsByClassName('third')
    for(let i = 1; i < b.length; i++){ b[i].setAttribute('disabled', ''); }
        
});

third.addEventListener('click', () => {
    const c = document.getElementsByClassName('third')
    for(let i = 1; i < c.length; i++){ c[i].removeAttribute("disabled"); }
    const a = document.getElementsByClassName('first')
    for(let i = 1; i < a.length; i++){ a[i].setAttribute('disabled', ''); }
    const b = document.getElementsByClassName('second')
    for(let i = 1; i < b.length; i++){ b[i].setAttribute('disabled', ''); }
        
});