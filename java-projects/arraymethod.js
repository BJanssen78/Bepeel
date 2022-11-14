/*
Dit stukje heb ik gejat van Winc Academy Leraar Niels.
Een leuk hebbe dingetje die er gaaf en professioneel uitziet.
Dank je wel Niels.
*/
(() => {
    console.clear();
    const currentdate = new Date();
    console.log(
        `>>> \x1b[32m💾 Bepeel Development \x1b[0m <<< ${
            currentdate.getHours() +
            ":" +
            currentdate.getMinutes() +
            ":" +
            currentdate.getSeconds()
        } ${ ">>> \x1b[32m Bepeel Development \x1b[0m <<<"}`
    );
})();//Einde hebbe dingetje van Niels.

// A.
console.log('\nOpdracht A.');

const addTheWordCool = function(array){
    array.push('cool');
    // console.log('functionArray ' + array);
    return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "amazing"]));
// result: ["nice", "awesome", "amazing", "cool"]

// B.
console.log('\nOpdracht B.');

let amountOfElementsInArray = function(amountArray){
    // console.log(amountArray.length);
    return amountArray.length;
}

console.log(amountOfElementsInArray(['apples', 'pears', 'lemons'])); 
// 3

// C.
console.log('\nOpdracht C.');

let selectBelgiumFromBenelux = function(firstCountry){
    console.log(firstCountry[0]);
}
console.log(selectBelgiumFromBenelux(["Belgium", "Netherlands", "Luxembourg"])); 
// result: "Belgium" 

// D.
console.log('\nOpdracht D.');

let lastElementInArray = function(lastItem){
    console.log(lastItem.at(-1));
}
console.log(lastElementInArray(["Hare", "Guinea pig", "Chicken", "Turtle"])); 
// result: "Turtle"

// E.
console.log('\nOpdracht E.');

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

const impeachTrumpSlice = function(array) {
    console.log(array.slice(1));
}
const impeachTrumpSplice = function(array) {
    console.log(array.splice(1));
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// F.
console.log('\nOpdracht F.');

let stringsTogether = function(array){
    console.log(array.join(' '));
}
console.log(stringsTogether(['Winc', 'Academy', 'is', 'fun', ';-}'])) 
//result: "Winc Academy is fun ;-}"

// G.
console.log('\nOpdracht G.');

let combineArrays = function(array, array2){
    console.log(array.concat(array2));
}
combineArrays([1,2,3], [4,5,6]) 
// resultaat: [1,2,3,4,5,6]