const naviElement = document.querySelector('#navigatie');

let createNaviUl = document.createElement('ul');
naviElement.appendChild(createNaviUl);
createNaviUl.setAttribute('id', 'nav-list');
createNaviUl.setAttribute('class', 'navigatie-lijst');

let navigatieLijst = navigatie.filter(cat => cat.catergorie === 'main')
    .forEach(function(e){
        let createNaviLi = document.createElement('li');
        let createNaviA = document.createElement('a');

        createNaviUl.appendChild(createNaviLi);
        createNaviLi.setAttribute('class', 'navigatie-item');
        createNaviLi.appendChild(createNaviA);

        createNaviA.setAttribute('href', e.link);
        createNaviA.setAttribute('target', e.target);
        createNaviA.setAttribute('class', 'navigatie-link');
        createNaviA.innerHTML = e.titel;
    }
);