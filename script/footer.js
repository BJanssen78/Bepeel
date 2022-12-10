const footerContent = document.querySelector('#footer');

// Declare element creation
// let createUl = document.createElement('ul');
// let createLi = document.createElement('li');
// let createA = document.createElement('a');
// let createImg = document.createElement('img');
let createH2 = document.createElement('h2');
// let createSpan = document.createElement('span');
// let createDiv = document.createElement('div');

// Declare arrays.
let lijstVanNamen = resources.map(namen => namen.naam);

footerContent.appendChild(createH2);
createH2.innerHTML = 'Resources';

let basicFooter2 = resources.forEach(function(e){

    let createA = document.createElement('a');
    let createImg = document.createElement('img');

    let createSpan = document.createElement('span');
    
    // Create link
    footerContent.appendChild(createA);
    createA.setAttribute('class', 'resource-link');
    createA.setAttribute('href', e.website);
    createA.setAttribute('target', '_blank');
    
    createA.appendChild(createImg);
    createImg.setAttribute('class', 'resource-logo');
    createImg.setAttribute('src', e.externLogo);
    createImg.setAttribute('alt', e.naam);
    createImg.setAttribute('title', e.naam);

    createA.appendChild(createSpan);
    createSpan.setAttribute('class', 'resource-text');
    createSpan.innerHTML = e.naam;
});