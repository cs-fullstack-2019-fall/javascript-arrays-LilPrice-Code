function main() {
    // exercise1();
    // exercise2();
    // exercise3();
}
main();
function exercise1() {
    // Exercise 1
    // Create an array.
    //     Add four names to the array.
    //     Print the array
    
    let myArray =["John", "Jim", "Jesse", "Jackie"];
    console.log(myArray)
}
function exercise2(){
    // Exercise 2
    // Create an array with 5 numbers in it.
    // Print the numbers.

    let myNum = [12,1124331,1233123,12312321,4231];
    console.log(myNum)
}
function exercise3() {
    // Exercise 3
    // Create an array with 4 names.
    // Print the third item in the array.
    // Delete the second item.
    // Print the third item in the array again.

    let nameArray = ["Mike", "Micheal", "Mickey", "Momo"];
    console.log(nameArray[2]);
    // console.log(nameArray);
    nameArray.splice(1,1);
    // console.log(nameArray);
    console.log(nameArray[2]);

}