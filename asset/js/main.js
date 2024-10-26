
// show menu

const shoowMenu =(toggleId,navId) =>{
    const toggle =document.getElementById(toggleId),
    nav =document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',() =>{
            nav.classList.toggle('show')
        });
    }
}
shoowMenu('nav-toggle','nav-menu')

