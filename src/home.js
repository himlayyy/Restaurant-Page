function listen() {
    let heroText = document.querySelector('.hero-text');
    let hero = document.querySelector(".hero");
    heroText.addEventListener("mouseover", function () {
        hero.classList.add('filter');

    });

    heroText.addEventListener("mouseout", function () {
        hero.classList.remove('filter');
    });
}

function heroContent() {
    console.log('in hero content!');
    let hero = document.createElement('div');
    hero.classList.add("hero-home", "hero");
    hero.setAttribute("id", "hero-div");
    console.log(hero.classList);

    const heroText = document.createElement("div");
    heroText.classList.add("hero-text", "flex");
    console.log(heroText.classList);

    let heroHeading = document.createElement("h2");
    heroHeading.textContent = "ORDER NOW";

    let heroSubHeading = document.createElement("h3");
    heroSubHeading.textContent = "Best Rice Bowls Ever!";

    heroText.appendChild(heroHeading);
    heroText.appendChild(heroSubHeading);

    hero.appendChild(heroText);
    document.body.appendChild(hero);
}

function heroSwitch(classList, heading, subHeading) {
    console.log('in hero switch!');

    let hero = document.getElementById("hero-div");
    hero.className = "hero";
    hero.classList.add(classList);

    let heroHeading = document.querySelector("h2");
    heroHeading.textContent = heading;

    let heroSubHeading = document.querySelector("h3");
    heroSubHeading.textContent = subHeading;
}

export default function homeLoad(classList="hero-home", heading="Home heading", subHeading="Home-subheading") {
    if (document.getElementById("hero-div") === null) {
        heroContent();
    }
    else {
        // heroSwitch(classList, heading, subHeading)
        heroSwitch(classList, heading, subHeading);
    }
    listen();
}

