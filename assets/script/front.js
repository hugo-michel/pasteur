//observer pr show/hide le btn de scroll top. Reglé si topsection visible à 50%
//classe isVisible sert uniquement pour comme marqueur pour le burger quand topsection n'est pas sur la page
const topSection = document.getElementById('topSection');
const toTheTtop = document.querySelector('.scrollToTheTop');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        toTheTtop.classList.toggle("hide", entry.isIntersecting);
        topSection.classList.toggle("IsVisible", entry.isIntersecting);
    });
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('deplace');
    });
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.toggle('deplace');
    }))
}, {
    threshold: 0.5,
})
observer.observe(topSection);

//hamburger

const hamburger = document.querySelector('.hamburger');
let hamburgerStyle = window.getComputedStyle(hamburger);
const navMenu = document.querySelector('.nav-menu');
const navbarFront = document.querySelector('.navbarFront');
const sectionPresentation = document.getElementById('sectionPresentation');
const sectionNews = document.getElementById('sectionNews');
const sectionAcces = document.getElementById('sectionAcces');
const sectionPraticien = document.getElementById('sectionPraticien');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navMenu.classList.toggle('backdropBlur');
    document.body.classList.toggle('noScroll')
    if (!(topSection.classList.contains('IsVisible'))) {
        toTheTtop.classList.toggle("hide")
    }
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navMenu.classList.toggle('backdropBlur');
    if (hamburgerStyle.getPropertyValue('display') === 'block') {
        document.body.classList.toggle('noScroll')
    }
    if ((!(topSection.classList.contains('IsVisible'))) && (toTheTtop.classList.contains('hide')) ) {
        
            toTheTtop.classList.remove("hide")
     } else {
            return
        }  
}))

//accordeon pour la section faq

const sectionFaq = document.getElementById('sectionFaq');

if (sectionFaq) {

const containerFaq = sectionFaq.querySelectorAll('div');
const faqExpand = document.getElementById('faqExpand');
const faqBtn = document.querySelectorAll('.faqBtn');

//btn expand/close all
faqExpand.addEventListener('click', () => {
    containerFaq.forEach(element => {
        if (faqExpand.textContent === 'Ouvrir toutes les réponses') {
            element.firstElementChild.lastElementChild.textContent = 'Fermer';
            element.lastElementChild.setAttribute('aria-hidden', 'false');
            element.lastElementChild.classList.remove('reponseHide');
        } else {
            element.firstElementChild.lastElementChild.textContent = 'Ouvrir';
            element.lastElementChild.setAttribute('aria-hidden', 'true');
            element.lastElementChild.classList.add('reponseHide');
        }
    })
    faqExpand.textContent = faqExpand.textContent === 'Ouvrir toutes les réponses' ? 'Fermer toutes les réponses' : 'Ouvrir toutes les réponses';
    faqExpand.getAttribute('aria-expanded') === 'false' ? faqExpand.setAttribute('aria-expanded', 'true') : faqExpand.setAttribute('aria-expanded', 'false');
})
//btn pr chaque faq
faqBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.nextElementSibling.classList.toggle('reponseHide');
        btn.getAttribute('aria-expanded') === 'false' ? btn.setAttribute('aria-expanded', 'true') : btn.setAttribute('aria-expanded', 'false');
        btn.textContent === 'Ouvrir' ? btn.textContent = 'Fermer' : btn.textContent = 'Ouvrir';
        btn.parentElement.nextElementSibling.getAttribute('aria-hidden') === 'true' ? btn.parentElement.nextElementSibling.setAttribute('aria-hidden', 'false') : btn.parentElement.nextElementSibling.setAttribute('aria-hidden', 'true');
    })
})
}

//skip to main

const skipToContent = document.getElementById('skipToContent');

skipToContent.addEventListener('focus', () => {
    skipToContent.classList.toggle('skipHidden')
    skipToContent.classList.toggle('skipShow')   
});
skipToContent.addEventListener('blur', () => {
    skipToContent.classList.toggle('skipHidden')
    skipToContent.classList.toggle('skipShow')   
})