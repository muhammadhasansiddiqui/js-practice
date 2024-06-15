// !-- Assignment # 31-34
// JAVASCRIPT -->

// <!-- 1. Write a program that displays current date and time in
// your browser. -->

// var rightNow = new Date();
// console.log("🚀 ~ rightNow:", rightNow);

// 2. Write a program that alerts the current month in words.
// For example December.

// var month = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// var d = new Date();
// console.log(month[d.getMonth()]);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var d = new Date();
// console.log(days[d.getDay()]);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var  today = new Date();
// var day = today.getDay();
// var theDay = ["Saturday", "Sunday"];
// console.log("Today is " + theDay[day] + " so have fun!");


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var date = new Date("15june2024");
// var day = date.getDate();
// if (day < 16) {
//   console.log("First fifteen days of the month");
// } else {
//   console.log("Last days of the month");
// }


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var date = new Date();
// var minutes = date.getMinutes();
// console.log("Current minutes: " + minutes);

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var  today = new Date();
// var  hour = today.getHours();
// if (hour < 12) {
//   console.log("It's" + " " + hour + " " +"AM");
// } else {
//   console.log("It's PM");
// }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var  laterDate = new Date("December 31, 2020");
// console.log(laterDate);



// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// var customerName = "abc";
// var currentMonth = "June";
// var numberOfUnits = 410;
// var chargesPerUnit = 16.80;
// var netAmountPayable = numberOfUnits * chargesPerUnit;  
// var latePaymentSurcharge = 230;
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;   
// console.log("Customer Name: " + customerName);
// console.log("Current Month: " + currentMonth);
// console.log("Number of units: " + numberOfUnits.toFixed(2));
// console.log("Charges per unit: " + chargesPerUnit.toFixed(2));
// console.log("Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2));
// console.log("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2));
// console.log("Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2));

// var num =1.5
// console.log(num.toFixed());


// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var userAge =  prompt ("Enter your age");
// var currentDate = new Date();
// var currentYear = currentDate.getFullYear();
// var birthYear = currentYear - userAge;
// console.log("Your birth year is: " + birthYear);