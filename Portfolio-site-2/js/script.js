let button = document.getElementById("anim")
let nav = document.getElementById("mnav")

function tg(){
    button.classList.toggle("aactive")
}

let bbody=document.getElementById('body');
        function showpage(){
            bbody.classList.add('show')
        }


 document.addEventListener("click", (event) => {
        if (event.target.id !== "mnav" && event.target.id !== "anim") {
            button.classList.remove("aactive");
        }
 });