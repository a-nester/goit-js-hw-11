import { createFetch } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";
const searchForm = document.querySelector(".search-form");
const gallery = document.querySelector(".gallery")

searchForm.addEventListener("submit", handleClick)

function handleClick(event) {
    event.preventDefault();
    const searchValue = searchForm.elements[0].value.trim();
    if (!searchValue) {
        return console.log("iziToast.Error");
    }
    createFetch(searchValue)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            return response.json()
        })
        .then(data => gallery.innerHTML = createMarkup(data.hits))
        .catch(err => console.log(err))
    
}

