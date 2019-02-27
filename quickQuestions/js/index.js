listQ = ["1. There is a guy.", 
"2. He gave me a ride.", 
"3. He was making $50,000 a year.", 
"4. I agree.", 
"5. It's very confusing.", 
"6. It's a hot topic on Twitter.",
"7. They don't have a lot of savings.", 
"8. Then I went to various politicians.", 
"9. I am perfectly happy.", 
"10. I would actually help improve it."];
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
  



