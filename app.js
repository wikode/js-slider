const imagesArray = [
    "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1475809913362-28a064062ccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1470688090067-6d429c0b2600?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1050&q=80"
];

// DOM
const slider = document.querySelector('.slider');
const indicators = document.querySelector('.slider__indicators');
const goBackbtn = document.getElementById('goback-btn');
const goNextbtn = document.getElementById('gonext-btn');

// insérer les images et les indicateurs
imagesArray.map((imageSrc, index) => {
    const imageElement = document.createElement('img');
    imageElement.src = imageSrc;
    imageElement.id = index;
    imageElement.classList.add("slide");
    slider.appendChild(imageElement);

    const indicatorElement = document.createElement("a");
    indicatorElement.href = `#${index}`;
    indicatorElement.classList.add('indicator');
    indicators.appendChild(indicatorElement)
})

// Gestion du scroll
const imageWidth = slider.clientWidth;

slider.scrollTo(0, 0);
let currentIndex = 0;
currentIndex === 0 ? goBackbtn.style.display = "none" : goBackbtn.style.display = "block";
document.querySelector(`a[href='#${currentIndex}']`).classList.add('active');

// gestion de la navigation 
let currentScrollLevel = slider.scrollLeft;
slider.addEventListener('scroll', () => {
    // Changement de l'index en cours
    currentScrollLevel = slider.scrollLeft;
    currentIndex = Math.floor(currentScrollLevel / imageWidth);

    // Affichage de la navigation
    currentIndex === 0 ? goBackbtn.style.display = "none" : goBackbtn.style.display = "block";
    currentIndex === imagesArray.length - 1 ? goNextbtn.style.display = "none" : goNextbtn.style.display = "block";

    // style indicator dynamique
    const allIndicators = [...document.getElementsByClassName('indicator')];
    allIndicators.map(indicator => indicator.classList.remove('active'));

    document.querySelector(`a[href='#${currentIndex}']`).classList.add('active');
})

// Navigation
goBackbtn.addEventListener('click', () => {
    slider.scrollBy(-imageWidth, 0);
})

goNextbtn.addEventListener('click', () => {
    slider.scrollBy(imageWidth, 0);
})