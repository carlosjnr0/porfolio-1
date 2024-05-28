let button = document.getElementById("anim")
let nav = document.getElementById("mnav")
let loading = document.getElementById("lding")

function tg(){
    button.classList.toggle("aactive")
}

document.addEventListener("click", (event) => {
        if (event.target.id !== "mnav" && event.target.id !== "anim") {
            button.classList.remove("aactive");
        }
 });
 const delay = ms => new Promise(res => setTimeout(res, ms));
let bbody=document.getElementById('body');
        async function showpage(){
            
            bbody.classList.add('show')
            await delay(3000);
            loading.classList.add('lding-hide')
            
            
        }

