
// ------------------------ initialisations -------------------------------
document.body.onscroll = scrollSensitivity;
document.body.onresize = reSize;
reSize();

// ------------------------- listeners -------------------------------------

$('#menu').click(function(){

    if($(".burger-box").is(".pulse")){
        $('.burger-box').removeClass("pulse");
    }

    if ($(this).is(".is-active")){
        $(this).toggleClass('is-active');
        $(".arc-container").toggleClass("show");
        $(".linkedin").toggleClass("show newTime")
        $(".github").toggleClass("show newTime")
        $(".pdf").toggleClass("show newTime")
    } else {
        $(this).toggleClass('is-active');
        $(".arc-container").toggleClass("show");
        $(".linkedin").toggleClass("show")
        $(".github").toggleClass("show")
        $(".pdf").toggleClass("show")
        let promise = new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve("newTime")
            }, 1000);
        });
        promise.then(function(timeClass){
        $(".linkedin").toggleClass(timeClass);
        $(".github").toggleClass(timeClass);
        $(".pdf").toggleClass(timeClass);
        });
    }
});

// ---------------------- global variables --------------------------------
const snapProximity = 80; //pixels
const ports = $("port");
const numberOfPorts = ports.length;
const portEls = [];
const navEl = document.querySelector("nav");
const navHeight = navEl.clientHeight;

for (let i = 0; i < numberOfPorts; i++) {
    portEls.push(ports[i]);
}
console.log(portEls);

function scrollSensitivity(){
    let count = 0
    portEls.forEach(port => {
        count++
        portPos = port.getBoundingClientRect().y
        if (portPos < snapProximity && portPos > -snapProximity){
             $(port).css("scroll-snap-align", "start")
             if (count === 3){
                $(".burger-box").addClass("pulse")
             }
        } else {
            $(port).css("scroll-snap-align", "none");
            if(count === 3){
                $(".burger-box").removeClass("pulse")
            }
        }
    });
}


function reSize(){
    dockHeight();
    arrowWidth();
    featuredHeader();
}

function dockHeight(){
    //get nav height for everyscreen re-size
    const navheight = $("nav").css("height");
    //set all nav docks to the same height.
    $('dock').css("height",navheight);
}

function arrowWidth(){
    function scrollBarMeasure(){
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "scrollbar-measure";
        document.body.appendChild(scrollDiv);

        // Get the scrollbar width
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    
        // Delete the DIV 
        document.body.removeChild(scrollDiv);
        return scrollbarWidth; // Mac:  15
    }
    scrollBarWidth = scrollBarMeasure();
    console.log(scrollBarWidth);
    const width = (window.innerWidth - scrollBarWidth)/2+"px"+" solid"+" transparent"
    console.log(width);
    $('#arrow').css({"border-left":width, "border-right":width});
}

function featuredHeader(){
    const headerWidth = parseInt($(".featured-header").css("width").split("px")[0]);
    const headerHeight = parseInt($(".featured-header").css("height").split("px")[0]);
    console.log(headerWidth);
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    const headerOffset = screenWidth/2 - headerWidth/2 + "px"
    console.log(headerOffset);
    $(".featured-header").css("left",headerOffset);
    $('.featured-header').css("top",- 0.75*headerHeight)
    
}
