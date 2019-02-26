listQ1 = ["Here you go...", "This is number 2.", "This is number 333", "This is the next one"];
console.log(list[0]);
function timedText() {
  i = 0;
  setTimeout(myTimeout1, 20)
  }
  function myTimeout1() {
    if (listQ[i]){ 
    document.getElementById("demo").innerHTML = listQ[i];
    i += 1;
    setTimeout(myTimeout1, 2000);
    }
    else {
      document.getElementById("demo").innerHTML = "End of List."  
    }
  };
  




