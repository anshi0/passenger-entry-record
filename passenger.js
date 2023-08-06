let saveEl = document.getElementById("save-el")
//taking the element having id save-el from html
let countEl = document.getElementById("count-el")
let count = 0

//create the function increments when button is clicked

function increment() {
    //log.console("You clicked increment button")
    count += 1
    //increment the count by 1
    countEl.textContent = count
}

function clear() {
        // Add your code here to clear or reset the desired elements
        // For example, you can clear a text input field with ID "myInput" like this:
        document.getElementById("myInput").value = ""
}
//create the function decrements the count of number of people when clicked

function decrement() {
    count = count - 1
    //decreacing the count of number of people entered by 1
    countEl.textContent = count
}

//create the function save which log outs the count when it is called

function save() {
    let countStr = count + " - "
    // 2. Create a variable that contains both the count and the dash separator
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent = saveEl.textContent + countStr
    //countStr is added to saveEl to make sure the words in paragraph appears
    //countEl.textContent = 0
    //count = 0
    //to set the count back to zero
}



//console.log(4 === 3)  // false
//console.log(5 > 2)    // true
//console.log(12 > 12)  //false
//console.log(3 < 0)    //false
//console.log(3 >= 3)   // true
//console.log(11 <= 11) //true
//console.log(3 <= 2)   //false

