
document.body.onscroll = scrollSensitivity;

function scrollSensitivity(){
    const docks = $("dock")
    console.log(docks);
    
    const screenPos = document.body.getBoundingClientRect();
    console.log(screenPos);
    const screenHeight = window.innerHeight;
    const navEl = document.querySelector("nav")
    const navHeight = navEl.clientHeight
    const navPos = navEl.getBoundingClientRect();
    console.log(navEl.clientHeight);
    console.log(navPos);
    console.log(navHeight);
    const screenWidth = window.innerWidth;
}


// document.body.onscroll = (function(){
//    const screenHeight = window.innerHeight;
//    if(document.body.getBoundingClientRect().top < (screenHeight)*-1){
//        $("nav").css("position","sticky");
//    }
// });



// var canvas = document.getElementById("mycanvas");
// var ctx = canvas.getContext("2d");
// // Create gradient
// var grd = ctx.createLinearGradient(0, 0, 200, 0);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "white");

// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 150, 80);
