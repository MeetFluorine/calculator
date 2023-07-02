let result = document.getElementById("d");
function appendValue(value){
    
    result.value+=value;
}
function calculate(){
    result.value=eval(result.value);
}
function clearResult(){
    result.value="";
}
function clearOne(){
    var result= document.getElementById("d").value;
     result= result.substr(0,result.length-1);
     document.getElementById("d").value= result;
  } 


window.addEventListener('keydown',function(event){
    if(event.key >=0 && event.key<=9 || event.key=="+" || event.key=="-" || event.key=="*" || event.key=="/" || event.key=="%" || event.key=="."){
      result.value += event.key;
  }
  else if(event.key =="Enter"){
    calculate();
  }
  else if(event.key == "Backspace"){
    clearOne();
  }
  else if(event.key=="Delete"){
    clearResult();
  }
})