
const showMobileMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('showMobileMenu')
        })
    }
}

showMobileMenu('mobileBars','menuSub-two')


const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2000,
    reset: true
})

// Active Menu
const activeMenu = document.querySelectorAll('.menu-btns')

activeMenu.forEach(n => n.addEventListener('click', menuBtnsActive))

function menuBtnsActive () {
    activeMenu.forEach(n => n.classList.remove('menuBtnActiveClass'))
    this.classList.add('menuBtnActiveClass')

    const removeMobileMenu = document.getElementById('menuSub-two')
    removeMobileMenu.classList.remove('showMobileMenu')
}

// Home
sr.reveal('.text-content', {})
sr.reveal('.homeImg', {delay: 200})

// ABOUT
sr.reveal('.aboutImg', {})
sr.reveal('.sectionTwo-subTitle', {delay: 200})
sr.reveal('.about-paragraph', {delay: 400})

// Projects
sr.reveal('.sectionThree-main', {})
// sr.reveal('.project-link', {delay: 200})

// Skills
sr.reveal('.sectionFour-main', {})

// Contact
sr.reveal('.sectionFive-main', {})






