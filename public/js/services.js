const add_ds = document.getElementById("DogSitter")
const add_dv = document.getElementById("Veterinarian")
const resDog = document.getElementById("resDog")
const resVet = document.getElementById("resVet")
const max_h = document.getElementById("maxheight")
const max_l = document.getElementById("maxlength")
const addsite = document.getElementById("addSite")
const site = document.getElementById("addSiteDiv")
const checkempty = document.getElementById("checkempty")
const form = document.getElementById("form")


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

form.addEventListener('submit', (event) => {
    if(add_ds.checked == false && add_dv.checked == false){
        event.preventDefault();
    }
})

