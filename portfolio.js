

window.onscroll = function() {scrollFunction()};

var nav_barsmull = document.getElementById("nav_id");
var nav_smallboxbtn = document.getElementById("smallbox");
var nav_smallboxbtn1 = document.getElementById("smallbox1");
var nav_smallboxbtn2 = document.getElementById("smallbox2");
var nav_smallboxbtn3 = document.getElementById("smallbox3");
var openbtn = document.getElementById("home_direct");

function scrollFunction(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        
        // nav_barsmull.style.padding = "10px 10px";
        document.getElementById("nav_id").style.padding = "15px 10px";
        document.getElementById("smallbox"). style.padding = "5px 20px";
        document.getElementById("smallbox1"). style.padding = "5px 20px";
        document.getElementById("smallbox2"). style.padding = "5px 20px";
        document.getElementById("smallbox3"). style.padding = "5px 20px";
        document.getElementById("home_anim").style.visibility = "visible";        
        document.getElementById("home_anim").style.opacity = "1";
        
        
    } else{
        document.getElementById("nav_id").style.padding = "30px 10px";
        document.getElementById("smallbox").style.padding = "10px 25px";
        document.getElementById("smallbox1").style.padding = "10px 25px";
        document.getElementById("smallbox2").style.padding = "10px 25px";
        document.getElementById("smallbox3").style.padding = "10px 25px";
        document.getElementById("home_anim").style.visibility = "hidden";
        document.getElementById("home_anim").style.opacity = "0";
        document.getElementById("home_anim").style.transition = "visibility 1s, opacity 0.5s linear";
        // nav_barsmull.style.padding = "20px 10px";
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

function home(){
    const scrolltohome = document.getElementById("im_the_home");
    scrolltohome.scrollIntoView({
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




