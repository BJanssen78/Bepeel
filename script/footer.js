const footerContent = document.getElementById('footer');

// Declare element creation
let createUl = document.createElement('ul');
let createLi = document.createElement('li');
let createA = document.createElement('a');
let createImg = document.createElement('img');
let createH2 = document.createElement('h2');

// Declare arrays.
let lijstVanNamen = resources.map(namen => namen.naam);

footerContent.appendChild(createH2);
createH2.innerHTML = 'Resources:';
footerContent.appendChild(createUl);

// Create basic footer content.
let basicFooter = resources.forEach(function(e){
    let liList = '';

    for(let i=0; i < lijstVanNamen.length; i++){
        liList += '<li class="footer-resource-item">' + lijstVanNamen[i] + '</li>';
        document.getElementById('footer').innerHTML = liList;
    }
    
});