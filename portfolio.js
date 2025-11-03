

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementById("nav_id").style.padding = "15px 10px";
    } else{
        document.getElementById("nav_id").style.padding = "40px 10px";
    }
}
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

document.getElementById("aos_anims").addEventListener("click", function(){
    const anim_aoss = document.getElementById("show_aos");
    anim_aoss.style.display = "block";

    AOS.refresh();
});



// Random text
document.addEventListener('DOMContentLoaded', () => {
const hoverArea = document.querySelector('.profile_pic');
const randomTextDisplay = document.querySelector('.random_message');

const randomTexts = [
    "Hello There!!",
    "Psst!! You.. yes you! have a great day!",
    "I'm Open for work.",
    "Nice to meet you.",
    "Hi!!",
    "I am cyclist BTW! ",
    "Aray ku!!",
    "I want to be a Full Stack Developer!",
    "Keep Smiling :)",
    "Coding is fun!",
    "Stay Positive!",
    "You are awesome!",
    "Seize the day!",
    "Dream Big!",
    "What do you call a farm working on a medicine? A 'Farmmacist!'",
    "One day I'll buy my favorite Road Bike!"
];

hoverArea.addEventListener('mouseenter', () => {
    // random text from array
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    randomTextDisplay.textContent = randomTexts[randomIndex];
    randomTextDisplay.style.display = 'block'; // Showing text
    randomTextDisplay.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 200,
        easing: 'ease-in-out'
    });
  });

//not hovering and remove the message
hoverArea.addEventListener('mouseleave', () =>{ 
randomTextDisplay.style.display = 'none';
});
});





