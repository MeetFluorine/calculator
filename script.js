function appendValue(value) {
    var result = document.getElementById("d");
    result.value += value;
  }
  
  function calculate() {
    var result = document.getElementById("d");
    result.value = eval(result.value);
  }
  
  function clearResult() {
    var result = document.getElementById("d");
    result.value = "";
  }
  
  function clearOne(){
    var result= document.getElementById("d").value;
     result= result.substr(0,result.length-1);
     document.getElementById("d").value= result;
  } 