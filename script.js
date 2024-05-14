
window.onload = function() {
    var mainHeight = document.querySelector('main').clientHeight; // Obtém a altura da main
    var navHeight = document.querySelector('nav').clientHeight; // Obtém a altura da nav

    if (navHeight > mainHeight) {
        document.querySelector('main').style.height = navHeight + 'px'; // Define a altura da main igual à altura da nav
    } else {
        document.querySelector('nav').style.height = mainHeight + 'px'; // Define a altura da nav igual à altura da main
    }
};
