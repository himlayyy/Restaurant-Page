import homeLoad from "./home";
import { createFooter } from "./site";

function bookContent(){
    let book = document.createElement("div");
    book.classList.add("book","center")
    book.setAttribute("id", "book-items");

    let bookText = document.createElement("div");
    bookText.classList.add("flex", "book");

    let h3= document.createElement("h3");
    h3.innerText = "SUPERBOWLS AT YOUR DOORSTEP";

    let bookTextP = document.createElement("p");
    bookTextP.innerText = "SUPERBOWLS NOW OFFERS OUR AWARD-WINNING, SCRUMPTIOUS RICE BOWLS NATIONWIDE WITH GOLD CAULDRON—STRAIGHT FROM LOS ANGELES RIGHT TO YOUR DOORSTEP!"

    
    let bookBtn = document.createElement("button");
    bookBtn.innerText = "ORDER NOW";
    bookText.append(h3,bookTextP, bookBtn);
    book.appendChild(bookText);
    let content = document.getElementById("content");
    content.prepend(book);
}
function bookHero() {
    console.log("in book hero!");
    homeLoad("hero-book", "Book heading", "Book subheading");

}
export default function menuLoad() {
    console.log('in book.js!');
    
    bookHero();
    createFooter();
    bookContent();
}

