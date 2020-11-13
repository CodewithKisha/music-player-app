const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    bodypd = document.getElementById(bodyId);
    headerpd = document.getElementById(headerId);


    if(toggle && nav && bodypd && headerpd) {
        toggle.addEventListener("click", ()=> {
            // show navbar
            nav.classList.toggle("show");
            //change icon
            toggle.classList.toggle("bx-x");
            //add padding to the body
            bodypd.classList.toggle("body-pd");
            // add padding to header
            headerpd.classList.toggle("body-pd");
        })
    }
}

showNavbar("header-toogle", "nav-bar", "body-pd", "header");

const linkColor = document.querySelectorAll(".nav__link");

function colorLink(){
    if(linkColor) {
        linkColor.forEach(L => L.classList.remove("active"))
        this.classList.add("active")
    }
}

linkColor.forEach(L => L.addEventListener("click", colorLink))