const projectPageContent = document.querySelector('#content');
const projectPageSideNav = document.createElement('div');
const projectPageMaincontent = document.createElement('div');

projectPageContent.appendChild(projectPageSideNav);
projectPageSideNav.setAttribute('class', 'side-nav');
projectPageSideNav.setAttribute('id', 'side-nav');

projectPageContent.appendChild(projectPageMaincontent);
projectPageMaincontent.setAttribute('class', 'project-content');
projectPageMaincontent.setAttribute('id', 'project-content');

let projectPageMainContent = document.querySelector('#project-content');

let createSideNavUl = document.createElement('ul');
projectPageSideNav.appendChild(createSideNavUl);
createSideNavUl.setAttribute('class', 'side-nav-list');
createSideNavUl.setAttribute('id', 'side-nav-list');

let sideNavMenu = navigatie.filter(projects => projects.catergorie === 'projects')
    .forEach(function(e){
        let createLi = document.createElement('li');
        let createbtn = document.createElement('button');
        let createA = document.createElement('a');

        createSideNavUl.appendChild(createLi);
        createLi.setAttribute('class', 'side-nav-item');

        createLi.appendChild(createA);
        createA.setAttribute('class', 'side-nav-btn');
        createA.setAttribute('href', e.link);
        // createA.setAttribute('value', e.titel);
        createA.setAttribute('id',  e.titel);
        createA.innerHTML = e.titel;
    });

const btnList = document.querySelectorAll('#side-nav-list .side-nav-btn');
    Array.from(btnList).forEach(function(btn){
        btn.addEventListener('click', function(btnEvent){
            let btnTitle = btnEvent.target.innerHTML;
            console.log(btnTitle);
            })
    });