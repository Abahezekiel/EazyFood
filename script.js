// let first = document.getElementById('first')
// let second = document.getElementById('second')
// let third = document.getElementById('third')
// let btn = document.getElementById('btn')
// let foodSelected = document.getElementById('foodSelected')

// let food1 = document.getElementById('food1')
// let food3 = document.getElementById('food3')

// let chop = document.getElementById('chop')


// let username = prompt ('what is your name')
// first.innerHTML = (`welcome ${username}, what food would you like to get from our grande cuisine?`)

// let mainFood = ["White Rice", "Jollof Rice", "Fried Rice", "Basmati Rice", "Spaghetti", "Spaghetti bolognese"]
// let protein = ["Beef", "Chicken", "Fish"]
// let drinks = ["Chi-Exotic", "Hollandia", "Coke", "Fanta", "Sprite"];

// let head = document.getElementById('header');

// btn.addEventListener('click', function(){
//   let userMainFood = food1.value;
//   // let userProtein = food2.value;
//   let userDrinks = food3.value


//   let availableFood = mainFood.includes (userMainFood);
//   // let availableProtein = protein.includes (userProtein);
//   let availableDrinks = drinks.includes (userDrinks);

//   if (availableFood && availableDrinks) {
//     foodSelected.innerHTML = `Thank you ${username}, for ordering ${userMainFood}, and ${userProtein}, and ${userDrinks}! Kindly Choose Payment Method.`;
// console.log(congrats)
//   }

//   else if (availableFood) {
//     foodSelected.innerHTML = `Sorry ${username}! We dont have ${userDrinks}. Please choose from our menu: `
// console.log(sorry)
 
//   }else if (availableDrinks) {
//     foodSelected.innerHTML = `Sorry ${username}! We dont have ${userDrinks}. Please choose from our menu: `
// console.log(sorry)
 
//   }



// })

let q1 = document.getElementById('food1');
let q2 = document.getElementById('food2')
let q3 = document.getElementById('food3');

let q4 = document.getElementById('name');
let q5 = document.getElementById('address');


let btn = document.getElementById('btn');
let selectedMeal = document.getElementById('selectedMeal');


// let p = document.getElementById('up');
// let top1 = document.getElementById('top');



let mainMeal = ["white rice", "jollof rice", "fried rice", "basmatirice", "spaghetti", "Spaghetti bolognese"]

let Protein = ["beef", "chicken", "fish"]

let Drink = ["chiexotic", "hollandia", "coke", "fanta", "sprite"];

// let userName = prompt('What is your name');
// first.innerHTML = (`welcome ${userName}, what food would you like to get from our grande cuisine?`)

btn.addEventListener('click', function(e) {
  e.preventDefault();

    let userMainMeal = q1.value.toLowerCase(); 
    let userProtein = q2.value.toLowerCase();
    let userDrink = q3.value.toLowerCase();
    let userName = q4.value.toLowerCase();

    

    // let a = document.getElementById('question1').value
    // let b = document.getElementById('question3').value

    // let aErr = document.getElementById('aErr')
    // let bErr = document.getElementById('bErr')


    let avalaibleMeal = mainMeal.includes(userMainMeal);
    let avalaibleProtein = Protein.includes(userProtein);
    let avalaibleDrink = Drink.includes(userDrink);

    
    // if(a === ""){
    //     aErr.innerHTML =  ' Meals field cant be blank cant be left blank'
    //     valid = false
    //     console.log(valid)


    // }else{
    //     aErr.innerHTML = ""
    // }
    // if(b === ""){
    //     bErr.innerHTML =  ' Drinks feild cant be blank cant be left blank'
    //     valid = false
    //     console.log(valid)


    // }else{
    //     bErr.innerHTML = ""
    // }


    if (avalaibleMeal && avalaibleDrink && avalaibleProtein ) {
        // alert (Thank you ${username}, for ordering ${userMainMeal}, and ${userDrink}! Please proceed to payment.);
        selectedMeal.innerHTML = `Thank you ${userName}, for ordering ${userMainMeal}, ${userProtein} and ${userDrink}! Please proceed to payment.`;
        first.innerHTML = `Thank you ${userName}, for making this purchase with us!`;
        q1.value = '';  
        q2.value = '';  
          
        q3.value = '';  
        console.log('congrts')
        
    } else if (avalaibleMeal) {
        selectedMeal.innerHTML = `Sorry ${userName}! We don't have ${userProtein}.  and ${userDrink}, Please choose a drink from our menu: ${Drink.join(', ')} and also a protein from our Menu: ${Protein.join(', ')}.`;
       
        q2.value = '';  
        first.innerHTML = '';

        q3.value = '';  
    }else if (avalaibleProtein) {
      selectedMeal.innerHTML = `Sorry ${userName}! We don't have ${userMainMeal}. and ${userDrink} Please choose a Meal and a drink from our menu : ${mainMeal.join(', ')}, and ${Drink.join(', ')}.`;
      q1.value = '';
  first.innerHTML = '';

      q3.value = '';  
  }
    else if (avalaibleDrink) {
        selectedMeal.innerHTML =`Sorry ${userName}! We don't have ${userMainMeal}. and ${userProtein} Please choose a Meal and a protein from our  menu: ${mainMeal.join(', ')}, and ${Protein.join(', ')}.`
        q1.value = ''; 
        q2.value = '';  
  first.innerHTML = '';

    }
    else {
        selectedMeal.innerHTML = `Sorry ${userName}, We don't have ${userMainMeal},  ${userProtein}, or ${userDrink}. Please choose from our menu: Main Meals - ${mainMeal.join(', ')}, Protein ${Protein.join(', ')} Drinks - ${Drink.join(', ')}.`;

console.log('nothing')
       
        q1.value = '';  
        q2.value = '';  

        q3.value = '';  
        first.innerHTML = '';

    }

 
});

/*
let foodlist = document.getElementById('foodlist');
foodlist.addEventListener("submit", function (e) {
  e.preventDefault();

  let username_err = document.getElementById('username_err');
  let address_err = document.getElementById('address_err');
  let food_err = document.getElementById('food_err');
  let protein_err = document.getElementById('protein_err');
  let drink_err = document.getElementById('drink_err');

  let username = document.getElementById('username').value;
  let address = document.getElementById('address').value;
  let food = document.getElementById('food').value;
  let protein = document.getElementById('protein').value;
  let drink = document.getElementById('drink').value;
  

  if (username === "") {
    username_err.textContent = "please enter a username";
    isValid = false
  }else{
    username_err.textContent = ''
  }

  if (address === "") {
    address_err.textContent = "please enter an address";
    isValid = false
  }  else{
    username_err.textContent = ''
  }

  if (food === "") {
    password_err.textContent = "please enter food";
    isValid = false
  }  else{
    food_err.textContent = ''
  }

  if (protein === "") {
    protein_err.textContent = "please enter protein";
    isValid = false
  }  else{
    protein_err.textContent = ''
  }

  if (drink === "") {
    drink_err.textContent = "please enter drink";
    isValid = false
  }  else{
    drink_err.textContent = ''
  }
})
*/
