display = document.querySelector("input");

let list = []; //limit to size 12
let current_operation = "";
let cancelThis = "";

function myFunction(x) {
   
  function checkVal() {
    console.log(current_operation);
    try{
      
        let answer = eval(current_operation);
    // display.value = answer.toPrecision(4);
        display.value = answer
        if (list.length === 13 && !(isNaN(list[list.length-1]))) {
            list = [];
            list.push(answer);
        }else {
            list = [];
            list.push(answer);
          }
    }catch(e){
         display.value = 'ERROR'
       }
  }
  
  
  function allCancel() {
    current_operation = "";
    display.value = "0";
    list = [];
  }
  
  
  
  function cancelEntry() {
    let number = current_operation;
    let splitter = "";

    if (!isNaN(number[number.length - 1])) {
      for (let i = number.length - 1; i >= 0; i--) {
        if (isNaN(number[i])) {
          console.log(number[i]);
          splitter += number[i];
          break;
        }
      }
    }
    let newdisplay = number.split(splitter);
    newdisplay.pop();
    current_operation = newdisplay.join("");
    list = newdisplay;
    display.value = current_operation;
  }

  if (x) {
    if (x === "=") {
      checkVal();
    } 
    else {
      list.push(x);
      display.value = list.join("");
      if (x === "x") {
        current_operation += "*";
      } else if (x === "÷") {
        current_operation += "/";
      } else if (x === "AC") {
        allCancel();
      } else if (x === "CE") {
        cancelEntry();
      } else {
        current_operation += x;
      }
    }
  }
//   if (!(isNaN(list[list.length-1]))){
//     checkVal();}

}
