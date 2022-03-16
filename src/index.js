// import 'bootstrap/dist/css/bootstrap.min.css';
import createHeader from './site.js'
import menuLoad from './menu.js'
import bookLoad from './book.js'
import contactLoad from './contact.js'
import homeLoad from './home.js'

console.log('in index');
createHeader();
homeLoad();

let menu = document.querySelector("#menu");
menu.addEventListener("click", function(){
    console.log('in menu!')
    // removeChildren();
    menuLoad();
});

let book = document.querySelector("#book");
book.addEventListener("click", function () {
    removeChildren();
    bookLoad();
});

let contact = document.querySelector("#contact");
contact.addEventListener("click", function () {
    removeChildren();
    contactLoad();
});

let home = document.querySelector("#home");
home.addEventListener("click", function () {
    removeChildren();
    homeLoad();
    console.log('in home!')
});

function removeChildren(){
    let content = document.getElementById('content');
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
}
