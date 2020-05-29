function changeLang(element){
    de = document.querySelectorAll(".german");
   
    en = document.querySelectorAll(".england");
    
    pl = document.querySelectorAll(".polen");
    
if(element == "englandin"){
    en.forEach(element => {
        element.setAttribute("style","display:inline-block;");
    });
    de.forEach(element => {
    element.setAttribute("style", "display:none;");
    });
    pl.forEach(element => {
        element.setAttribute("style", "display:none;");
            });

}
else if(element == "polenin"){
    pl.forEach(element => {
    element.setAttribute("style","display:inline-block;");
    });
    de.forEach(element => {
        element.setAttribute("style", "display:none;");
            });
            en.forEach(element => {
                element.setAttribute("style", "display:none;");
                    });
}
else {
    de.forEach(element=>{
        element.style.display = "inline-block"
    });
    en.forEach(element=>{
        element.setAttribute("style", "display:none;");
    });
    pl.forEach(element=>{
        element.setAttribute("style", "display:none;");
    });
}
}

function move(element){
    document.querySelector(element).scrollIntoView({behavior:'smooth'});
}

var myButton = document.getElementById("myBtn");
function scrollPlus(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        myButton.style.display = "block";
    }
    else {
        myButton.style.display = "none";
    }
}
 window.onscroll = function() {scrollPlus()};

function upstairs(){
    document.body.scrollTo({top:0, behavior:'smooth'});
    document.documentElement.scrollTo({top:0, behavior:'smooth'});
}