import homeLoad from './home.js'
import { createFooter } from './site.js';

function capitalize(file) {
    // let regex = /.\/(.+)\.jfif$/;
    let regex = /.\/(.+)\.jpg$/;

    let name = file.match(regex)[1].split("-");
    let uppers = name.map(word => toUpper(word));
    return uppers.join(" ");
}
function toUpper(word) {
    let letters = word.split("");
    return letters[0].toUpperCase() + letters.slice(1).join("");
}
function parseFileNames(r){
    const fileNames = Array.from(r.keys());
    let files = fileNames.map(fileName => capitalize(fileName));
    return files;
}
function importAll(r) {
    return r.keys().map(r)
}
function menuContent() {
    let menu = document.createElement('div');
    menu.classList.add("menu", "center");
    let menuItems = document.createElement("div");
    menuItems.classList.add("menu-items","flex","center");
    
    let menuHeading = document.createElement("h3");
    menuHeading.innerText = "~ MENU ~";
    menu.appendChild(menuHeading);
    const images = Array.from(importAll(require.context('./images/menu/', false, /\.(jpg)$/)));

    //  const imageNames = parseFileNames(require.context('./images/menu/', false, /\.(jfif)$/));
    const imageNames = parseFileNames(require.context('./images/menu/', false, /\.(jpg)$/));
    
    for (let i = 0; i < 9; i++) {
        let menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem.setAttribute("id", i);

        let img = document.createElement("img");
        img.src = images[i];
        menuItem.appendChild(img);

        let p = document.createElement("p");
        p.textContent = imageNames[i];
        menuItem.append(p);
        menuItems.appendChild(menuItem);
    }

    menu.appendChild(menuItems);
    let content = document.querySelector("#content");
    content.appendChild(menu);

    createFooter();
}

function menuHero() {
    console.log('in menuHero!');
    homeLoad("hero-menu", "Menu heading","Menu-subheading");

}
export default function menuLoad() {
    console.log('in menu.js!');
    // heroContent();
    menuHero();
    // heroSwitch("hero-menu", "Menu h/eading","Menu-subheading");
    menuContent();
}


