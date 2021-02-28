function arrayRead() {
    var arr=prompt("enter multiple items at once").split("")
    for(i=0;i<=arr.length;i++){
        console.log(arr[i])
    }
}



function negativeIdentify() {
    var myArray = prompt("enter numbers").split(" ");
    var minusArray=myArray.filter((item)=>{
        return item < 0;
    })
    console.log(minusArray)
}


//sum
function sumArray() {
    var array = [1, 2, 3, 4, 5];
    var sum = array.reduce(function(a, b){        //read this
        return a + b;
    }, 0);
    
    console.log(sum);
}
//max
function maxMin() {
    var max=prompt("enter numbers").split(" ")
    console.log("full array is", max + " " + "\n" + "the max value is",Math.max(...max)+ "\n" +"the min value is",Math.min(...max));
}
//second largest value
var largestNumber=prompt("enter numbers").split(" ")

//even odd numbers
  


function evenOddNumbersCount() {
    var numbers=prompt("enter numbers").split(" ")
var evenCount=oddCount=0
for(i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        evenCount++;
       
    }
     else{
        oddCount++
     }
}
console.log("total even number",evenCount+ "\n" +"total odd numbers are",oddCount)

}
  

//negative elements
function negativeElements() {
    var numbers=prompt("enter numbers").split(" ")
var posCount=negCount=0
for(i=0;i<numbers.length;i++){
    if(numbers[i]<0){
        negCount++;
       
    }
     else{
        posCount++
     }
}
console.log("total negative number",negCount+ "\n" +"total positive numbers are",posCount)

}
//copy array
function copyArray() {
    var copy=prompt("enter array").split(" ")
var copyReal=copy.slice()
console.log("2nd array is the copy of first array",copyReal+"\n"+"1st array",copy+"\n"+"2nd array",copyReal);   
}
//insert
function insertArray() {
    var array=prompt("enter multiple values at once with spaces").split(" ")
    console.log(array)
}
//remove multiples from random

function removeArrayRandom() {
    var array=prompt("enter values with spaces").split(" ")
    var confirm2=prompt("from what place you wants to remove array plz choose form 0 to so on")
var array2=array.splice(confirm2,1)
console.log((array));

}


