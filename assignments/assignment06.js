// --- global Variables ---

// default values
let loans = [
    { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
]; 
let int = 0;
let fullLoan = 0;
let payments;

function toComma(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} // Adds commas to values when theres 3 digits after and at least 1 before

let toMoney = (value) => {
  return `\$${toComma(value.toFixed(2))}`; 
} // Applies toComma to applied value

let loadForm = () => {
  if(localStorage.getItem(`loadLoans`) != null){
     loans = JSON.parse(localStorage.getItem(`loadLoans`));
     updateForm();
  } else {
     alert(`No Save`);
  }
} // Loads the loans Array from localStorage if it exists and tells you if it doesn't.


// --- function: loadDoc() ---

function loadDoc() {
    
  // pre-fill defaults for first loan year
  var defaultYear = loans[0].loan_year; // sets defaultYear value
  $("#loan_year0" + 1).val(defaultYear++); // Sets first year to whats in loans array
  var defaultLoanAmount = loans[0].loan_amount; // sets defaultLoanAmount value
  $("#loan_amt0" + 1).val(defaultLoanAmount.toFixed(2)); // sets amount in second column
  var defaultInterestRate = loans[0].loan_int_rate; // sets defaultInterestRate value
  $("#loan_int0" + 1).val(defaultInterestRate); // puts Interest Rate in first box of third column
  var fullLoan 
    = loans[0].loan_amount * (1 + loans[0].loan_int_rate); // Sets full Loan to the amount with interest rate added
  $("#loan_bal0" + 1).text(toMoney(fullLoan)); // puts first yearly balance into Loans form
 //------------------------------//   
  // pre-fill defaults for other loan years
  for(var i=2; i<6; i++) { 
  // For years 2-5
    $(`#loan_year0${i}`).val(defaultYear++); // Fills disabled year catagories
    $(`#loan_year0${i}`).attr("disabled","true"); // Disables years
    $(`#loan_year0${i}`).css({
      "backgroundColor":"grey","color":"white"
    }); // Sets colors to grey and white
    $(`#loan_amt0${i}`).val(defaultLoanAmount.toFixed(2)); // Sets other amounts to 10000
    $(`#loan_int0${i}`).val(defaultInterestRate); 
// Sets disabled int rates to the default rate
    $(`#loan_int0${i}`).attr("disabled","true");  // Disables loan int
    $(`#loan_int0${i}`).css({
      "backgroundColor":"grey","color":"white" // Sets colors to grey and white
    });
    fullLoan 
      = (fullLoan + defaultLoanAmount) 
      * (1 + defaultInterestRate); // makes full loan the total after each year
    $("#loan_bal0" + i).text(toMoney(fullLoan)); // populates other yearly Balances
    
  } // end: "for" loop
    
  $("input[type=text]").focus(function() {
    $(this).select();
    $(this).css("background-color", "yellow");
  }); 
  $("input[type=text]").blur(function() {
    $(this).css("background-color", "white"); // makes usable background colors white
    updateLoansArray();
  });
    
  // set focus to first year: messes up codepen
  // $("#loan_year01").focus();

} // end: function loadDoc()

function updateLoansArray() {
  
  // regex tester web site: https://www.regexpal.com/
  let yearP = /^(19|20)\d{2}$/;
  // True if year is in 1900-2100
  let amtP = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/;
  // Checks if amount is fully a number and returns true if so
  let intP = /^(0|)+(.[0-9]{1,5})?$/;
// Checks to make sure int is under 1 and it is entirely a number
  let valid = true;
  if(!yearP.test($(`#loan_year01`).val())){ // If the tested year isnt between 1900-2099, it returns false
    valid = false;
    $(`#loan_year01`).css("background-color", "red"); // Sets color to red if false
  }
  for (i = 1; i < 6; i++) { //Checks years 2-5 amounts 
if(!amtP.test($(`#loan_amt0${i}`).val())) { // If there is no amount in any catagory return false
      valid = false;
      $(`#loan_amt0${i}`).css("background-color", "red"); // Sets color to red
    } 
  }
  if(!intP.test($(`#loan_int01`).val())) { // Makes sure int rate catagory is filled
    valid = false;
    $(`#loan_int01`).css("background-color", "red"); // Turns color red if incorrect
  }

  if(valid) {
    loans[0].loan_year = parseInt($("#loan_year01").val()); // Changes first loan year to inputted one
    for(var i=1; i<5; i++) {
      loans[i].loan_year = loans[0].loan_year + i;
    } // Changes all other years after the new first year
    for(i = 1; i<6; i++){
      let amt = parseFloat($(`#loan_amt0${i}`).val()).toFixed(2); // Amount equals inputted value
      loans[i-1].loan_amount = amt;
    } // Sets amount in object to inputted amount in Loans form
    let rate = parseFloat($("#loan_int01").val()); // Makes rate equal the inputted rate
    for(i=0; i<5; i++){
      loans[i].loan_int_rate = rate;
    } // Inputs rate in all other boxes in the column
    
    updateForm();
    
  } 
  
} 
// Updates loan form
let updateForm = () => {
  fullLoan = 0; // resets fullLoan
  let totalAmt = 0;
  for(i = 1; i < 6; i++) {
    $(`#loan_year0${i}`).val(loans[i - 1].loan_year); // sets loan years in object
    let amt = loans[i - 1].loan_amount; // sets amt to current loans[] amount 
    $(`#loan_amt0${i}`).val(amt); // Sets amount to the one in the object
    totalAmt += parseFloat(amt); // adds to the total
    $(`#loan_int0${i}`).val(loans[i - 1].loan_int_rate); // sets loan boxes to the current int rate
    fullLoan 
      = (fullLoan + parseFloat(amt)) 
      * (1 + loans[0].loan_int_rate); //calculates new full loan with interest up to that year
    $("#loan_bal0" + i).text(toMoney(fullLoan));
  } // updates yearly balance for each year
  int = fullLoan - totalAmt; // Calculates total intrest
 $(`#loan_int_accrued`).text(toMoney(int)); // Puts updated full intrest accrrued in the bottom right 
  
} // end: function updateForm()
  

// ----- ANGULAR -----

var app = angular.module('myApp', []); // Step #2: Initialize module

app.controller('myCtrl', function($scope) { // Step #3: Create Controller
  $scope.payments = [];
  $scope.populate = function () {
      localStorage.setItem(`loadLoans`, JSON.stringify(loans));
    // Saves the Loans array in localStorage
    updateForm();
    
    let total = fullLoan;
    let intRate = loans[0].loan_int_rate;
    let r = intRate / 12;
    let n = 11;
    //loan payment formula
    //https://www.thebalance.com/loan-payment-calculations-315564
    let pay = 12 * (total / ((((1+r)**(n*12))-1)/(r *(1+r)**(n*12)))); // calculate how much payments are for year's 0-9 
    for (let i = 0; i < 10; i++) {
      total -= pay // takes pay from total at the end of every year
      let int = total * (intRate); //gives interest for each year
      $scope.payments[i] = {
        "year":loans[4].loan_year + i + 1, // Puts the next 9 years into the payments form
        "payment": toMoney(pay), // Puts payments for the next 9 years into payments form
        "amt": toMoney(int), // Puts the intrest amount into the int amount column
        "ye": toMoney(total += int)
      } // adds yearly balance for each year
    }
    $scope.payments[10] = {
      "year":loans[4].loan_year + 11, // sets last year to 11 years from the 5th Loan array year
      "payment": toMoney(total), // Sets last payment to total amount left at the start of year 10
      "amt": toMoney(0), // Sets last amount Balance to 0
      "ye":toMoney(0) // Sets last yearly Balance to 0
    }
  }
});
