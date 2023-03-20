'use strict';

// 1. isHometown
function isHometown(town){
    if(town === "San Francisco"){
        return true;
    } else{
        return false
    }
}


// 2. Get Full Name

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(`Test getFullName: ${getFullName('First', 'Last')}`)

// Define your function here

// 3. calculateTotal
function calculateTotal(base_price, state, tax =0.05){
    const subtotal = base_price * (1 + tax);
    let fee = 0;
    
    if(state === "CA"){
        fee = 0.03 * subtotal;
    } else if(state === "PA"){
        fee = 2;
    } else if(state === "MA" ){
        if(base_price <= 100){
            fee = 1;
        } else{
            fee = 3;
        }           
    } 
    return subtotal + fee;
}


console.log(`Test isHometown (false): ${isHometown('town')}`)
console.log(`Test isHometown (true): ${isHometown('San Francisco')}`)
console.log("===============================")
// Define your function here
console.log(`Test calculateTotal ($5.15): ${calculateTotal(5, "CA", 0)}`);
console.log(`Test calculateTotal ($6.25): ${calculateTotal(5, 'MA')}`);
console.log(`Test calculateTotal ($7.10): ${calculateTotal(5, 'PA', .02)}`);
console.log(`Test calculateTotal ($104): ${calculateTotal(101, 'MA', 0)}`);
