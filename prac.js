//Write a function that creates a new array with the user inputs -
var n = 3
var value = 'apple'
var array = []
function fun1(n, value) {
    for (i = 0; i < n; i++) {
        array[i] = value
    }
    return array
}
console.log(fun1(n, value))
//Expected output: [ 'apple', 'apple', 'apple' ]

//------------------------------------------------------------------------------------

//Write a function that reverts the input array -
inputArray = [4, 9, 1]
function reverseArray(inputArray) {
    var output = []
    for (i = inputArray.length - 1; i > -1; i--) {
        output.push(inputArray[i])
    }
    return output
}
console.log(reverseArray(inputArray))
//Expected output: [ 1, 9, 4 ]

//------------------------------------------------------------------------------------

//Write a method that clears array from all unnecessary elements -
userInput = [1, false, 2, undefined, null, '', 3]
console.log(userInput.filter(Number))
//Expected output: [ 1, 2, 3 ]

//------------------------------------------------------------------------------------

//Write a method that should return an array without listed values -
input1 = [1, 2, 5, 6, 8, 9, 8]
without = [8, 9]
for (i = 0; i < input1.length; i++) {
    for (j = 0; j < without.length; j++) {
        if (input1[i] == without[j]) {
            input1.splice(i, 1)
        }
    }
}
console.log(input1)
//Expected output: [ 1, 2, 5, 6, 8 ]

//------------------------------------------------------------------------------------

//Write a method that returns a duplicate-free array -
userInput1 = [1, 4, 5, 6, 5, 4, 7]
function removeDuplicates(arr) {
    return arr.filter((value, index) => arr.indexOf(value) == index)
}
console.log(removeDuplicates(userInput1))
//Expected output: [ 1, 4, 5, 6, 7 ]

//------------------------------------------------------------------------------------

//Write a function that compares two arrays and returns true if they are identical
var array1 = [1, 2, 3]
var array2 = [1, 2, 3]
function checkIdenticalArray(array1, array2) {
    flag = 1
    if (array1.length != array2.length) {
        flag = 0
    }
    else {
        for (i = 0; i < array1.length; i++) {
            if (array1[i] != array2[i]) {
                flag = 0
                break
            }
        }
    }
    return flag
}
console.log(Boolean(checkIdenticalArray(array1, array2)))
//Expected output: true