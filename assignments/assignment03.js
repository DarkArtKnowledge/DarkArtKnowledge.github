let elem = [];
let totalNum = 0;
let overNum = 0;
let overStart = -4;
// assign the entire table row for hole 1 to a variable, elem
elem[1]
  = document.getElementById("1");
elem[2]
  = document.getElementById("2");
elem[3]
  = document.getElementById("3");
elem[4]
  = document.getElementById("4");
elem[5]
  = document.getElementById("5");
elem[6]
  = document.getElementById("6");
elem[7]
  = document.getElementById("7");
elem[8]
  = document.getElementById("8");
elem[9]
  = document.getElementById("9");
elem[10]
  = document.getElementById("10");
elem[11]
  = document.getElementById("11");
elem[12]
  = document.getElementById("12");
elem[13]
  = document.getElementById("13");
elem[14]
  = document.getElementById("14");
elem[15]
  = document.getElementById("15");
elem[16]
  = document.getElementById("16");
elem[17]
  = document.getElementById("17");
elem[18]
  = document.getElementById("18");
elem[19]
  = document.getElementById("19");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
elem[1].children[4].children[0].onclick 
  = function(){add1(elem[1]);};
elem[1].children[4].children[1].onclick 
  = function(){sub1(elem[1]);};
elem[1].children[4].onclick =function(){over(elem[1]);};
elem[1].children[4].children[2].onclick =function(){clear(elem[1]);};

elem[2].children[4].children[0].onclick 
  = function(){add1(elem[2]);};
elem[2].children[4].children[1].onclick 
  = function(){sub1(elem[2]);};
elem[2].children[4].onclick =function(){over(elem[2]);};
elem[2].children[4].children[2].onclick =function(){clear(elem[2]);};

elem[3].children[4].children[0].onclick 
  = function(){add1(elem[3]);};
elem[3].children[4].children[1].onclick 
  = function(){sub1(elem[3]);};
elem[3].children[4].onclick =function(){over(elem[3]);};
elem[3].children[4].children[2].onclick =function(){clear(elem[3]);};

elem[4].children[4].children[0].onclick 
  = function(){add1(elem[4]);};
elem[4].children[4].children[1].onclick 
  = function(){sub1(elem[4]);};
elem[4].children[4].onclick =function(){over(elem[4]);};
elem[4].children[4].children[2].onclick =function(){clear(elem[4]);};

elem[5].children[4].children[0].onclick 
  = function(){add1(elem[5]);};
elem[5].children[4].children[1].onclick 
  = function(){sub1(elem[5]);};
elem[5].children[4].onclick =function(){over(elem[5]);};
elem[5].children[4].children[2].onclick =function(){clear(elem[5]);};

elem[6].children[4].children[0].onclick 
  = function(){add1(elem[6]);};
elem[6].children[4].children[1].onclick 
  = function(){sub1(elem[6]);};
elem[6].children[4].onclick =function(){over(elem[6]);};
elem[6].children[4].children[2].onclick =function(){clear(elem[6]);};

elem[7].children[4].children[0].onclick 
  = function(){add1(elem[7]);};
elem[7].children[4].children[1].onclick 
  = function(){sub1(elem[7]);};
elem[7].children[4].onclick =function(){over(elem[7]);};
elem[7].children[4].children[2].onclick =function(){clear(elem[7]);};

elem[8].children[4].children[0].onclick 
  = function(){add1(elem[8]);};
elem[8].children[4].children[1].onclick 
  = function(){sub1(elem[8]);};
elem[8].children[4].onclick =function(){over(elem[8]);};
elem[8].children[4].children[2].onclick =function(){clear(elem[8]);};

elem[9].children[4].children[0].onclick 
  = function(){add1(elem[9]);};
elem[9].children[4].children[1].onclick 
  = function(){sub1(elem[9]);};
elem[9].children[4].onclick =function(){over(elem[9]);};
elem[9].children[4].children[2].onclick =function(){clear(elem[9]);};

elem[10].children[4].children[0].onclick 
  = function(){add1(elem[10]);};
elem[10].children[4].children[1].onclick 
  = function(){sub1(elem[10]);};
elem[10].children[4].onclick =function(){over(elem[10]);};
elem[10].children[4].children[2].onclick =function(){clear(elem[10]);};

elem[11].children[4].children[0].onclick 
  = function(){add1(elem[11]);};
elem[11].children[4].children[1].onclick 
  = function(){sub1(elem[11]);};
elem[11].children[4].onclick =function(){over(elem[11]);};
elem[11].children[4].children[2].onclick =function(){clear(elem[11]);};

elem[12].children[4].children[0].onclick 
  = function(){add1(elem[12]);};
elem[12].children[4].children[1].onclick 
  = function(){sub1(elem[12]);};
elem[12].children[4].onclick =function(){over(elem[12]);};
elem[12].children[4].children[2].onclick =function(){clear(elem[12]);};

elem[13].children[4].children[0].onclick 
  = function(){add1(elem[13]);};
elem[13].children[4].children[1].onclick 
  = function(){sub1(elem[13]);};
elem[13].children[4].onclick =function(){over(elem[13]);};
elem[13].children[4].children[2].onclick =function(){clear(elem[13]);};

elem[14].children[4].children[0].onclick 
  = function(){add1(elem[14]);};
elem[14].children[4].children[1].onclick 
  = function(){sub1(elem[14]);};
elem[14].children[4].onclick =function(){over(elem[14]);};
elem[14].children[4].children[2].onclick =function(){clear(elem[14]);};

elem[15].children[4].children[0].onclick 
  = function(){add1(elem[15]);};
elem[15].children[4].children[1].onclick 
  = function(){sub1(elem[15]);};
elem[15].children[4].onclick =function(){over(elem[15]);};
elem[15].children[4].children[2].onclick =function(){clear(elem[15]);};

elem[16].children[4].children[0].onclick 
  = function(){add1(elem[16]);};
elem[16].children[4].children[1].onclick 
  = function(){sub1(elem[16]);};
elem[16].children[4].onclick =function(){over(elem[16]);};
elem[16].children[4].children[2].onclick =function(){clear(elem[16]);};

elem[17].children[4].children[0].onclick 
  = function(){add1(elem[17]);};
elem[17].children[4].children[1].onclick 
  = function(){sub1(elem[17]);};
elem[17].children[4].onclick =function(){over(elem[17]);};
elem[17].children[4].children[2].onclick =function(){clear(elem[17]);};

elem[18].children[4].children[0].onclick 
  = function(){add1(elem[18]);};
elem[18].children[4].children[1].onclick 
  = function(){sub1(elem[18]);};
elem[18].children[4].onclick =function(){over(elem[18]);};
elem[18].children[4].children[2].onclick =function(){clear(elem[18]);};

elem[19].children[2].innerHTML = totalNum;
elem[19].children[3].innerHTML = overNum;

function totals1 (elem) {
  document.getElementById("scoreTotal").innerHTML = totalNum;
document.getElementById("overTotal").innerHTML = overNum;
}
// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1",  overNum = overNum + overStart;
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
     totalNum = totalNum + 1;
   overNum = overNum + 1;
  totals1();
}
  //create a "sub1" function
  
    function sub1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "-" ,  overNum = overNum + overStart;
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
        totalNum = totalNum - 1;
    overNum = overNum - 1;
  totals1();
    }
          function over (elem) {
             let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[3].innerHTML = currentScore - 4;
  }  
function clear (elem) {
  let currentScore = elem.children[2].innerHTML;
   currentScore = Number.parseInt(currentScore);
    let currentOver = elem.children[3].innerHTML;
   currentOver = Number.parseInt(currentOver);
  totalNum = totalNum - currentScore;
  overNum = overNum - currentOver;
    elem.children[2].innerHTML = "-";
  totals1();
}
