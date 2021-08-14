// console.log('hello');
import get from './component/getElement.js';
import getUser from './component/fetch.js';
// import displayUser from './component/displayUser.js';

const btn = get('.btn');

// _________________________________________________________________
const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btns = [...document.querySelectorAll('.icon')];

const displayUser = (person) => {
    img.src = person.image;
    value.textContent = person.name;
    title.textContent = `My name is`;
    btns.forEach((Btn) => {
        Btn.classList.remove('active');
    })
    btns[0].classList.add('active');
    btns.forEach((btn) => {
        const label = btn.dataset.label;
        btn.addEventListener('click', () => {
            title.textContent = `my ${label} is`;
            value.textContent = person[label];
            btns.forEach((Btn) => {
                Btn.classList.remove('active');
            })
            btn.classList.add('active');
        });
    });
};
// __________________________________________________________________

const showUser = async () => {
    const person = await getUser();
    displayUser(person);
    // console.log(person);
    // console.log('hello');
}
window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
