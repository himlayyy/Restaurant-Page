import homeLoad from "./home";
import { createFooter } from "./site";

function contactContent(){
    let contact = document.createElement("div");
    contact.classList.add("contact","center","flex");

    contact.innerHTML = `<form>
    <label for="email"><h3>SUBSCRIBE</h3></label><p>Sign-up to get the newest SuperBowls news!</p>
    <input type="email" name="email" id="email" required placeholder="Email Address">
  </form><button class="button" type="submit">SUBMIT</button>`;

    let content = document.getElementById("content");
    content.append(contact)
    // content.appendChild(contact);
    createFooter();
}
function contactHero(){
    console.log("in contact hero");
    homeLoad("hero-contact","Contact Heading", "Contact subheading");

}
export default function contactLoad(){
    console.log('in contact.js!');    
    contactHero();
    contactContent();
}