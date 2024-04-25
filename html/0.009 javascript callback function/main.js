// callback is use as argument but bit different from other in callback we pass function like here in callback() is written we can also write 
/*function fun1(callba){
    let data = "this is data"
    console.log("hello",data)
    callba(data)
}
function fun2(data){
    console.log("hi",data)
}
fun1(fun2)*/
//it mean callback is a argument where we pass function inset of variable
function fun1(callback){
    let data = "this is a data"
    console.log("hello",data)
    callback(data)
}
function fun2(data){
    console.log("hi",data)
}
fun1(fun2)