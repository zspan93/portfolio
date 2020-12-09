

var navLinks = document.querySelectorAll("nav");

function navClick(){
    document.body.classList.toggle('nav-open');
    newFunction();

    function newFunction() {
        console.log(navLinks[0]);
    }
    
}

navLinks.forEach(link => {
    link.addEventListener('click', ()  => {
        document.getElementById("heading").innerHTML = "test";
         console.log("menu item clicked");
        document.body.classList.remove('nav-open');
    })
})