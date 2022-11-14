/*
Dit stukje heb ik gejat van Winc Academy Leraar Niels.
Een leuk hebbe dingetje die er gaaf en professioneel uitziet.
Dank je wel Niels.
*/
(() => {
    console.clear();
    const currentdate = new Date();
    console.log(
        `>>> \x1b[32m Bepeel Development \x1b[0m <<< ${
            currentdate.getHours() +
            ":" +
            currentdate.getMinutes() +
            ":" +
            currentdate.getSeconds()
        } ${ ">>> \x1b[32m Bepeel Development \x1b[0m <<<"}`
    );
})();//Einde hebbe dingetje van Niels.

const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ]

// console.log(superheroes);
// console.log(superheroes.map(heroName => heroName.name));

const lightWeightHero = (superheroes.filter(lightWeight => lightWeight.weight < 190));
// console.log('Light weight heroes\n');
// console.log(lightWeightHero);

const middleWeightHero = (superheroes.filter(middleWeight => middleWeight.weight == 200));
// console.log('Middle weight heroes\n');
// console.log(middleWeightHero);

const firstAppearance = [];
let firstArray = (superheroes.map(first => {
    let heroString = ('The hero ' + first.name + ' had his/her first appearance in comic ' + first.first_appearance);
    firstAppearance.push(heroString)}));

// console.log(firstAppearance);

let dcComic = [];
let dcSuperHero = (dcComic.push(superheroes.filter(dcHero => dcHero.publisher === 'DC Comics')));

const totalWeightDC = 0;
let sumDcWeight = [];
let dcHeroWeight = (
    sumDcWeight.push(
    superheroes.filter(hero => hero.publisher === 'DC Comics')
        .map(w => +w.weight)
        .reduce((previous, current) => previous + current, totalWeightDC)));

// console.log(dcComic);
// console.log(sumDcWeight);

const marvelComic = [];
const totalWeightMarvel = 0;
let marvelSuperHero = (marvelComic.push(superheroes.filter(dcHero => dcHero.publisher === 'Marvel Comics')));

let sumMarvelWeight = [];
let marvelHeroWeight = (
    sumMarvelWeight.push(
    superheroes.filter(hero => hero.publisher === 'Marvel Comics')
        .map(w => +w.weight)
        // .reduce((previous, current) => previous + current, totalWeightMarvel)
        ));

// console.log(marvelComic);
console.log(sumMarvelWeight);

const maxWeight = 0;
// console.log(Math.max(sumDcWeight));
console.log(Math.max(superheroes.filter(maxWeight => maxWeight.weight != 'unknown' >= 0)
        .map(mW => +mW.weight))
        
    //    .reduce((previous, current) => previous + current, maxWeight)
    );