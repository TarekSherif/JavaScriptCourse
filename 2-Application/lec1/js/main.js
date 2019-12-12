//string  ''  or ""  or ``
// var z = "RTC";
// z = "RTC";
// z = `RTC`;

// undefined
// number
//float

//bool{true,false}
// "" = null = undefined=0 false
// "asdasd" =1= true

//var x = parseInt(prompt("Enter  Number1 :"));
// var y = parseInt(prompt("Enter  Number2 :"));

var x = parseFloat(prompt("Enter  Number1 :"));
// op{+,-,*,/}
var op = prompt("Enter  Operation :");
var y = parseFloat(prompt("Enter  Number2 :"));

if (op == "+") {
  alert(x + y);
} else if (op == "-") {
  alert(x - y);
} else if (op == "*") {
  alert(x * y);
} else if (op == "/") {
  if (y == 0) {
    alert("لا يمكن القسمه على 0");
  } else {
    alert(x / y);
  }
}

// if (x === "2") {
//   alert("true");
// } else {
//   alert("false");
// }

// if (x % 5 == 0) {
//   alert("هذا الرقم صح");
// } else {
//   alert("اجري احفظ  جدول 5");
// }
