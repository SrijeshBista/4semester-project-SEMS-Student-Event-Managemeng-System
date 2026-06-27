const hamMenu = document.querySelector(".ham-menu");
const offscreenMenu = document.querySelector(".off-screen-menu");
const closeMenu = document.querySelector(".close-menu");

hamMenu.addEventListener("click", () => {
    offscreenMenu.classList.add("active");
    hamMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    offscreenMenu.classList.remove("active");
    hamMenu.classList.remove("active");
});


// search 

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const searchBtn = document.getElementById("searchBtn");

const eventCards = document.querySelectorAll(".event-card");

function filterEvents(){

    const searchValue = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    eventCards.forEach(card=>{

        const title = card.querySelector("h3").textContent.toLowerCase();
        const category = card.dataset.category;

        const matchTitle = title.includes(searchValue);

        const matchCategory =
        selectedCategory === "all" ||
        category === selectedCategory;

        if(matchTitle && matchCategory){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

}

searchBtn.addEventListener("click",filterEvents);

searchInput.addEventListener("keyup",filterEvents);

categoryFilter.addEventListener("change",filterEvents);