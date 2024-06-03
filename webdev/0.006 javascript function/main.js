
//normal function
function fun1 (con) {//here the con is a argument if we pass a variable here it will take place of con
    console.log(con)
}
let hello = "hello from normal function"
fun1(hello);//calling function 
//here when we put a variable in breacket and if in the defination of function there is a argument it takes the place of argument
/*like here
  function fun1 (con) {
    console.log(con)//variable con take the place of variable hello 
}
*/
//function with multiple argument


//arrow function
const afun1 = (con)=>{//this is a arrow function in a variable like here. we delayer a variable and the basic syntex of arrow function is 
    /*
    const var = (arg)=>{
        //ur command 
    }
    */
    console.log(con)
}
let afun1hello="hello from arrow"
afun1(afun1hello)