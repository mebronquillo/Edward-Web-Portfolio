
function direct_to_project(){
    const scrolltoproject = document.getElementById("im_the_project");
    scrolltoproject.scrollIntoView({
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


function direct_to_contactme(){
    document.getElementById("nav_contact_id").style.width = "500px";
}

function close_nav1(){
    document.getElementById("nav_contact_id").style.width = "0%";
}







