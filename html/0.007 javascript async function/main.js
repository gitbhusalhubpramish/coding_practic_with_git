//async is a function which runs at background of the program in this program the fun2 run after 1 second of hello settimeout but teh fun1 runs instently after fun2
async function fun1() {
    setTimeout(() => {
      console.log("hello fun1");
    }, 2000); // 2000 milliseconds = 2 seconds
  }
setTimeout(()=>{
  console.log("hello settimeout")
}, 1000);

function fun2(){
  setTimeout(() => {
    console.log("hello fun2");
  }, 2000); 
}
fun2 ()
fun1 ()