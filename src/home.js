function listen() {
    let heroText = document.querySelector('.hero-text');
    let hero = document.querySelector(".hero.hero-home");
    heroText.addEventListener("mouseover", function () {
        // hero.classList.remove('hero-home');
        hero.classList.add('filter');
        // console.log("doing stuff");
    });

    heroText.addEventListener("mouseout", function () {
        // console.log(hero.classList);
        // hero.classList.add('hero-home');
        hero.classList.remove('filter')
        // console.log("doing stuff");
    });
}

function homeContent() {
    let hero = document.createElement('div');
    hero.classList.add("hero", "hero-home");

    const heroText = document.createElement("div");
    heroText.classList.add("hero-text", "flex");

    let heroHeading = document.createElement("h2");
    heroHeading.textContent = "ORDER NOW";

    let heroSubHeading = document.createElement("h3");
    heroSubHeading.textContent = "Best Rice Bowls Ever!";

    heroText.appendChild(heroHeading);
    heroText.appendChild(heroSubHeading);

    hero.appendChild(heroText);
    let content = document.getElementById("content");
    content.appendChild(hero);    
}

export default function homeLoad() {
    if (document.getElementById('content') === null) {
        let content = document.createElement('div');
        content.setAttribute("id", "content");
        document.body.appendChild(content);
    }
    console.log(content)
    homeContent();
    listen();
}

