const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "chicken hypnotist", age: 59 },
    { name: "A. Curry", profession: "frogman", age: 32 },
    { name: "F. Vonk", profession: "snake milker", age: 36 },
    { name: "B. Bunny", profession: "rabbit walking service", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];

  for (let person of array) {
    // this is where the console.logs go
    // console.log(person); //Dit is alles van de array
    // console.log(person.name); // Dit is alleen de namen van de items in de array
    // console.log(person.age); //Dis zijn alle leeftijden van de items in de array
    // console.log(person.profession); //Dit zijn alle beroepen in de array
    // console.log('Deze persoon : '+ person.name+ '\nzijn beroep is : '+ person.profession+ ' en zijn/haar leeftijd is : '+person.age);
    
    const year = new Date();
    let yearOfBirth = year.getFullYear();
    // console.log(typeof person.age);
    // console.log(typeof yearOfBirth);
    // console.log('Zijn/haar geboorte jaar is : '+ (yearOfBirth - person.age));

    if(person.age > 50){
        console.log('This person is over 50 years of age : ' + person.name);
    }
  }