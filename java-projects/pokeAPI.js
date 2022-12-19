const apiLink = 'https://pokeapi.co/api/v2/pokemon/';
const closeApiLink = '/'
const apiContent = document.querySelector('#content');
const offsetLink = '?offset='
let offset = 0;
let newApiLink = apiLink+offsetLink+offset;
console.log(newApiLink);

let createUL = document.createElement('ul');
let createBtnNext = document.createElement('button');
let createBtnPrev = document.createElement('button');
let createDivLijst = document.createElement('div');
let createDivImage = document.createElement('div');

apiContent.appendChild(createBtnPrev);
apiContent.appendChild(createBtnNext);
createBtnNext.setAttribute('class', 'pokemon-btn');
createBtnNext.setAttribute('id', 'pokemon-btn-next');
createBtnPrev.setAttribute('id', 'pokemon-btn-prev');
createBtnPrev.setAttribute('class', 'pokemon-btn');
createBtnNext.innerHTML = 'Next 20 Pokemon';
createBtnPrev.innerHTML = 'Previous 20 Pokemon';

apiContent.appendChild(createDivLijst);
apiContent.appendChild(createDivImage);
createDivLijst.setAttribute('id', 'lijst-container');
createDivLijst.setAttribute('class', 'lijst-container');
createDivImage.setAttribute('id', 'pokemon-image');
createDivImage.setAttribute('class', 'pokemon-frame');

createDivLijst.appendChild(createUL);
createUL.setAttribute('class', 'pokemon-lijst');
createUL.setAttribute('id', 'pokemon-lijst');



async function getPokemonDetails (pokemonName){
    try{
        const pokeDetail = await fetch(apiLink + pokemonName + closeApiLink)
        .then((response) => response.json())
        .then((dataDetails) => {

            createDivImage.replaceChildren();
            let getPokemonDetails = Object.values(dataDetails);
            let pokemonImageLink = getPokemonDetails[14].other["official-artwork"].front_default;
            let createImg = document.createElement('img');

            createDivImage.appendChild(createImg);
            createImg.setAttribute('class', 'pokemon-image');
            createImg.setAttribute('src', pokemonImageLink);
            })
            

        // })
    }
    catch (error){
        console.log(error);
    }
};

async function getData(newApiLink){
    console.log(newApiLink);
    try {
        const res = await fetch(newApiLink)
        
        
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);

            let getDataToArray = Object.values(data.results);

            // console.log(getDataToArray);

            getDataToArray.map(pokemon => pokemon)
            .forEach(element => {

                let createLi = document.createElement('li');
                createUL.appendChild(createLi);
                createLi.setAttribute('class', 'pokemon');
                createLi.setAttribute('id', element.name);
                createLi.innerHTML = element.name;

                // console.log(element.url)


            })})
            let pokemonLijst = document.querySelectorAll('#pokemon-lijst .pokemon');
            
            Array.from(pokemonLijst).forEach(function(btn){
                btn.addEventListener('click', function(liEvent){
                    let pokemonName = liEvent.target.innerHTML;
                    getPokemonDetails (pokemonName);
                    // console.log(liEvent.target.innerHTML);
            })});           

    }
    catch (error){
        console.log(error);
    }
};


createBtnNext.addEventListener('click', function(btn){
    offset += 20;
    createDivLijst.replaceChildren();
    let newApiLink = apiLink+offsetLink+offset;
    console.log(newApiLink);
    getData(newApiLink);
});

createBtnPrev.addEventListener('click', function(btn){
    if(offset == 0){
        alert('You can\'t go any lower');
    }
    else{
        offset -= 20;
        createDivLijst.replaceChildren();
        let newApiLink = apiLink+offsetLink+offset;
        getData(newApiLink);
    }
});
getData(newApiLink);