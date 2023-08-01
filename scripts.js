// let prevBtnP1 = document.querySelector('#prev');
let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');

// Grab contents
// Testimonials
let testimonialsTxt = document.getElementsByClassName('testimonials')[0]
// name
let namePerson = document.getElementsByClassName('name')[0];
// person image
let imgPerson = document.getElementsByTagName('img')[0];

console.log(imgPerson);




nextBtn.addEventListener('click', nextFunc);
prevBtn.addEventListener('click', () => location.reload());

function nextFunc() {

    // Replace Data
    testimonialsTxt.textContent = `
    “ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”
    `;
    namePerson.innerHTML = `
    John Tarkpor
    <span class="position">
    Junior Front-end Developer
    </span>
    `;

    imgPerson.src = "./images/image-john.jpg";
    imgPerson.alt = "img-john";

    // Format button
    nextBtn.style.cursor = 'unset';
    prevBtn.style.cursor = 'pointer';

    nextBtn.style.opacity = '.3';
    prevBtn.style.opacity = '1';
}





// prevBtnP2.addEventListener('click', () => {
//     card1.classList.remove('hide');
//     card2.classList.add('hide');
//     console.log("person2 click prev button")
// })