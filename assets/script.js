quantity=0
// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Joe Lopez" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let quantityTotal=(qty-gb)+(qty-cc)+(qty-sugar)

Function updateQuantity (displayQuantity){
    let quantityTotal= document.queryselector ("#qty-total");
     quantityTotal.textcontent=displayQuantity;
}

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn =document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn =document.querySelector ('#minus-cc')
const ssPlusBtn = document.querySelector ('#add-sugar')
const ssMinusBtn = document.querySelector ('#minus-sugar')
// Code to update name display
document.append ('#credit')
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
quantity ++;

gbMinusBtn.addEventListener('click',function(){
  if (quantity>0 ){
    quantity --;
  updateQuantity(`quantity: ${quantity}`);
}})

ccPlusBtn.addEventListener ('click', function(){
    quantity++;
    updateQuantity(`quantity:${quantity}`);
}
ccMinusBtn.addEventListener ('click',function(){
    if (quantity>0 ){
        quantity --;
     updateQuantity (`quantity:${quantity}`);   
}})       

ssPlusBtn.addEventListener ('click', function(){
quantity ++;
updateQuantity (`quantity:${quantity}`);
}
ssMinusBtn.addEventListener ('click', function(){
    if (quantity >0){
        quantity--;
    updateQuantity (`quantity:${quantity}`)    
    }
}
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons