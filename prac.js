//Question 1
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


//Question 2
inputArray = [4, 9, 1]
function reverseArray(inputArray) {
    var output = []
    for (i = inputArray.length - 1; i > -1; i--) {
        output.push(inputArray[i])
    }
    return output
}
console.log(reverseArray(inputArray))


//Question 3
userInput = [1, false, 2, undefined, null, '', 3]
console.log(userInput.filter(Number))


//Question 4
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


//Question 5
userInput1 = [1, 4, 5, 6, 5, 4, 7]
function removeDuplicates(arr) {
    return arr.filter((value, index) => arr.indexOf(value) == index)
}
console.log(removeDuplicates(userInput1))


//Question 6
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