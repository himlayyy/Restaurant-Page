import './style.css'

export default function createNav(){
    const nav = document.createElement("nav");   
    nav.setAttribute("id","nav")

    const restoName = document.createElement("div");
    restoName.innerHTML= "Restoname";

    const linksDiv = document.createElement("div");
    linksDiv.classList.add("nav");   
    const links = ['Part 1', 'Part 2', 'Part 3'];

    links.forEach((link, index) => {
        console.log(index);
        let linkDiv = document.createElement("div");
        linkDiv.innerHTML = `<a href="#">${link}</a>`;
        linksDiv.appendChild(linkDiv);
    });
    nav.appendChild(restoName);
    nav.appendChild(linksDiv);
    document.body.appendChild(nav);
}


