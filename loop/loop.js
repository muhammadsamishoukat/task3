//naturalNumbers
function naturalNumbers() {
    var naturalNumbers=0
    while(naturalNumbers>=0){
        console.log(naturalNumbers)
        naturalNumbers++
    }
   
}
//reverse natural numbers
function reverseNaturalNumbers() {
    var numbers=prompt("enter the number from where to reverse the value")
    while(numbers>1){
        console.log(numbers)
        numbers--
    }
}
//alphabets in loop
function alphabetsInLoop() {
    for(i="A";i<="Z";i++){
        console.log(i);
    }

}
// let i;
// for(i = "a";i <= "z"; i++){
//     console.log(i)
// }





//all even number
function evenNumbersFrom100() {
    var value=100;
for(i=0;i<=value;i++){
    if(i%2==0){
        console.log(i)
    }
}
}

//all odd numbers
function oddNumbersFrom100() {
    var value=100;
for(i=0;i<=value;i++){
    if(i%2==1){
        console.log(i)
    }
}
}