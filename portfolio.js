
function direct_to_project(){
    const scrolltoproject = document.getElementById("im_the_project");
    scrolltoproject.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start"
    });
}

function direct_to_contactme(){
    const scrolltocontactme = document.getElementById("im_the_contactme");
    scrolltocontactme.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start"
    });
}

var body = document.body;
function direct_to_aboutme(){
    document.getElementById("nav_aboutme_id").style.width = "100%";
    body.classList.toggle("dont_scroll");
    
}

function close_nav(){
    document.getElementById("nav_aboutme_id").style.width = "0%";
}

function toggleMenu(){
    document.getElementById("nav_Menu").classList.toggle("nav_active");
}







