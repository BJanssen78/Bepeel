const footerContent = document.querySelector('#footer');

// Declare element creation
let createUl = document.createElement('ul');
let createH2 = document.createElement('h2');
footerContent.appendChild(createUl);
createUl.setAttribute('id', 'resources');
createUl.appendChild(createH2);
createH2.innerHTML = 'Resources';

let createUl2 = document.createElement('ul');
let createH22 = document.createElement('h2');
footerContent.appendChild(createUl2);
createUl2.setAttribute('id', 'wikis');
createUl2.appendChild(createH22);
createH22.innerHTML = 'Wikis / Libaries';

let createUl3 = document.createElement('ul');
let createH23 = document.createElement('h2');
footerContent.appendChild(createUl3);
createUl3.setAttribute('id', 'programs');
createUl3.appendChild(createH23);
createH23.innerHTML = 'Programs';

let createUl4 = document.createElement('ul');
let createH24 = document.createElement('h2');
footerContent.appendChild(createUl4);
createUl4.setAttribute('id', 'Languages');
createUl4.appendChild(createH24);
createH24.innerHTML = 'Languages';

// Create list content
let footerResources = resources.filter(kanaal => kanaal.kanaal === 'YouTube')
    .forEach(function(e){
        let createLi = document.createElement('li');
        let createA = document.createElement('a');
        let createI = document.createElement('i');
        let createImg = document.createElement('img');
        let createSpan = document.createElement('span');

        createUl.appendChild(createLi);
        createLi.appendChild(createA);
        createA.appendChild(createI);

        createA.setAttribute('href', e.website);
        createA.setAttribute('target', '_blank');

        createI.setAttribute('class', 'fa-brands fa-youtube');

        createA.appendChild(createSpan);
        createSpan.setAttribute('class', 'resource-text');
        createSpan.innerHTML = e.naam;
    }
);

let footerWikis = resources.filter(kanaal => kanaal.kanaal === 'website')
    .forEach(function(e){
        let createLi = document.createElement('li');
        let createA = document.createElement('a');
        let createI = document.createElement('i');
        let createSpan = document.createElement('span');

        createUl2.appendChild(createLi);
        createLi.appendChild(createA);
        createA.appendChild(createI);

        createA.setAttribute('href', e.website);
        createA.setAttribute('target', '_blank')

        createI.setAttribute('class', 'fa-solid fa-globe');

        createA.appendChild(createSpan);
        createSpan.setAttribute('class', 'resource-text');
        createSpan.innerHTML = e.naam;
    }
);

let footerPrograms = resources.filter(kanaal => kanaal.kanaal === 'programs')
    .forEach(function(e){
        let createLi = document.createElement('li');
        let createA = document.createElement('a');
        let createI = document.createElement('i');
        let createSpan = document.createElement('span');

        createUl3.appendChild(createLi);
        createLi.appendChild(createA);
        createA.appendChild(createI);

        createA.setAttribute('href', e.website);
        createA.setAttribute('target', '_blank');

        createI.setAttribute('class', 'fa-sharp fa-solid fa-floppy-disk');

        createA.appendChild(createSpan);
        createSpan.setAttribute('class', 'resource-text');
        createSpan.innerHTML = e.naam;
    }
);

let footerLanguage = resources.filter(kanaal => kanaal.kanaal === 'language')
    .forEach(function(e){
        let createLi = document.createElement('li');
        let createA = document.createElement('a');
        let createI = document.createElement('i');
        let createSpan = document.createElement('span');

        createUl4.appendChild(createLi);
        createLi.appendChild(createA);
        createA.appendChild(createI);

        createA.setAttribute('href', e.website);
        createA.setAttribute('target', '_blank');

        createI.setAttribute('class', 'fa-solid fa-earth-americas');

        createA.appendChild(createSpan);
        createSpan.setAttribute('class', 'resource-text');
        createSpan.innerHTML = e.naam;
    }
);