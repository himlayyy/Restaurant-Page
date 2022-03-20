// import 'bootstrap/dist/css/bootstrap.min.css';
// import initSite from './site.js'
import createHeader from './site.js'
import createLink from './site.js'
import menuLoad from './menu.js'
import bookLoad from './book.js'
import contactLoad from './contact.js'
import homeLoad from './home.js'

console.log('in index');
createHeader();
homeLoad();

let menu = document.querySelector("#menu");
menu.addEventListener("click", function () {
    cleanUp();
    menuLoad();
});

let book = document.querySelector("#book");
book.addEventListener("click", function () {
    cleanUp();
    bookLoad();
});

let contact = document.querySelector("#contact");
contact.addEventListener("click", function () {
    cleanUp();
    console.log("contact cliked, calling contact Load");
    contactLoad();
});

let home = document.querySelector("#home");
home.addEventListener("click", function () {
    removeChildren('#content');
    homeLoad()
});

let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
    console.log("clicked");
    toggleHamburger();
    // let hamburger = document.querySelector(".hamburger");
   
    // let links = document.querySelectorAll("nav a");
    // console.log(links);
    // links.forEach(link => link.classList.toggle("show"));
    // hamburger.classList.toggle("show");
    // // nav.
    // let text = document.querySelector(".hero-text.flex")
    // let tChild = Array.from(text.children);
    // console.log(tChild);
    // tChild.forEach((child) =>{
    //     removeChildren(child);
    // })
    // removeChildren(".hero-text");
    // console.log('removed hero text');
    // createLink(".hero-text", "Menu", "blank");
    // createLink();
    // createLink("hello");

    // createLink(".hero-text.flex","Book");
    // createLink(".hero-text.flex","Contact");

});
function toggleHamburger(){
    let hamburger = document.querySelector(".hamburger");
   
    let links = document.querySelectorAll("nav a");
    console.log(links);
    links.forEach(link => link.classList.toggle("show"));
    hamburger.classList.toggle("show");
    // nav.
}

function cleanUp() {
    toggleHamburger();
    removeChildren('#content');
    createContent();
}
function removeChildren(selector) {
    console.log(selector);
    let content = document.querySelector(selector);
    if (content !== null) {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        };
    };
}
function createContent() {
    if (document.getElementById('content') === null) {
        let content = document.createElement('div');
        content.setAttribute("id", "content");
        document.body.appendChild(content);
    }
}