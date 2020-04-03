// ---------------------------------------- Initilise V-tabs ---------------------------------------------------------
initialiseVTabs();
//----------------------------------------- V-tab functions ----------------------------------------------------------

function initialiseVTabs(){//hides all tabs without the 'active-vtab' class (tabs not shown on load)
    const length = $(".v-tabs").children().length

    for (let i = 0; i < length; i++) {

        if ($(".v-tabs").children()[i.toString()].className.indexOf("active-vtab")===-1){

        const contentId = $(".v-tabs").children()[i.toString()].attributes["1"].value;
        $(contentId).hide();

        }
    }
}

// switches content from the current tab to the clicked on tab.
$(".v-tabs").click(function(event){
    const tab = $(event.target); // gets the clicked on tab
    const targetParent = tab.parent(); // find's the parent of the clicked on tab
    const oldContentId = targetParent.children(".active-vtab")["0"].attributes["1"].value; // retrieves the id of the current tab's associated content
    const newContentId = tab.attr('tab-ref'); //retrieves the id of the clicked on tabs associated content

    //checks to see if we clicked on the currently displayed tab.
    if (oldContentId===newContentId){
        return // if so do nothing
    } else { // if not change the tab
        $(oldContentId).toggle();// hides the data you don't want to see
        targetParent.children(".active-vtab").toggleClass("active-vtab"); //removes the active class from the associated tab
        tab.toggleClass("active-vtab"); // adds the active tab to the clicked on tab 
        $(newContentId).toggle("slow"); // shows the contebt asssociated with that tab
    }
    
})
