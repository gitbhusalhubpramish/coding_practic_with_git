const arrform = document.getElementById("arrayForm");
const arr = document.querySelectorAll("input");
function bblshort (arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[j].value > arr[j + 1].value){
        let temp = arr[j].value;
        arr[j].value = arr[j + 1].value;
        arr[j + 1].value = temp;
      }
    }
  }
}
bblshort(arr);
console.log(arr);