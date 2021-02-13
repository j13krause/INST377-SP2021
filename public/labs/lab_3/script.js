const listContainer = carousel.querySelector(".images")

function moveImages_right(){
    const firstImages = Array.from(listContainer.children).slice(0,3);
    firstImages.forEach((element) => {
        listContainer.removeChild(element);
        listContainer.appendChild(element);
    });
}

function moveImages_left(){
    const lastImages = Array.from(listContainer.children).slice(4,7).reverse();
    lastImages.forEach((element) => {
        listContainer.removeChild(element);
        listContainer.insertBefore(element, listContainer.children[0]);
    });
}


function startPage(){
    carousel.querySelector("button.arrow.prev").addEventListener("click", (event) => {
       moveImages_left();
    });
    carousel.querySelector("button.arrow.next").addEventListener("click", (event) => {
       moveImages_right();
    });
  
}
window.onload = startPage;