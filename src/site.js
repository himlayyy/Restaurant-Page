import './style.css'
import restoLogoUrl from './images/logo.svg'


export default function createHeader() {
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

function createNav() {
    const header = document.querySelector('header');
    const nav = document.createElement("nav");
    header.appendChild(nav);
    nav.classList.add("header-groups");
    // nav.classList.add("id", "nav");   
    nav.setAttribute("id", "nav");

    const hamburger = document.createElement("div");
    hamburger.className = "hamburger";
    
    for(let i=0;i<3;i++){
        let bar = document.createElement("div");
        bar.className = "bar";
        hamburger.appendChild(bar);
    }
    
    nav.appendChild(hamburger);

    createLink("nav","Menu","header-item");
    createLink("nav","Book","header-item");
    createLink("nav","Contact","header-item");

}

function createFooterSections(item){
    let div = document.createElement("div");
    div.innerHTML = item;
    div.className = "footer-col";
    return div;
}
function createLink(parent,item, classCss) {
    console.log(new Error(TypeError).stack);  
    const nav = document.querySelector(parent);
    // const menu = document.createElement('div');
    const link = document.createElement('a');
    link.id = item.toLowerCase();
    link.href = "#";
    link.innerText = item;
    link.classList.add(classCss);

    // menu.append(link);
    // nav.append(menu);
    nav.appendChild(link);
}

export function createFooter() {
    let content = document.getElementById("content");
    let footer= document.createElement("footer");
    // footer.className = "center";

    let hr = document.createElement("hr");
    footer.appendChild(hr);

    let footerContents = document.createElement("div");
    footerContents.classList.add("flex", "footer-cols");
    footerContents.setAttribute("id", "footer");    

    let footerItems =[`<p><em>CHINATOWN</em></p><p>943 N. Broadway #102</p>
    <p>Los Angeles, CA 90012</p>    
    <p>Thursday - Sunday 12-8 PM</p>`, `<h6>~  THANK YOU  ~</h6>`,`<p><em>HIGHLAND PARK</em></p><p>110 N. Ave 56</p><p>Los Angeles, CA 90042</p><p>Thursday - Sunday 12-8 PM</p>`]
    
    footerItems.forEach((item) => {
        let content = createFooterSections(item);
        footerContents.appendChild(content);
    });
    // footerCols.appendChild(footer);
    footer.appendChild(footerContents);
    content.append(footer);
}


