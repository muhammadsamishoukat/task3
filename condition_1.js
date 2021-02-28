//maximum
function maximum() {
var a=parseInt(prompt("enter 1st number"))
var b=parseInt(prompt("enter 2nd number"))
if(a>b){
    console.log("1st number is greater than 2nd")
}
else{
    console.log("2nd number is greater than 1st")
}
}
//dividened
function dividened(params) {
    var num=parseInt(prompt("enter a number"))
if(num%5==0 || num%11==0){
    console.log("entered number is divisible of 5 and 11:")
}
else{
    console.log("entered number id not divisible of 5 and 11")
}
}
//leapyear
function leapYear(params) {
    var num=parseInt(prompt("enter a year"))
if(num%4==0){
    console.log("you enter a leap year")
}
else{
    console.log("not a leap year")
}
}
//alphabet
function alphabet(params) {
    var alphabet=prompt("enter an alphabet")
if (( alphabet>="a" && alphabet<="z") || (alphabet>="A" && alphabet<="Z")){
    console.log("you enter an alphabet")

}
else{
    console.log("not an alphabet")
}
}
//vowel
function vowel(params) {
    var ch=prompt("enter a character")
if(ch=="a"|| ch =="A"||ch=="e"||ch=="E"||ch=="i"||ch=="I"||ch=="o"||ch=="O"||ch=="u"||ch=="U"){
console.log("you enter a vowel")
}
else{
    console.log("you enter a consonant");
}
}
//checker
function checker(params) {
    var value = prompt("enter a value")
if(( value >="a" && value <= "z") || (value >= "A" && value <= "Z" )){
    console.log("you enter an alphabet")
}
else if(value >= 0 && value <= 9){
    console.log("you enter an numeric digit")
}
else{
    console.log("you enter an special digit")
}
}
//maximum2
function maximum2(params) {
    var a =parseInt(prompt("enter 1st value"))
var b = parseInt(prompt("enter 2nd value"))
var c = parseInt(prompt("enter 3rd value"))
let greatest;
if( a>b && a>c){
    greatest=a;
}
else if( b>a && b>c){
    greatest=b;
}
else{
    greatest=c
}
console.log("maximum value is:",greatest)
}
//positivenegative
function positiveNegtive(params) {
    var num=parseInt(prompt("enter a number"))
if(num<0){
    console.log("you enter a negative number")
}
else if(num>0){
    console.log("you enter a positive number")
}
else{
    console.log("you enter a zero value")
}
}
//function evenOdd(params) {
    var num=parseInt(prompt("enter a number"))
if (num%2==0){
    console.log("you enter a even number:",num)
}
else{
    console.log("you enter a odd number:",num)
}
}