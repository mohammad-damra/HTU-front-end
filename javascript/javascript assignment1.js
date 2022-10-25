function calc() {
    let firstNumber = document.getElementById("first-number");
    let secondNumber = document.getElementById("second-number");
    let result = document.getElementById("result");
    let opeSum = document.getElementById("sum");
    let opeMin = document.getElementById("min");
    let opeMulti = document.getElementById("multi");
    let opeDiv = document.getElementById("div");
  
  if(opeSum.checked){
      result.innerHTML = parseInt(firstNumber.value) + parseInt(secondNumber.value);
  
  }
  else if(opeMin.checked){
      result.innerHTML = parseInt(firstNumber.value) - parseInt(secondNumber.value);
  
  }

else if(opeMulti.checked){
    result.innerHTML = parseInt(firstNumber.value) * parseInt(secondNumber.value);

}

else if(opeDiv.checked){
    result.innerHTML = parseInt(firstNumber.value) / parseInt(secondNumber.value);

}
  else result.innerHTML = "select an operation"
  }