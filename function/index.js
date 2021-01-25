// LATIHAN 1---------------
let buyer = "febian";
let items = "donat";
function greet(buyer, items){
    return (`Terima kasih ${buyer} telah membeli produk ${items}`)
}
console.log(greet(buyer,items));

// LATIHAN 2---------------
function helper(number){
    return number - 32;
}

function getCelcius(fahrenheit){
    return helper(fahrenheit) * (5/9);
}
console.log(getCelcius(90));

// LATIHAN 3---------------
let result = 0;
function catAge(num){
    if(num === 1){
        return result = 15;
    } else if( num === 2){
        return result = 24;
    } else if (num > 2){
        return result = 24 + ((num-2) * 4);
    } else {
        return result;
    }
}
console.log(catAge(5));


// LATIHAN 4---------------
let smallString = (randomStr) => {return randomStr.toLowerCase()};
console.log(smallString("JFAOIJDAIosjadjaiodjaIOADJS"));



