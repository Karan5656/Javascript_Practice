fruits = ['Apple', 'Orange', 'Kiwi', 'Mango', 'Banana']


//Code that converts fruits array to string.
fruitStr = String(fruits)
console.log(fruitStr)         //Apple,Orange,Kiwi,Mango,Banana
console.log(typeof(fruitStr)) //string


//Code that returns the last element of fruits.
console.log(fruits[fruits.length-1]) //Banana



//Code that adds “*” between all the elements of fruit and shows it as a string. i.e. Apple*Orange*Kiwi…
fruitStr1 = fruits.toString().replaceAll(',','*')
console.log(fruitStr1)            //Apple*Orange*Kiwi*Mango*Banana


console.log(fruits.join('*'))     //Apple*Orange*Kiwi*Mango*Banana




//Code that adds ‘Pineapple’ to the fruits array.
fruits.push('Pineapple')
console.log(fruits)           //[ 'Apple', 'Orange', 'Kiwi', 'Mango', 'Banana', 'Pineapple' ]

fruits.unshift('Pineapple')
console.log(fruits)           //[ 'Pineapple', 'Apple', 'Orange', 'Kiwi', 'Mango', 'Banana' ]



//Code that changes Kiwi to Cherry
fruits.splice(2,1,'Cherry')
console.log(fruits)           //[ 'Apple', 'Orange', 'Cherry', 'Mango', 'Banana' ]




//Code that removes Apple and displays the remaining array.
fruits.shift()
console.log(fruits)           //[ 'Orange', 'Kiwi', 'Mango', 'Banana' ]



//Code that adds Lemon and Grapes to the starting of the fruits array.
fruits.unshift('Lemon', 'Grapes')
console.log(fruits)          //[ 'Lemon', 'Grapes', 'Apple', 'Orange', 'Kiwi', 'Mango', 'Banana']



//Code that deletes the 3rd element of the array.
fruits.splice(2,1)
console.log(fruits)          //[ 'Apple', 'Orange', 'Mango', 'Banana' ]



//Code that sorts the array.
console.log(fruits.sort())   //[ 'Apple', 'Banana', 'Kiwi', 'Mango', 'Orange' ]



//Code that reverses the array.
console.log(fruits.reverse())  //[ 'Banana', 'Mango', 'Kiwi', 'Orange', 'Apple' ]


//----------------------------------------------------------------------------------------------


number = ['1', '20', '55', '200', '150', '550']


//Code that randomly sorts the number array.
console.log(number.sort())     //[ '1', '150', '20', '200', '55', '550' ]


//Code for sorting the number array in ascending and descending order.
console.log(number.sort((a,b) => a-b))    //[ '1', '20', '55', '150', '200', '550' ]


//Code for finding the maximum and minimum of the number array.
console.log(number.sort((a,b) => a-b)[0])                   //1
console.log(number.sort((a,b) => a-b)[number.length-1])     //550


//----------------------------------------------------------------------------------------------------


cars = [{type:"Volvo", year: '2016'}, {type:"Maruti", year: '2005' }, {type:"BMW", year: '2010'}]


//Sort by year
console.log(cars.sort((a,b) => a.year - b.year))
/*[
  { type: 'Maruti', year: '2005' },
  { type: 'BMW', year: '2010' },
  { type: 'Volvo', year: '2016' }
]*/


//Sort by type
cars = [{type:"Volvo", year: '2016'}, {type:"Maruti", year: '2005' }, {type:"BMW", year: '2010'}]
console.log(cars.sort((a,b) => {
    var nameA = a.type.toUpperCase();
    var nameB = b.type.toUpperCase();
    if(nameA<nameB){
       return -1
    }
    if(nameA>nameB){
       return 1
    }
    return 0
}))
/*[
  { type: 'BMW', year: '2010' },
  { type: 'Maruti', year: '2005' },
  { type: 'Volvo', year: '2016' }
]*/