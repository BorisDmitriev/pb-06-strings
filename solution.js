const parkWalkStr = "I can walk in the park all day!";
console.log(parkWalkStr.slice(18, 22));

const helloStr = "Hello World";
console.log(helloStr.toUpperCase());

const earthlingsStr = "Hello Earthling";
console.log(earthlingsStr.toLowerCase()); 

const jsStr = "JavaScript";
console.log(jsStr.substring(3,6));

const niceShoesStr = "nice shoes";
console.log(niceShoesStr.includes("l"));
console.log(niceShoesStr.includes("n"));

const oldStr = "Choice";
const newStr = oldStr.charAt(0) + oldStr + oldStr.charAt(0);
console.log(newStr);

const scritcherStr = "Choice";
const lastThreeChars = scritcherStr.slice(-3);
console.log(lastThreeChars + scritcherStr + lastThreeChars);

const boogieNightsStr = "Choise";
console.log( boogieNightsStr.charAt(boogieNightsStr.length-1) + boogieNightsStr.slice(1, -1) + boogieNightsStr.charAt(0) ); 

const firstName = "Maria";
const city = "Berlin";
const job = "Seo";
console.log(`My name is ${firstName}. I live in ${city} and I am a ${job}`);

const foxStr = "the quick brown fox";
console.log(foxStr.charAt(0).toUpperCase() + foxStr.slice(1));


// const foxStr1 = "the quick brown fox";
// console.log(foxStr1.split(" ").map( e => e.charAt(0).toUpperCase() + e.slice(1) ).join(" ")); 
