listQ = ["1. Who ... you?", "2. What ... your name?", "3. Where ... you from?", "4. How old ... you?", "5. I ... Maria.", "6. I ... 20.", "7. I ... a consultant.", "8. They ... at work.", "9. \n I \n ... \n f \n i \n n \n e \n .", "10. Where ... your parents?"];
console.log(list[0]);
function timedText() {
  i = 0;
  setTimeout(myTimeout1, 20);
  }
  function myTimeout1() {
    if (listQ[i]){ 
    document.getElementById("demo").innerHTML = listQ[i];
    i += 1;
    setTimeout(myTimeout1, 2000);
    }
    else {
      document.getElementById("demo").innerHTML = "End of List.";
    }
  }
  



