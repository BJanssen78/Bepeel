const naviElement = document.querySelector('#navigatie');

let createNaviUl = document.createElement('ul');
naviElement.appendChild(createNaviUl);
createNaviUl.setAttribute('id', 'nav-list');
createNaviUl.setAttribute('class', 'navigatie-lijst');

let navigatieLijst = navigatie.filter(cat => cat.catergorie === 'main')
    .forEach(function(e){
        let createNaviLi = document.createElement('li');
        let createI = document.createElement('i');
        let createNaviA = document.createElement('a');
        let createSpan = document.createElement('span');
        let createSpan2 = document.createElement('span');

        createNaviUl.appendChild(createNaviLi);
        createNaviLi.setAttribute('class', 'navigatie-item');
        createNaviLi.appendChild(createNaviA);
        

        createNaviA.setAttribute('href', e.link);
        createNaviA.setAttribute('target', e.target);
        createNaviA.setAttribute('class', 'navigatie-link');

        createNaviA.appendChild(createSpan2);
        createSpan2.setAttribute('class', 'desktop-view');
        createSpan2.innerHTML = e.titel;
        
        createNaviA.appendChild(createSpan);
        createSpan.setAttribute('class', 'material-symbols-outlined mobile-view');
        // createSpan.setAttribute('class', '');
        createSpan.innerHTML = e.icon;
        
    }
);
