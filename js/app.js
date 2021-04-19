/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/



//all section elements in the document
const mySections = document.querySelectorAll("section");
const myUl = document.getElementById("navbar__list");
const frag = document.createDocumentFragment(); 
/**
 * End Global Variables
 * Start Main Functions
 * 
*/
function createNav(){
    mySections.forEach((section)=> {
        const list = document.createElement("li");
        const link = document.createElement("a");
        link.classList.add("menu__link");
        let sectionName = section.getAttribute("data-nav"); //ex: section 1
        let text = document.createTextNode(sectionName); 
        link.appendChild(text);
        list.appendChild(link);
        frag.appendChild(list);
        //When clicking an item from the navigation menu, the link should scroll to the appropriate section
        list.addEventListener("click" , function(){
            section.scrollIntoView({behavior: "smooth"});
        })
    })
myUl.appendChild(frag);

}
//Scroll to highlight a specific section
 function scrollToHighlight(){
     window.addEventListener("scroll" , function(){
         mySections.forEach((section)=> {
             let view = section.getBoundingClientRect();
             if (view.top >= -250 && view.top <= 200) {
                 //add active class to a specific section
                 section.classList.add("your-active-class");
                 // to highlight a specific link in the nav-menue
                 const allLinks = document.querySelectorAll("a");
                 allLinks.forEach((alink) => {
                    alink.classList.remove("activeLink");
                 if(section.getAttribute("data-nav") === alink.textContent){
                     alink.classList.add("activeLink");
                 }
                      })
               }
             else {
                 //to remove all other active class from other sections
                 section.classList.remove("your-active-class");
             }      
         })
     })
}

/**
 * End Main Functions
 * Begin helper Functions
 * 
*/

// build the nav
createNav();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End helper Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
scrollToHighlight();

