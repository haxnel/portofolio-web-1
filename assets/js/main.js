/* === Menu Show Y Hidden === */

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose  = document.getElementById('nav-close')


/* === Menu Show === */
/* Validasi dengan if else */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/* === Menu Hidden === */
if(navClose){
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu')
    })
}

/* === Menghapus menu mobile === */

/* === Accordion Skills === */

/* === Qualification Tabs === */

/* === Resume === */


