// Grab elements
const selectElement = (selector)=>{
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Could not find element with selector: ${selector}, somthing went wrong or you made a typo`);
}
//Nav styles on scroll

const scrollHeader = ()=>{
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15){
        headerElement.classList.add('activated');


    }else{
        headerElement.classList.remove('activated');
    }

}

window.addEventListener('scroll', scrollHeader);

// Open menu & search pop-up

const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = ()=>{
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);

// Open/Close search form popup
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchForm = selectElement('#search-form-container');

formOpenBtn.addEventListener("click", ()=> searchForm.classList.add('activated'))
formCloseBtn.addEventListener("click", ()=> searchForm.classList.remove('activated'))
// -- Close the search form popup on ESC keypress
window.addEventListener('keyup', event=>{
    if(event.key === "Escape"){
        searchForm.classList.remove('activated');
    }
})
// Switch theme/add to local storage

const bodyEl = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');

const currentTheme = localStorage.getItem('currentTheme');

if(currentTheme){
    bodyEl.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', ()=>{
    bodyEl.classList.toggle('light-theme');
    if(bodyEl.classList.contains('light-theme')){
        localStorage.setItem('currentTheme', 'themeActive');
    }else{
        localStorage.removeItem('currentTheme');
    }
})

// Swiper