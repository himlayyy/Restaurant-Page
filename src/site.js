import './style.css'
import restoLogoUrl from './images/logo.svg'

export default function createHeader(){
    const header = document.createElement('header');
    header.classList.add('header');

    const restoHome = document.createElement('div');
    restoHome.classList.add('header-groups');
    restoHome.setAttribute('id', 'home');

    const logo = document.createElement("img");
    logo.classList.add('header-item');
    logo.setAttribute('id', 'logo');
    logo.src = `${restoLogoUrl}`;
    restoHome.append(logo);

    const restoName = document.createElement('h1');
    restoName.classList.add('header-item');
    restoName.innerText = "Super Bowls";
    restoHome.appendChild(restoName);

    header.appendChild(restoHome);
    document.body.appendChild(header);    
    createNav();
}

function createNav(){    
    const header = document.querySelector('header');
    const nav = document.createElement("nav");
    header.appendChild(nav);
    nav.classList.add("header-groups");
    // nav.classList.add("id", "nav");   
    nav.setAttribute("id", "nav");   

    
    createLink("Menu");
    createLink("Book");
    createLink("Contact");  
     

function createLink(item){
    const nav = document.querySelector("nav");
    const menu = document.createElement('div');
    const link = document.createElement('a');
    link.id = item.toLowerCase();
    link.href = "#";
    link.innerText = item;
    link.classList.add("header-item");

    menu.append(link);
    nav.append(menu);
}

    
    

    // links.forEach(link => link.addEventListener("click", function(e){
    //     console.log(e.target);
    // }));

    // const tabs = document.getElementsByClassName("link");
    // tabs.forEach(tab => tab.addEventListener("click", function(e){
    //     console.log(e.target);
    // }))
    // console.log(tabs);


    // nav.appendChild(restoName);
    // nav.appendChild(linksDiv);
    // document.body.appendChild(nav);
}


// export default function createFooter(){
//     const nav = document.createElement
// }


