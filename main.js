const name = "Andrzej";
let age = 40;


console.log('Siema! Witaj na mojej stronie :). Umiemy korzystać z konsoli, co? ;)')

const about = document.querySelector('.about__paragraph--js')
console.log(about.innerHTML);
about.innerHTML = `<strong>Nazywam się</strong> ${name} i mam ${age} lat`

const paragraphs = document.querySelectorAll('p')
console.log(paragraphs)
console.log(paragraphs[0])

const day = document.querySelector('.day__paragraph--js')
console.log(day.innerHTML)
day.innerHTML = "<strong>koniec tygodnia!<strong>";
console.log(day.innerHTML)