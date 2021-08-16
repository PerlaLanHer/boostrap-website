const primera = document.querySelector('.primera');
const menu = document.querySelector('.menu-navegacion');

primera.addEventListener('click', ()=>{

menu.classList.toggle("spread")

})

window.addEventListener('click',e=> {

if(menu.classList.contains('spread') && e.target != menu && e.target != primera)
{
    menu.classList.toggle("spread")
}


})

 