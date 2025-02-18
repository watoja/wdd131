// Get Dates
const currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

const lastModified = document.lastModified;
document.getElementById("modification").innerHTML = lastModified;

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const nav = document.querySelector("nav");

  menuBtn.addEventListener("click", () => {
      nav.classList.toggle("show");
  });
});


//Data
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
    templeName: "Arequipa Peru",
    location: "Arequipa, Peru",
    dedicated: "2015, December, 15",
    area: 26969,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/800x500/2-3c2316607190934fc0265f4107b5013b0cc4b21e.jpeg"
  },

  {
    templeName: "Madrid Spain",
    location: "Madrid, Spain",
    dedicated: "1999, March, 21",
    area: 45800,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/800x500/madrid-spain-temple-954939-wallpaper.jpg"
  },
  {
    templeName: "Halifax Nova Scotia",
    location: "Nova Scotia, Canada",
    dedicated: "1999, November, 14",
    area: 10700,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/halifax-nova-scotia/800x500/halifax-nova-scotia-lds-temple-942187-wallpaper.jpg"
  }
];

//Links
const homeLink = document.getElementById("home");
const oldLink = document.getElementById("old");
const newLink = document.getElementById("new");
const largeLink = document.getElementById("large");
const smallLink = document.getElementById("small");


const container = document.querySelector(".container");

//Event Listeners
homeLink.addEventListener("click", ()=>{
  displayTemples(temples);
});

oldLink.addEventListener("click", ()=>{
  displayTemples(temples.filter(temple => temple.dedicated < "1900"));
});

newLink.addEventListener("click", ()=>{
  displayTemples(temples.filter(temple => temple.dedicated > "2000"));
});

largeLink.addEventListener("click", ()=>{
  displayTemples(temples.filter(temple => temple.area > "90000"));
});

smallLink.addEventListener("click", ()=>{
  displayTemples(temples.filter(temple => temple.area < "10000"));
});

displayTemples(temples);

//Display Temples function
function displayTemples(filteredTemples) {
  container.innerHTML = "";
  filteredTemples.forEach(temple => {
    const card = document.createElement("div");
    card.className = "card";

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.setAttribute("loading", "lazy");
    image.setAttribute("Alt", temple.templeName);
    image.setAttribute("width", "600");
    image.setAttribute("height", "400");

    const name = document.createElement("h2");
    name.innerHTML = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<span class="label">Location: </span>${temple.location}`;

    const dedication = document.createElement("p");
    dedication.innerHTML = `<span class="label">Dedicated: </span>${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<span class="label">Size: </span>${temple.area.toLocaleString('es-ES')} sq ft`;

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(image);
    container.appendChild(card);
  });
}


