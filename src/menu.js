// import menuImgUrl from './images/pexels-mikhail-nilov-6740513.jpg'
// import menuImgUrl from './images/01.png'
// import gochujang from './images/gochujang-ranch-crispy-chicken-bowl.jfif'
// import menuImgUrl from './images/pexels-mikhail-nilov-6740521.jpg'

// function menuContent(heroImage){
//     const menuDiv = document.createElement('div');
//     menuDiv.classList.add("")

// }

// function menuItems(){

// }
function createImgTag(image, item) {
    console.log(`adding ${image} to ${item}`);
    // let img = document.createElement("img");
    // img.setAttribute('src', itemImage[1]);
    // itemImage[0].appendChild.img;

}

function capitalize(file) {
    let regex = /.\/(.+)\.jfif$/;
    let name = file.match(regex)[1].split("-");
    let uppers = name.map(word => toUpper(word));
    console.log(uppers.join(" "));
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
    menu.classList.add("menu");
    let menuItems = document.createElement("div");
    menuItems.classList.add("menu-items");
    // menuItems.innerHTML = 
    // `<div class="menu-item" id="1"></div>
    //     <div class="menu-item" id="2"></div>
    //     <div class="menu-item" id="3"></div>
    //     <div class="menu-item" id="4"></div>
    //     <div class="menu-item" id="5"></div>
    //     <div class="menu-item" id="6"></div>
    //     <div class="menu-item" id="7"></div>
    //     <div class="menu-item" id="8"></div>
    //     <div class="menu-item" id="9"></div>`



    // menu.appendChild(menuItems);


    // const items = document.querySelectorAll(".menu-item");
    // items.forEach(item => createImgTag(item));

    const images = Array.from(importAll(require.context('./images/menu/', false, /\.(jfif)$/)));

    // const imageNames = Array.from(require.context('./images/menu/', false, /\.(jfif)$/));

    const imageNames = parseFileNames(require.context('./images/menu/', false, /\.(jfif)$/));
    // console.log(fileNames);
    
    // console.log(imageNames);
    // const itemImages = images.map(function(e, i){
    //     return [e, items[i]];
    // })
    // console.log(itemImages);
    // itemImages.forEach(itemImage => createImgTag(itemImage[0], itemImage[1]));
    // itemImages.forEach(itemImage => createImgTag(itemImage))
    // console.log("Done adding images")
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
        // console.log(menuItem);
        menuItems.appendChild(menuItem);
    }

    menu.appendChild(menuItems);
    let content = document.querySelector("#content");
    content.appendChild(menu);

    // console.log(content);
}
function menuHero() {
    console.log('in menuHero!');
    let heroImage = document.querySelector(".hero.hero-home");
    heroImage.classList.remove("hero-home");
    heroImage.classList.add("hero-menu");

    menuContent();
}
export default function menuLoad() {
    console.log('in menu.js!');
    menuContent();
}

