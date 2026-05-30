
let cart = 0;

function addToCart() {

    cart++;

    document.getElementById("cartCount").innerText = cart;

}

function darkMode() {

    document.body.classList.toggle("dark");

}

let images = [

    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1600",

    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600",

    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1600",

    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600"

];

let index = 0;

function changeImage() {

    const slider = document.getElementById("sliderImage");

    if (slider) {

        slider.src = images[index];

        index++;

        if (index >= images.length) {

            index = 0;

        }

    }

}

setInterval(changeImage, 3000);


function searchProducts() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {

        let title = cards[i]
            .getElementsByTagName("h2")[0]
            .innerText
            .toLowerCase();

        if (title.includes(input)) {

            cards[i].style.display = "flex";

        } else {

            cards[i].style.display = "none";

        }

    }

}


document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {

        searchInput.addEventListener("keyup", function (event) {

            if (event.key === "Enter") {

                searchProducts();

            }

        });

    }

});


const navItems = document.querySelectorAll(".navbar p");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        const category = item.innerText.toLowerCase();

        const cards = document.querySelectorAll(".card");

        if (category === "all") {

            cards.forEach(card => {

                card.style.display = "flex";

            });

            return;

        }

        cards.forEach(card => {

            const title = card
                .querySelector("h2")
                .innerText
                .toLowerCase();

            if (title.includes(category)) {

                card.style.display = "flex";

            } else {

                card.style.display = "none";

            }

        });

    });

});



function showMessage(text) {

    const msg = document.createElement("div");

    msg.innerText = text;

    msg.style.position = "fixed";
    msg.style.top = "20px";
    msg.style.right = "20px";
    msg.style.background = "#232f3e";
    msg.style.color = "white";
    msg.style.padding = "12px 20px";
    msg.style.borderRadius = "6px";
    msg.style.zIndex = "9999";

    document.body.appendChild(msg);

    setTimeout(() => {

        msg.remove();

    }, 2000);

}


function addToCart() {

    cart++;

    document.getElementById("cartCount").innerText = cart;

    showMessage("Product Added To Cart");

}