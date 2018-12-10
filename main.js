const slider = [{
        img: 'images/img1.jpg',
        text: 'Pierwszy tekst'
    },
    {
        img: 'images/img2.jpg',
        text: 'Drugi tekst'
    },
    {
        img: 'images/img3.jpg',
        text: 'Trzeci tekst'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');

const time = 2000;
let active = 0;

const changeSlide = () => {
    active++;
    if (active == slider.length) {
        active = 0;
    }
    image.src = slider[active].img; //w obiekcie image do atrybutu src przypisuję wartość atrybutu img obiektu, który jest w tablicy slider pod indeksem active
    h1.textContent = slider[active].text;
}

setInterval(changeSlide, time);