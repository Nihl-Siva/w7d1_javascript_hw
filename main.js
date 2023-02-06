//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, arr){
    let match = false;
    for (let i in arr){
        let name = arr[i];
        if (string.toLowerCase().includes(name.toLowerCase())) {
            console.log(`Matched ${name}`);
            match = true;
        }
    }
    if (match=false){
        console.log('No Matches');
    }
}

//Call method here with parameters
findWords(dog_string, dog_names)

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (i in arr){
        if (i % 2 == 0) {
            arr.splice(i, 1, "even index");
        }
    }
    return arr;
}

console.log(replaceEvens(givenArr))
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]