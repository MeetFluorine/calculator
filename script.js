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

window.addEventListener('keyup',function(event){
  var result = document.getElementById("d");
  if(event.key >=0 && event.key<=9 || event.key=="+" || event.key=="-" || event.key=="*" || event.key=="/" || event.key=="%" || event.key==".")
  {
  result.value += event.key;
  }

  if(event.key=="Enter"){
    calculate();
  }

  if(event.key=="Backspace"){
    clearOne();
  }
  if(event.key=="Delete"){
    clearResult();
  }

});

 