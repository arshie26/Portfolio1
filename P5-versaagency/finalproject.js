function openMenu(){
    document.body.classList += "open__menu";
}

function closeMenu(){
    document.body.classList.remove("open__menu");
}

let isModalOpen = false;
function toggleModal(){
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    closeMenu();
    isModalOpen = true;
    document.body.classList += " modal--open";
}