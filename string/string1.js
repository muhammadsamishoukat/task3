//StrLength
function StrLength() {
    var str=prompt("enter a string")
    console.log("the length of string is "+str.length)
}






//copystring



function copyStr() {
    var str=prompt("enter one string")
var str2=str.slice()
console.log("string 1",str+" "+"string 2",str2)
}






//concatination



function concatination() {
    var str1=prompt("enter 1st string")
var str2=prompt("enter 2nd string")
var con=str1.concat(str2)
console.log(con)
}




//ccompare



function ccompare() {
    var str1=prompt("enter one string")
var str2=prompt("enter second string")
var comp=str1.localeCompare(str2)
console.log(comp)
}



//uppercase



function upperCase() {
    var str=prompt("enter string in small letters")
var str2=str.toLocaleUpperCase()
console.log("the entered string in upper case is",str2)
}



//lowercase




function lowerCase() {
    var str=prompt("enter string in small letters")
var str2=str.toLocaleLowerCase()
console.log("the entered string in lower case is",str2)
}



//toggle




function toggle() {
    var confirmm=prompt("please write your suggestion UpperCase or LowerCase")
    var confirmm2=confirmm.toLocaleLowerCase();
if(confirmm2=="uppercase"){
    var str=prompt("enter string in small letters")
    var str2=str.toLocaleUpperCase()
    console.log("the entered string in Upper case is",str2)
}
else{
    var str=prompt("enter string in large letters")
    var str2=str.toLocaleLowerCase()
    console.log("the entered string in lower case is",str2)
}
}





//alphabetNumbersSpecialCharacter




function alphabetNumbersSpecialCharacter() {
    var str=prompt("enter a line with alphabets,numbers,special characters")
var alphabet=Numbers=SpecialCharacters=0
for(i=0;i<=str.length;i++){
    if ((str[i]>="a" && str[i]<="z")||(str[i]>="A" && str[i]<="Z")){
        alphabet++;
    }
    else if(str>="0"){
         Numbers++;
    }
    else{
        SpecialCharacters++;
    }
    
}
console.log("total number of alphabet is",alphabet+ "\n" +"total number of integers is",Numbers+"\n"+"total special chracters are",SpecialCharacters)
}





//vowelConsonatCheaker





function vowelConsonatCheaker() {
    var lineOrSentence=prompt("enter a sentence")
if( lineOrSentence == "A" || lineOrSentence == "a" || lineOrSentence == "E" || lineOrSentence == "e" || lineOrSentence == "I" || lineOrSentence == "i" || lineOrSentence == "O" || lineOrSentence == "o" || lineOrSentence == "U" || lineOrSentence == "u"){
    console.log("you enter an vowel")
}
else{
    console.log("you enter a consonant");
}
}




//totalWords





function totalWords() {
    var words=prompt("enter a string")
    console.log("the total number is words in a string is",words.length)
}





//reverseString
function reverseString() {
    var rev=prompt("enter a line")
var rev2=rev.split("")
var rev3=rev2.reverse()
var rev4=rev3.join()
console.log(rev4)
}




//Palindrom
 function Palindrom(params) {
    function checkPalindrome(str) {

        // find the length of a string
        const len = string.length;
    
        // loop through half of the string
        for (let i = 0; i < len / 2; i++) {
    
            // check if first and last string are same
            if (string[i] !== string[len - 1 - i]) {
                return 'It is not a palindrome';
            }
        }
        return 'It is a palindrome';
    }
    
    // take input
    const string = prompt('Enter a string: ');
    
    // call the function
    const value = checkPalindrome(string);
    
    console.log(value);
 }


 //reverseword
 function reverseWord(params) {
    var rev=prompt("enter a line")
var rev2=rev.split("")
var rev3=rev2.reverse()
var rev4=rev3.join()
console.log(rev4)
}

//occurance of string

function occuranceOfString(params) {
    var str=prompt("enter a string")
    var str2=parseInt(str)
    if ( str2[0] >= "A" || str2[0] <= "Z" && str2[0] >= "a" || str2[0] <= "z"){
        console.log("the string having character at start")
    }
    else{
        console.log("the string does not have character at start");
    }
}

//occurance of string at last

function occuranceOfStringAtLast(params) {
//    var str=prompt("enter")
//    if(str.endsWith("A")>=str.endsWith("Z") || str.endsWith("a")>=str.endsWith("z")){
//    console.log("occurance Of character At Last of string")
//    }
//    else{
//        console.log("haviing no occurance of character at last");
//    }

}
