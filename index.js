/*

for (let age = 30; age <40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }

// METHOD WITHOUT FOR OR WHILE. WORKS, BUT CLUNKY AND CANNOT EXPAND. 

const gifts = ["teddybear", "drone", "doll"];

function wrapGifts(gift){
    console.log(`Wraped ${gift} and added a bow!`);
}

console.log(wrapGifts(gifts[0]));
console.log(wrapGifts(gifts[1])); 
console.log(wrapGifts(gifts[2])); 

*/

/* 
// WITH FOR METHOD.  CAN BE EXPANDED 

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
    }
    return gifts;
} 

wrapGifts(gifts); 

*/

/* 

//ALTERNATE METHOD USING WHILE 

const gifts = ["teddy bear", "drone", "doll"]; 

function wrapGifts(gifts){
    let i = 0;
    while (i < gifts.length){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }
    return gifts;
}

wrapGifts(gifts);
*/

/* 

const receivedGiftsFrom = []; 

const thankYouMessageArray = [];

function writeCards(receivedGiftsFrom, event){ 
    for (let i = 0; i <receivedGiftsFrom.length; i++){
        thankYouMessageArray.unshift(`Thank you, ${receivedGiftsFrom[i]} for the wonderful ${event} gift!`);
    }
    return thankYouMessageArray;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday")

console.log(thankYouMessageArray); 

*/

/*

function countDown(n){
    for (let i = n; i >= 0; i--){
        console.log(n);
        n--;
    }
    return countDown;
}

countDown(10);

*/ 



/*
const receivedGiftsFrom = []; 

const thankYouMessageArray = [];

function writeCards(receivedGiftsFrom, event){ 
    for (let i = 0; i <receivedGiftsFrom.length; i++){
        thankYouMessageArray.push(`Thank you, ${receivedGiftsFrom[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessageArray;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

console.log(thankYouMessageArray); */ 



function countDown(n){
    for (let i = n; i >= 0; i--){
      console.log(n);
      n--;
    }
    return countDown;
  }
  
  countDown(10);



  // Be kind of careful declaring variables outside a function and then using them inside a function. You probably want this function to return new results each time, not keep modifying the same thing. 
const receivedGiftsFrom = []; 
const thankYouMessageArray = [];

function writeCards(receivedGiftsFrom, event){ 
    const thankYouMessageArray = [];
    for (let i = 0; i <receivedGiftsFrom.length; i++){
        // The []s in your line was making each item an array. Each should be a string
        // thankYouMessageArray.push([`Thank you, ${receivedGiftsFrom[i]}, for the wonderful ${event} gift!`]);
        thankYouMessageArray.push(`Thank you, ${receivedGiftsFrom[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessageArray;
}


writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
console.log(thankYouMessageArray); 

// The test wants writeCars to return a result...
const result = writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
console.log(result);