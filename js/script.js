let tabs= document.querySelectorAll(".tabs-js h4");
let tabContents= document.querySelectorAll(".tab-contents-js #div");

tabs.forEach ( function (tab, index ){
    tab.addEventListener ("click", function () {
        tabs.forEach( function(tab){
            tab.classList.remove("current");
        })
        tabContents.forEach(  function(contents){
            contents.classList.remove("current");
        })
        tabs[index].classList.add("current");
        tabContents[index].classList.add("current");
    })
})

// NAVBAR MENU

let links= document.querySelector(".links-link");
let icons= document.querySelector(".nav-toggler");

icons.addEventListener("click", function () {

    links.classList.add("show")
})

const arrowM =document.querySelector(".arrow-m");

arrowM.addEventListener("click", ()=>{
    links.classList.remove("show")
})



