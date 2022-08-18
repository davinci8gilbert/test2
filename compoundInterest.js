// Write the code to generate table
// This function generates a compound interest table.
function generateTable(form) {
  var amount = parseFloat(document.getElementById("deposit").value); // accumulated value for each new year
  var rate = parseFloat(document.getElementById("rate").value); // interest rate
  var years = parseFloat(document.getElementById("years").value); // years for principal to grow
  var interest = (amount * rate)/100; // interest earned each year
  var table = interest*years; // compound interest table
  var year = 1; // the year being calculated
   

  amount = form.elements['deposit'].valueAsNumber;
  rate = form.elements['rate'].valueAsNumber;
  years = form.elements['years'].valueAsNumber;
  table =
    '<table>' +
    '<tr><th>Year</th><th>Starting Value</th>' +
    '<th>Interest Earned</th><th>Ending Value</th></tr>'
    + '<tr><td>'+year+'</td><td>'+amount+'</td><td>'+interest+'</td><td>'+table+'</td></tr>'
    + '<tr><td>'+year+'</td><td>'+amount+'</td><td>'+interest+'</td><td>'+table+'</td></tr>'
    + '<tr><td>'+year+'</td><td>'+amount+'</td><td>'+interest+'</td><td>'+table+'</td></tr>'
    + '<tr><td>'+year+'</td><td>'+amount+'</td><td>'+interest+'</td><td>'+table+'</td></tr>'
    ;

// ---> Write your code here to generate the table and show it in the page

document.getElementById("result").innerHTML = table;


} // end generateTable
