const burgerMenu = document.querySelector('#toggler');
const navMobile = document.querySelector('#nav-bar-small');

burgerMenu.onclick =
function() {
    toggler();
};

const toggler = () => {
    if(navMobile.style.display == "flex") {
        navMobile.style.display = "none";
    } else if (navMobile.style.display = 'none') {
        navMobile.style.display = "flex";
    }
};

