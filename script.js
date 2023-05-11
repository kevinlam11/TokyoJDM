// INDEX SLIDER
// First, we’re using querySelectorAll to get the slides from our container.
var slides = document.querySelectorAll("#slides .slide");
// First, we’re using querySelectorAll to get the slides from our container.
var currentSlide = 0;
// Then we’re creating an interval to show the next slide every two seconds (expressed as 2000 ms).
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  // First, we change the current slide’s class so it’s not showing. The CSS transition handles the fade out automatically.
  slides[currentSlide].className = "slide";
  // Then we add one to the current slide, but we use the % operator to cycle back to zero if we’ve reached the end of the slides. As a quick reminder, the % operator divides two numbers and spits out the remainder. This is great for cases where you have to do math with cycles like a clock or a calendar. In this case, we have 5 slides, so here’s what happens with each number: 1%5=1, 2%5=2, 3%5=3, 4%5=4, and 5%5=0.
  currentSlide = (currentSlide + 1) % slides.length;
  // Once we have the new slide’s number, we change that slide’s class so that the slide is showing. Once again, our CSS opacity transition handles the fade effect automatically.
  slides[currentSlide].className = "slide showing";
}

// JSON REQUEST
let http = new XMLHttpRequest();
http.open("get", "products.json", true);
http.send();
http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(this.responseText);
    let output = "";
    for (let item of products) {
      output += `
            <div class="product">
               <img src="${item.image}" alt="${item.description}">
               <p class="title">${item.title}</p>
               <p class="description">${item.description}</p>
               <p class="price">
                  <span>${item.price}</span>
               </p>
               <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
            </div>
         `;
    }
    document.querySelector(".products").innerHTML = output;
  }
};
// PRODUCT SLIDER
var i = 0;
var images = [];
var time = 3000;

images[0] = `assets2/AAA.jpg`;
images[1] = `assets2/BBB.jpg`;
images[2] = `assets2/CCC.jpg`;

function changeIMG() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeIMG()", time);
}
window.onload = changeIMG;
