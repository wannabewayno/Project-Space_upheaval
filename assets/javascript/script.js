
document.body.onresize = dynamicSize;
dynamicSize();

function dynamicSize(){
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    if (screenWidth < 850){
        console.log(screenWidth);
        console.log("Screen under 1100? :"+(screenWidth < 1100));
        $("#about-me").css("height","auto");
        $("#portfolio").css("height","auto");
        $("#contact").css("height","auto");

    } else if (screenWidth > 850) {
        console.log(screenWidth);
        console.log("Screen under 1100? :"+(screenWidth > 1100));
        $("#about-me").css("height",screenHeight);
        $("#portfolio").css("height",screenHeight);
        $("#contact").css("height",screenHeight);
    }
    $("#first-impressions").css("height",screenHeight);
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
